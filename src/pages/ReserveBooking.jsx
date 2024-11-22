import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { TiMinus, TiPlus } from "react-icons/ti";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { exec, exec2 } from "../lib/sandbox2";

const ReserveBooking = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [variantId, setVariantId] = useState("");
  const [price, setPrice] = useState(0); // Base nightly rate
  const [totalPrice, setTotalPrice] = useState(0); // Total price
  const [nights, setNights] = useState(1); // Number of nights
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestCount, setGuestCount] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentURL, setPaymentURL] = useState(null);
  const [cartId, setCartId] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(!validateEmail(value)); // Update error state based on validation
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
        `https://cp.raum.africa/store/products/${productId}?currency_code=ngn`,
      )
      .then((response) => {
        const fetchedProduct = response.data.product;
        setProduct(fetchedProduct);
        setVariantId(response.data.product.variants[0].id);

        const basePrice = fetchedProduct.variants[0].original_price / 100;
        const cautionFee = fetchedProduct.cautionFees.prices_ngn / 100;

        setPrice(basePrice);
        calculateTotalPrice(basePrice, cautionFee, startDate, endDate);
        console.log(variantId);
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
    if (product) {
      const cautionFee = product.cautionFees.prices_ngn / 100;
      calculateTotalPrice(price, cautionFee, startDate, endDate);
    }
  }, [startDate, endDate, product, price]);

  const makePayment = async (e) => {
    e.preventDefault();

    // Validation flags
    const errors = {};
    if (!name) errors.name = "Full name is required.";
    if (!email) errors.email = "Email is required.";
    else if (emailError) errors.email = "Please enter a valid email address.";
    if (!phone) errors.phone = "Phone number is required.";
    if (!startDate || !endDate)
      errors.dates = "Check-in and check-out dates are required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors); // Set errors in state
      return;
    }

    setLoading(true);
    setFormErrors({}); // Clear errors on successful validation

    try {
      const result = await exec(
        null,
        productId,
        variantId,
        startDate,
        endDate,
        guestCount,
        name,
        email,
        phone,
      );

      if (result) {
        setPaymentURL(result.checkoutUrl);
        setCartId(result.cartId);
      }
    } catch (error) {
      console.error("Error in payment process:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cartId) {
      exec2(cartId);
    }
  }, [cartId]); // Trigger exec2 when cartId changes

  return (
    <main className="min-h-screen w-full p-6 lg:p-9">
      <div className="flex w-full">
        <div className="invisible hidden h-auto w-1/3 lg:block"></div>
        <div className="mb-8 flex h-auto w-full items-center justify-center gap-3 rounded bg-white/10 p-5 lg:w-2/3 lg:gap-10 lg:bg-transparent">
          <p className="text-primary">Details</p>
          <div className="flex items-center justify-center gap-2 text-fade">
            <span className="h-[0.5px] w-2 bg-fade lg:w-8"></span>
            <FaCircleCheck />
            <span className="h-[0.5px] w-2 bg-fade lg:w-8"></span>
          </div>
          <p className="text-fade">Payment</p>
          <div className="flex items-center justify-center gap-2 text-fade">
            <span className="h-[0.5px] w-2 bg-fade lg:w-8"></span>
            <FaCircleCheck />
            <span className="h-[0.5px] w-2 bg-fade lg:w-8"></span>
          </div>
          <p className="text-fade">Receipt</p>
        </div>
      </div>

      <form
        action={(e) => e.preventDefault()}
        className="flex h-full w-full flex-col gap-10 lg:flex-row lg:gap-0"
      >
        {product ? (
          <>
            <section className="h-full w-full lg:w-1/3">
              <h1 className="text-xl font-medium">Booking Summary</h1>
              <div className="flex w-full items-center gap-2 pt-5">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-16 w-16 rounded"
                />
                <div className="flex w-full justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="text-base font-medium">{product.title}</p>
                    <p className="text-sm font-normal underline">
                      {product.generalAddressArea}
                    </p>
                  </div>
                  <p>N{price.toLocaleString("en-NG")}</p>
                </div>
              </div>
              <div className="flex flex-col pt-5">
                <div className="flex w-full gap-4">
                  <div className="w-16"></div>
                  <div className="w-full">
                    <p className="">Coupon/Discount code</p>
                    <div className="flex gap-4">
                      <div className="flex w-full items-center justify-between gap-10">
                        <input
                          type="text"
                          className="h-9 w-full rounded border border-faded bg-transparent"
                        />
                        <button className="h-full w-[100px] rounded border border-primary px-5 text-primary transition-colors duration-500 ease-in-out hover:bg-primary hover:text-white">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-4 pt-5">
                <div className="invisible w-16"></div>
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
                      {(product.cautionFees.prices_ngn / 100).toLocaleString(
                        "en-NG",
                      )}
                    </span>
                  </p>
                  <p className="flex w-full justify-between py-2">
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
                  <label htmlFor="" className="flex h-10 w-full flex-col gap-3">
                    Check in
                    <DatePicker
                      className="w-full rounded border border-fade bg-transparent p-1 text-center text-fade"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      dateFormat="MMMM d, yyyy"
                    />
                  </label>
                  <label htmlFor="" className="flex h-10 w-full flex-col gap-3">
                    Check out
                    <DatePicker
                      className="w-full rounded border border-fade bg-transparent p-1 text-center text-fade"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
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
                    <p className="flex flex-col items-start justify-center gap-1 text-primary">
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
                {!paymentURL ? (
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
                      "Generate Payment Link"
                    )}
                  </button>
                ) : (
                  <a
                    href={paymentURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded border border-primary bg-transparent p-3 text-white transition-all duration-300 ease-in-out hover:bg-primary"
                  >
                    Complete Payment
                  </a>
                )}
              </div>
            </section>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </form>
    </main>
  );
};

export default ReserveBooking;
