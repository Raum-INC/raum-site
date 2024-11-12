import React, { useState } from "react";
import DashSideBar from "../components/dashboard/DashSideBar";

const DashFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedHighlights, setSelectedHighlights] = useState([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState(1);
  const [selectedBathrooms, setSelectedBathrooms] = useState(1);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [selectedSafety, setSafety] = useState([]);
  const [priceRange, setPriceRange] = useState(75000);

  const handleClearAllFilters = () => {
    setSelectedCategory("All");
    setSelectedHighlights([]);
    setSelectedBedrooms(1);
    setSelectedBathrooms(1);
    setSelectedFacilities([]);
    setSafety([]);
    setPriceRange(500000);
  };

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  const toggleSelection = (setFunction, selectedArray, item) => {
    setFunction(
      selectedArray.includes(item)
        ? selectedArray.filter((i) => i !== item)
        : [...selectedArray, item],
    );
  };

  return (
    <main className="relative flex h-auto w-full overflow-hidden bg-primary_text md:min-h-screen">
      <section className="block min-h-full w-auto">
        <DashSideBar />
      </section>
      <form className="flex w-full flex-col space-y-6 p-4 md:p-6 md:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold md:text-3xl">Filters</h1>
          <button
            onClick={handleClearAllFilters}
            className="text-primary underline underline-offset-2"
          >
            Clear all filters
          </button>
        </div>

        {/* Categories */}
        <div>
          <p className="mb-2 text-base font-medium md:text-lg">Categories</p>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {["All", "Apartments", "Studio", "Duplex", "Selfcons"].map(
              (item) => (
                <button
                  key={item}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCategory(item);
                  }}
                  className={`rounded-full px-3 py-1 text-sm transition-colors md:px-4 md:py-2 md:text-base ${
                    selectedCategory === item ? "bg-primary" : "bg-gray-800"
                  }`}
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Highlights */}
        <div>
          <p className="mb-2 text-base font-medium md:text-lg">Highlights</p>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {[
              "Spacious",
              "Partying",
              "Peaceful",
              "Smoking allowed",
              "Pets allowed",
            ].map((highlight) => (
              <button
                key={highlight}
                onClick={(e) => {
                  e.preventDefault();
                  toggleSelection(
                    setSelectedHighlights,
                    selectedHighlights,
                    highlight,
                  );
                }}
                className={`rounded-full px-3 py-1 text-sm transition-colors md:px-4 md:py-2 md:text-base ${
                  selectedHighlights.includes(highlight)
                    ? "bg-primary"
                    : "bg-gray-800"
                }`}
              >
                {highlight}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <p className="mb-2 text-base font-medium md:text-lg">Price Range</p>
          <div className="flex items-center">
            <span className="text-sm md:text-base">₦ 75,000</span>
            <input
              type="range"
              min={75000}
              max={1000000}
              step={10000}
              value={priceRange}
              onChange={handlePriceChange}
              className="mx-2 flex-grow bg-primary text-primary md:mx-4"
            />
            <span className="text-sm md:text-base">₦ 1,000,000</span>
          </div>
          <p className="mt-1 text-center text-sm md:text-lg">
            ₦ {priceRange.toLocaleString()}
          </p>
        </div>

        {/* Bedrooms */}
        <div>
          <p className="mb-2 text-base font-medium md:text-lg">Bedrooms</p>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedBedrooms(num);
                }}
                className={`rounded-full px-3 py-1 text-sm transition-colors md:px-4 md:py-2 md:text-base ${
                  selectedBedrooms === num ? "bg-primary" : "bg-gray-800"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Bathrooms */}
        <div>
          <p className="mb-2 text-base font-medium md:text-lg">Bathrooms</p>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedBathrooms(num);
                }}
                className={`rounded-full px-3 py-1 text-sm transition-colors md:px-4 md:py-2 md:text-base ${
                  selectedBathrooms === num ? "bg-primary" : "bg-gray-800"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div>
          <p className="mb-2 text-base font-medium md:text-lg">Facilities</p>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {[
              "Wifi",
              "Swimming pool",
              "Gym",
              "Cinema",
              "Parking space",
              "Air conditioning",
              "TV",
              "Security camera",
              "Washer",
            ].map((facility) => (
              <button
                key={facility}
                onClick={(e) => {
                  e.preventDefault();
                  toggleSelection(
                    setSelectedFacilities,
                    selectedFacilities,
                    facility,
                  );
                }}
                className={`rounded-full px-3 py-1 text-sm transition-colors md:px-4 md:py-2 md:text-base ${
                  selectedFacilities.includes(facility)
                    ? "bg-primary"
                    : "bg-gray-800"
                }`}
              >
                {facility}
              </button>
            ))}
          </div>
        </div>

        {/* Safety Items */}
        <div>
          <p className="mb-2 text-base font-medium md:text-lg">Safety Items</p>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {["Smoke alarm", "First aid", "Fire extinguisher"].map((item) => (
              <button
                key={item}
                onClick={(e) => {
                  e.preventDefault();
                  toggleSelection(setSafety, selectedSafety, item);
                }}
                className={`rounded-full px-3 py-1 text-sm transition-colors md:px-4 md:py-2 md:text-base ${
                  selectedSafety.includes(item) ? "bg-primary" : "bg-gray-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Search Button */}
        <button className="mt-4 w-full rounded-full bg-primary py-2 text-base font-semibold text-white transition-colors hover:bg-blue-700 md:mt-6 md:py-3 md:text-lg">
          Search
        </button>
      </form>
    </main>
  );
};

export default DashFilter;
