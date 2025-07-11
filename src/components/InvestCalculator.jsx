import React, { useState } from "react";

const MIN = 1000000;
const MAX = 100000000;
const ROI = 0.3; // 30% annual ROI

const durations = [
  { label: "1 Year", value: 1 },
  { label: "2 Years", value: 2 },
  { label: "3+ Years", value: 3 },
];

const InvestCalculator = () => {
  const [amount, setAmount] = useState(MIN);
  const [duration, setDuration] = useState(1);
  const [reinvest, setReinvest] = useState(true);

  // Calculate projected profit and total return
  let projectedProfit, totalReturn, compounding;
  if (reinvest) {
    // Compound interest formula: A = P(1 + r)^n
    totalReturn = Math.round(amount * Math.pow(1 + ROI, duration));
    projectedProfit = totalReturn - amount;
    compounding = "Yes";
  } else {
    // Simple interest: Profit = P * r * n
    projectedProfit = Math.round(amount * ROI * duration);
    totalReturn = amount + projectedProfit;
    compounding = "No";
  }
  return (
    <main className="h-auto w-full rounded-xl bg-[#252525] p-5 xl:h-[800px] xl:p-10">
      <h4 className="text-lg font-semibold xl:text-2xl">
        Investment Returns Estimator
      </h4>
      <div className="mt-5 flex flex-col gap-5">
        <p>1. How much would you like to invest?</p>
        <p className="h-12 w-full rounded-md bg-[#111111] p-3 text-xl font-bold text-white outline-none">
          {`₦${amount.toLocaleString("en-NG")}`}
        </p>
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={100000}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="h-2 w-full appearance-none rounded-lg bg-gray-700 accent-primary focus:outline-none [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:bg-white [&::-ms-thumb]:border-2 [&::-ms-thumb]:border-primary [&::-ms-thumb]:bg-white [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200"
          style={{
            background: `linear-gradient(to right, #1D88FE ${((amount - MIN) / (MAX - MIN)) * 100}%, #444 ${((amount - MIN) / (MAX - MIN)) * 100}%)`,
          }}
        />
        <div className="mt-1 flex justify-between text-xs text-white/70">
          <span>₦{MIN.toLocaleString("en-NG")}</span>
          <span>₦{MAX.toLocaleString("en-NG")}</span>
        </div>
      </div>

      <p className="mt-6 font-medium">2. Choose your investment duration:</p>
      <div className="mt-3 flex items-center justify-between gap-5 xl:gap-10">
        {durations.map((d) => (
          <button
            key={d.value}
            className={`h-12 w-full rounded-lg p-3 text-center font-bold italic transition-all ${
              duration === d.value
                ? "bg-primary text-white"
                : "bg-[#18181c] text-white/60"
            }`}
            onClick={() => setDuration(d.value)}
          >
            {d.label}
          </button>
        ))}
      </div>

      <p className="mt-6 font-medium">3. Reinvest profits?</p>
      <div className="mt-3 flex items-center gap-3">
        {/* Toggle Switch */}
        <button
          onClick={() => setReinvest((v) => !v)}
          className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-200 focus:outline-none ${
            reinvest ? "bg-primary" : "bg-gray-600"
          }`}
          aria-pressed={reinvest}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-200 ${
              reinvest ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
        <span className="font-bold italic text-white">
          {reinvest ? "YES" : "NO"}
        </span>
      </div>

      {/* Summary Box */}
      <div className="mt-8 rounded-xl bg-[#18181c] p-6 text-white">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span>Capital Invested:</span>
            <span className="font-bold">₦{amount.toLocaleString("en-NG")}</span>
          </div>
          <div className="flex justify-between">
            <span>Annual ROI:</span>
            <span className="font-bold">30%</span>
          </div>
          <div className="flex justify-between">
            <span>Compounding:</span>
            <span className="font-bold">{compounding}</span>
          </div>
          <div className="flex justify-between">
            <span>Projected Profit:</span>
            <span className="font-bold">
              ₦{projectedProfit.toLocaleString("en-NG")}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Total Return:</span>
            <span className="font-bold">
              ₦{totalReturn.toLocaleString("en-NG")}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InvestCalculator;
