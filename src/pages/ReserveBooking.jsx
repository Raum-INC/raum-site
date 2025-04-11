import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { TiMinus, TiPlus } from "react-icons/ti";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  exec,
  exec2,
  getPropertyAvailability,
  reservePropeerty,
} from "../lib/sandbox2";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import BookingInfo from "../components/listings/BookingInfo";

const ReserveBooking = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [variantId, setVariantId] = useState("");
  const [price, setPrice] = useState(0); // Base nightly rate
  const [totalPrice, setTotalPrice] = useState(0); // Total price
  const [nights, setNights] = useState(1); // Number of nights
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [guestCount, setGuestCount] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false); // Track discount status
  const [emailError, setEmailError] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [cartId, setCartId] = useState(null);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(!validateEmail(value));
  };

  const increment = () => {
    setGuestCount(guestCount + 1);
  };

  const decrement = () => {
    if (guestCount > 1) {
      setGuestCount(guestCount - 1);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://staging-cp.raum.africa/store/products/${productId}?currency_code=ngn`,
      )
      .then((response) => {
        const fetchedProduct = response.data.product;
        setProduct(fetchedProduct);
        setVariantId(response.data.product.variants[0].id);

        const basePrice = fetchedProduct.variants[0].original_price / 100;
        const cautionFee = fetchedProduct.cautionFees.prices_ngn / 100;

        setPrice(basePrice);
        calculateTotalPrice(basePrice, cautionFee, startDate, endDate);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productId]);

  const calculateTotalPrice = (basePrice, cautionFee, start, end) => {
    const calculatedNights = Math.max(
      1,
      Math.ceil((end - start) / (1000 * 60 * 60 * 24)),
    );
    setNights(calculatedNights);
    const nightsTotal = calculatedNights * basePrice;
    const newTotalPrice = nightsTotal + cautionFee;
    setTotalPrice(newTotalPrice);
  };

  useEffect(() => {
    if (productId) {
      const fetchUnavailableDates = async () => {
        try {
          const data = await getPropertyAvailability(productId, startDate);
          console.log("Fetched bookings:", data);

          if (Array.isArray(data)) {
            const allUnavailableDates = data.flatMap((booking) => {
              const start = new Date(booking.bookingStartDate);
              const end = new Date(booking.bookingEndDate);
              const dates = [];

              // Get every date from start to end (inclusive)
              let currentDate = new Date(start);
              while (currentDate <= end) {
                dates.push(new Date(currentDate));
                currentDate.setDate(currentDate.getDate() + 1);
              }

              return dates;
            });

            setUnavailableDates(allUnavailableDates);
          }
        } catch (error) {
          console.error("Error fetching unavailable dates:", error);
        }
      };

      fetchUnavailableDates();
    }
  }, [productId]);

  useEffect(() => {
    if (product) {
      const cautionFee = product.cautionFees.prices_ngn / 100;
      calculateTotalPrice(price, cautionFee, startDate, endDate);
    }
  }, [startDate, endDate, product, price]);

  const handleDiscountApply = () => {
    // Simulate discount application logic (modify as needed based on API integration)
    if (discountCode === "HOHOHO24") {
      setTotalPrice((prev) => prev * 0.9); // Apply 10% discount
      setIsDiscountApplied(true);
    } else {
      alert("Invalid discount code");
      setIsDiscountApplied(false);
    }
  };

  const makePayment = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!name) errors.name = "Full name is required.";
    if (!email) errors.email = "Email is required.";
    else if (emailError) errors.email = "Please enter a valid email address.";
    if (!phone) errors.phone = "Phone number is required.";
    if (!startDate || !endDate)
      errors.dates = "Check-in and check-out dates are required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    setFormErrors({});

    try {
      setPaymentSuccess(false); // Reset payment success state
      const { bookingDetails, success } = await exec(
        null,
        productId,
        variantId,
        startDate,
        endDate,
        guestCount,
        name,
        email,
        phone,
        discountCode,
      );

      if (success) {
        // Only set booking details here, after payment is completed and details are fetched
        setBookingDetails(bookingDetails);
        setPaymentSuccess(true); // Set payment success state
      } else {
        console.error("Booking flow failed or was cancelled.");
      }
    } catch (error) {
      console.error("Error during payment process:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cartId) {
      exec2(cartId);
    }
  }, [cartId]);

  return (
    <main className="min-h-screen w-full p-6 lg:p-9">
      {bookingDetails && paymentSuccess ? (
        // ✅ Show Booking Information Only After Payment Success
        <>
          <BookingInfo
            bookingDetails={bookingDetails}
            setPaymentSuccess={setPaymentSuccess}
            setBookingDetails={setBookingDetails}
            setCartId={setCartId}
            startDate={startDate}
            endDate={endDate}
            guestCount={guestCount}
            totalPrice={totalPrice}
          />
        </>
      ) : (
        // ✅ Render Booking Form before payment
        <>
          <form
            // action={(e) => e.preventDefault()}
            className="flex h-full w-full flex-col gap-10 lg:flex-row lg:gap-0"
          >
            {product ? (
              <>
                <section className="h-full w-full lg:w-1/3">
                  <h1 className="text-xl font-medium">Booking Summary</h1>
                  <div className="flex w-full items-center gap-2 rounded border pr-2 lg:border-0 lg:pt-5">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-[120px] w-[120px] rounded-l object-cover lg:h-16 lg:w-16 lg:rounded"
                    />
                    <div className="flex w-full flex-col gap-8 lg:flex-row lg:justify-between">
                      <div className="flex flex-col lg:gap-2">
                        <p className="text-sm font-medium lg:text-base">
                          {product.title}
                        </p>
                        <p className="text-xs font-normal underline lg:text-sm">
                          {product.generalAddressArea}
                        </p>
                      </div>
                      <div className="flex justify-between gap-2 lg:flex-col lg:items-end">
                        <p className="font-bold">
                          N{price.toLocaleString("en-NG")}
                        </p>
                        <button onClick={() => navigate(-1)}>
                          <BiTrash
                            size={25}
                            className="rounded-md bg-white p-1 text-black"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pt-5">
                    <div className="flex w-full gap-4">
                      <div className="hidden w-16 lg:block"></div>
                      <div className="w-full">
                        <p className="">Coupon/Discount code</p>
                        <div className="flex w-full gap-4">
                          <div className="flex w-full flex-col items-center justify-between gap-2">
                            <div className="flex w-full items-center justify-between gap-5">
                              <input
                                type="text"
                                value={discountCode}
                                onChange={(e) =>
                                  setDiscountCode(e.target.value)
                                }
                                className="h-9 w-full rounded border border-faded bg-transparent p-1 px-2"
                                placeholder="Enter discount code"
                              />
                              <button
                                onClick={handleDiscountApply}
                                type="button"
                                className="h-full w-[100px] rounded bg-white px-5 text-primary"
                              >
                                Apply
                              </button>
                            </div>
                            {isDiscountApplied && (
                              <p className="text-green-500">
                                Discount applied successfully!
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full gap-4 pt-5">
                    <div className="invisible hidden w-16 lg:block"></div>
                    <div className="w-full divide-y-[1px] divide-faded/30">
                      <p className="flex w-full justify-between py-2">
                        Nights <span>{nights}</span>
                      </p>
                      <p className="flex w-full justify-between py-2">
                        Subtotal <span>N{price.toLocaleString("en-NG")}</span>
                      </p>
                      <p className="flex w-full justify-between py-2">
                        Caution Fee{" "}
                        <span>
                          N
                          {(
                            product.cautionFees.prices_ngn / 100
                          ).toLocaleString("en-NG")}
                        </span>
                      </p>
                      <p className="flex w-full justify-between rounded bg-white p-2 text-black">
                        Total Due{" "}
                        <span className="text-primary">
                          N{totalPrice.toLocaleString("en-NG")}
                        </span>
                      </p>
                    </div>
                  </div>
                </section>

                <section className="flex h-full w-full flex-col items-center gap-5 lg:w-2/3 lg:px-10">
                  <div className="flex h-auto w-full flex-col items-start justify-center gap-3 lg:w-7/12">
                    <p className="text-xl font-medium">Customer Details</p>
                    <div className="flex h-auto w-full flex-col items-end justify-between">
                      <label className="flex w-full items-start justify-between whitespace-nowrap">
                        Full Name:
                        <input
                          required
                          type="text"
                          name="customername"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={`w-2/3 rounded border ${
                            formErrors.name ? "border-red-500" : "border-fade"
                          } bg-transparent p-1 text-fade`}
                        />
                      </label>
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.name}
                        </p>
                      )}{" "}
                    </div>

                    <div className="flex h-auto w-full flex-col items-end justify-between">
                      <label className="flex w-full items-start justify-between whitespace-nowrap">
                        Email:
                        <input
                          required
                          type="email"
                          name="customerEmail"
                          value={email}
                          onChange={handleEmailChange}
                          className={`w-2/3 rounded border ${
                            formErrors.email ? "border-red-500" : "border-fade"
                          } bg-transparent p-1 text-fade`}
                        />
                      </label>
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.email}
                        </p>
                      )}{" "}
                    </div>

                    <div className="flex h-auto w-full flex-col items-end justify-between">
                      <label className="flex h-auto w-full items-center justify-between whitespace-nowrap">
                        Phone Number:
                        <input
                          required
                          type="text"
                          name="customerPhoneNumber"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={`w-2/3 rounded border ${
                            formErrors.phone ? "border-red-500" : "border-fade"
                          } bg-transparent p-1 text-fade`}
                        />
                      </label>
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-3 lg:w-7/12">
                    <p>Booking Dates</p>
                    <div className="flex w-full items-center justify-between gap-5">
                      <label
                        htmlFor=""
                        className="flex h-10 w-full flex-col gap-3"
                      >
                        Check in
                        <DatePicker
                          className="w-full rounded border border-fade bg-transparent p-1 text-center text-fade"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          excludeDates={unavailableDates} // Lock unavailable dates
                          dateFormat="MMMM d, yyyy"
                        />
                      </label>
                      <label
                        htmlFor=""
                        className="flex h-10 w-full flex-col gap-3"
                      >
                        Check out
                        <DatePicker
                          className="w-full rounded border border-fade bg-transparent p-1 text-center text-fade"
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          excludeDates={unavailableDates} // Lock unavailable dates
                          minDate={
                            new Date(startDate.getTime() + 24 * 60 * 60 * 1000)
                          } // Ensure min 1 night
                          dateFormat="MMMM d, yyyy"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex h-auto w-full flex-col gap-3 pt-5 lg:w-7/12">
                    <p>How many individuals</p>

                    <div className="flex h-auto w-full flex-col items-start justify-center rounded bg-fade/20 p-3">
                      <div className="flex w-full justify-between">
                        <p className="flex flex-col items-start justify-center gap-1">
                          Adults
                          <span className="text-sm text-white/50">
                            Over 17 Years
                          </span>
                        </p>
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              decrement();
                            }}
                            className="rounded border border-white/30 bg-fade/40 p-1"
                          >
                            <TiMinus />
                          </button>
                          <p className="w-8 text-center">{guestCount}</p>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              increment();
                            }}
                            className="rounded border border-white/30 bg-fade/40 p-1"
                          >
                            <TiPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex w-full justify-end lg:w-7/12">
                    <button
                      type="submit"
                      onClick={makePayment}
                      className={`rounded bg-primary p-3 text-white ${
                        loading ? "cursor-not-allowed opacity-50" : ""
                      }`}
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center gap-2">
                          <span className="loader"></span> {/* Spinner */}
                          Processing...
                        </div>
                      ) : (
                        "Proceed to Payment"
                      )}
                    </button>
                  </div>
                </section>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </form>
        </>
      )}
    </main>
  );
};

export default ReserveBooking;
