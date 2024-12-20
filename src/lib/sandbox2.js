import axios from "axios";
import Paystack from "@paystack/inline-js";

const BASE_URL = "https://staging-cp.raum.africa/";
const PAYSTACK_SECRET_KEY =
  "Bearer pk_test_2827a38e3fad06d96245a33aa94f749de05f60ce";

/**
 * Fetch property availability based on date.
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
 * Complete the cart after successful payment.
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
 * Reserve a property based on the provided criteria.
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
      endDate: endDate.toISOString().slice(0, 10),
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
 * Provide contact information for booking.
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

/**
 * Fetch booking details by booking ID.
 */
export async function fetchBookingDetails(bookingId) {
  try {
    const { data } = await axios.get(`${BASE_URL}store/bookings/${bookingId}`);
    console.log("Booking Details:", data);
    return data;
  } catch (e) {
    console.error(
      "Error fetching booking details:",
      e.response?.data?.message || e.message,
    );
    console.error("Error URL:", e.response?.config?.url);
    return null;
  }
}

/**
 * Creates a payment session and initializes Paystack with proper callbacks.
 */
async function getPaymentSession(bookingId, variantId, email, discountCode) {
  try {
    const { data: cartData } = await axios.post(`${BASE_URL}store/carts`, {
      region_id: "reg_01HF59W065XF8CC9SKBYRH4F6P",
    });

    const cartId = cartData?.cart?.id;
    console.log("Cart ID:", cartId);

    await axios.post(`${BASE_URL}store/carts/${cartId}/line-items`, {
      variant_id: variantId,
      metadata: { bookingId },
    });

    await axios.post(`${BASE_URL}store/carts/${cartId}`, {
      ...(discountCode ? { discounts: [{ code: discountCode }] } : {}),
      email,
    });

    const { data: paymentData } = await axios.post(
      `${BASE_URL}store/carts/${cartId}/payment-sessions`,
    );

    const paymentUrl =
      paymentData?.cart?.payment_session?.data?.paystackTxAuthData
        ?.authorization_url;
    const accessCode =
      paymentData?.cart?.payment_session?.data?.paystackTxAuthData?.access_code;

    if (!paymentUrl || !accessCode) {
      console.error("Error: Payment URL or Access Code is missing.");
      return null;
    }

    console.log("Payment URL:", paymentUrl);
    console.log("Access Code:", accessCode);

    const paystackPopup = new Paystack();

    paystackPopup.resumeTransaction(accessCode, {
      onSuccess: async (data) => {
        console.log("Payment successful! ", data);
        const completedSuccessfully = await completeCartAfterPayment(cartId);
        console.log(`Completed payment successfully: ${completedSuccessfully}`);
      },
      onError: (data) => {
        console.error("Payment failed: ", data);
      },
      onCancel: (data) => {
        console.log("Payment cancelled. ", data);
      },
    });

    return { cartId };
  } catch (error) {
    console.error("Error in getPaymentSession:", error.message);
  }
}

/**
 * Execute the payment and fetch booking details upon success.
 */
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
  discountCode,
) {
  let bookingId = clickedExistingBookingId;

  // Step 1: Create or retrieve the booking
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

  // Step 2: Provide contact information for the booking
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

  // Step 3: Initialize the payment session
  const { cartId } = await getPaymentSession(
    bookingId,
    variantId,
    email,
    discountCode,
  );

  if (!cartId) {
    console.error("Error: Failed to retrieve cart ID.");
    return;
  }

  console.log("Cart ID from Payment Session:", cartId);

  // Step 5: Fetch booking details after successful payment
  const bookingDetails = await fetchBookingDetails(bookingId);
  if (bookingDetails) {
    console.log("Booking Details after Payment:", bookingDetails);
  } else {
    console.error("Error: Failed to fetch booking details.");
  }

  return bookingDetails;
}

/**
 * Finalizes the cart after successful payment.
 */
export async function exec2(cartId) {
  const completedSuccessfully = await completeCartAfterPayment(cartId);
  console.log(`Completed payment successfully: ${completedSuccessfully}`);

  return completedSuccessfully;
}
