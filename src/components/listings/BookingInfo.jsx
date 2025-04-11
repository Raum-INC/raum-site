import React from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "../Motion";

const BookingInfo = ({
  bookingDetails,
  setPaymentSuccess,
  setBookingDetails,
  setCartId,
  startDate,
  endDate,
  guestCount,
  totalPrice,
}) => {
  return (
    <FadeIn>
      <section className="h-full w-full">
        <div className="flex h-auto w-full flex-col items-center justify-center gap-5 rounded bg-primary_text p-6 text-white lg:h-[500px] lg:flex-row">
          <div className="flex h-[130px] w-full flex-col items-start justify-between gap-2 rounded lg:h-full lg:w-1/3 lg:p-5 lg:px-10">
            <div className="w-full">
              <h2 className="text-2xl font-bold text-primary">
                Booking Successful!
              </h2>
              <p>Here is your booking information</p>
            </div>
            <Link
              to="/admin-dashboard"
              onClick={() => {
                // Reset for another booking
                setPaymentSuccess(false);
                setBookingDetails({});
                setCartId(null);
              }}
              className="rounded-full bg-primary px-5 py-3 text-white"
            >
              Make Another Booking
            </Link>
          </div>
          <div className="flex h-full w-full flex-col items-start justify-between gap-2 rounded bg-white p-5 text-primary_text lg:w-2/3 lg:p-10">
            {/* <p>
                <strong>Booking ID:</strong> {bookingDetails.booking?.id || "N/A"}
              </p> */}
            <p>
              <strong>Customer Name:</strong>{" "}
              {bookingDetails.booking?.metadata?.contact?.name}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {bookingDetails.booking?.metadata?.contact?.email}
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              {bookingDetails.booking?.metadata?.contact?.phone}
            </p>
            <p>
              <strong>Check-in Date:</strong> {startDate.toLocaleDateString()}
            </p>
            <p>
              <strong>Check-out Date:</strong> {endDate.toLocaleDateString()}
            </p>
            <p>
              <strong>Guests:</strong> {guestCount}
            </p>
            <p>
              <strong>Total Price:</strong> N
              {totalPrice.toLocaleString("en-NG")}
            </p>
            <p className="rounded-full bg-primary_text p-1 px-3 text-white">
              This information has been sent to your email address.
            </p>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default BookingInfo;
