import axios from "axios";

// const BASE_URL = "http://localhost:9000/";
const BASE_URL = "https://staging-cp.raum.africa/";

/**
 * @param propertyId
 * @param date provide any date in the month of the calendar for which you want to get available dates, must conform to ISO8601
 * @returns PropertyBooking[]
 */
export async function getPropertyAvailability(productId, startDate) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}store/products/availability?propertyId=${productId}&date=${startDate.toISOString().slice(0, 10)}`,
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
  productId,
  startDate,
  endDate,
  guestCount,
) {
  try {
    const { data } = await axios.post(`${BASE_URL}store/products/reserve`, {
      propertyId: productId,
      startDate: startDate.toISOString().slice(0, 10),
      endDate: endDate.toISOString().slice(0, 10), // Use the correct variable
      guests: guestCount,
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
  email,
  phone,
  name,
) {
  try {
    const payload = {
      metadata: {
        contact: {
          email: email,
          phone: phone,
          name: name,
        },
      },
    };
    console.log("Payload being sent:", payload);

    const { data } = await axios.post(
      `${BASE_URL}store/bookings/${bookingId}`,
      payload,
    );

    console.log("Contact information provided:", data);
    return data;
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
    console.log("Cart ID:", cartId);

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

    console.log("Payment URL:", paymentUrl);

    return { paymentUrl, cartId };
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
  name,
  email,
  phone,
) {
  let bookingId = clickedExistingBookingId;

  if (!bookingId) {
    await getPropertyAvailability(productId, startDate);
    const response = await reservePropeerty(
      productId,
      startDate,
      endDate,
      guestCount,
    );

    if (!response || !response.booking) {
      console.error("Error: Booking could not be created.");
      return;
    }

    bookingId = response.booking.id;
  }

  console.log("Booking ID:", bookingId);

  const contactResponse = await provideContactInformationForBooking(
    bookingId,
    email,
    phone,
    name,
  );

  if (!contactResponse) {
    console.error("Error: Failed to provide contact information.");
    return;
  }

  const { paymentUrl, cartId } = await getPaymentSession(
    bookingId,
    variantId,
    email,
    null,
  );

  if (!paymentUrl) {
    console.error("Error: Failed to retrieve checkout URL.");
    return;
  }

  console.log("Checkout URL:", paymentUrl);
  console.log("Cart ID:", cartId);

  return { checkoutUrl: paymentUrl, cartId };
}

export async function exec2(cartId) {
  const completedSuccessfully = await completeCartAfterPayment(cartId);
  console.error(`completed payment successfully: ${completedSuccessfully}`);
}
