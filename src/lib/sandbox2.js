import axios from "axios";

// const BASE_URL = "http://localhost:9000/";
const BASE_URL = "https://staging-cp.raum.africa/";

/**
 * @param propertyId
 * @param date provide any date in the month of the calendar for which you want to get available dates, must conform to ISO8601
 * @returns PropertyBooking[]
 */
export async function getPropertyAvailability(propertyId, date) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}store/products/availability?propertyId=${propertyId}&date=${date}`,
    );
    console.warn(JSON.stringify(data));
    return data;
  } catch (e) {
    console.error(e.response?.config?.url);
    console.error(e.response?.data?.message);
  }
}

/**
 * to be called after successful payment to paystack, might scrap eventually
 */
export async function completeCartAfterPayment(cartId) {
  try {
    const { data } = await axios.post(
      `${BASE_URL}store/carts/${cartId}/complete`,
    );
    return data?.data?.object === "order";
  } catch (e) {
    console.error(e.response?.config?.url);
    console.error(e.response?.data?.message);
  }
}

/**
 * @param startDate conform to ISO8601
 * @param endDate conform to ISO8601
 * @param email providing the customer’s email allows them to overwrite existing bookings in this timeslot if they created them
 * @returns PropertyBooking
 */
export async function reservePropeerty(
  propertyId,
  startDate,
  endDate,
  guestCount,
) {
  try {
    const { data } = await axios.post(`${BASE_URL}store/products/reserve`, {
      startDate,
      endDate,
      guests: guestCount,
      propertyId,
    });
    console.warn(JSON.stringify(data));
    return data;
  } catch (e) {
    console.error(e.response?.config?.url);
    console.error(e.response?.data?.message);
  }
}

/**
 * @returns PropertyBooking
 */
export async function provideContactInformationForBooking(
  bookingId,
  phone,
  email,
  fullname,
) {
  try {
    const { data } = await axios.post(
      `${BASE_URL}store/bookings/${bookingId}`,
      {
        metadata: {
          contact: {
            phone: phone,
            email: email,
            name: fullname,
          },
        },
      },
    );
    console.log("Contact information provided:", data);
    return data; // Ensure it returns data
  } catch (e) {
    console.error("Error message:", e.response?.data?.message || e.message);
    console.error("Error URL:", e.response?.config?.url);
  }
}

async function getPaymentSession(bookingId, variantId, email, discountCode) {
  try {
    const { data } = await axios.post(`${BASE_URL}store/carts`, {
      region_id: "reg_01HF59W065XF8CC9SKBYRH4F6P",
    });

    const cartId = data?.cart?.id;
    console.error(cartId);

    await axios.post(`${BASE_URL}store/carts/${cartId}/line-items`, {
      variant_id: variantId,
      metadata: { bookingId },
    });

    await axios.post(`${BASE_URL}store/carts/${cartId}`, {
      ...(discountCode ? { discounts: [{ code: discountCode }] } : {}),
      email,
    });

    const { data: data4 } = await axios.post(
      `${BASE_URL}store/carts/${cartId}/payment-sessions`,
    );

    const paymentUrl =
      data4?.cart?.payment_session?.data?.paystackTxAuthData?.authorization_url;
    console.error(paymentUrl);
    return paymentUrl;
  } catch (e) {
    console.error("Error message:", e.response?.data?.message || e.message);
    console.error("Error URL:", e.response?.config?.url);
  }
}

export async function exec(
  clickedExistingBookingId,
  productId,
  variantId,
  startDate,
  endDate,
  guestCount,
  fullname,
  email,
  phone,
) {
  let bookingId = clickedExistingBookingId;

  if (!bookingId) {
    await getPropertyAvailability(productId, startDate);
    const { booking } = await reservePropeerty(
      productId,
      startDate,
      endDate,
      guestCount,
    );
    bookingId = booking?.id;
  }

  console.log("Booking ID:", bookingId);

  await provideContactInformationForBooking(bookingId, email, phone, fullname);

  const checkoutUrl = await getPaymentSession(bookingId, variantId, email);

  console.log("Checkout URL:", checkoutUrl);
}

export async function exec2(cartId = "cart_01JBJ1M2BC2FK0QCYN58RBAC5H") {
  const completedSuccessfully = await completeCartAfterPayment(cartId);
  console.error(`completed payment successfully: ${completedSuccessfully}`);
}
