import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashSideBar from "../components/dashboard/DashSideBar";

const DashFilter = () => {
  const [categories, setCategories] = useState([{}]);
  const [highlights, setHighlights] = useState([{}]);
  const [facilities, setFacilities] = useState([]);
  const [safetyItems, setSafetyItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedHighlights, setSelectedHighlights] = useState([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState(1);
  const [selectedBathrooms, setSelectedBathrooms] = useState(1);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [selectedSafety, setSafety] = useState([]);
  const [priceRange, setPriceRange] = useState(75000);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await fetch("https://cp.raum.africa/admin/domain");
        if (!response.ok) {
          throw new Error("Failed to fetch filter options");
        }
        const data = await response.json();

        // console.log("Filter Options Response:", data);

        setFacilities(
          data.store.metadata.facilities?.map((facility) => facility.tag) || [],
        );
        setSafetyItems(
          data.store.metadata.safety_items?.map((item) => item.tag) || [],
        );

        console.log(
          "Parsed Facilities:",
          data.store.metadata.facilities?.map((facility) => facility.tag),
        );
        console.log(
          "Parsed Safety Items:",
          data.store.metadata.safety_items?.map((item) => item.tag),
        );
      } catch (error) {
        console.error("Error fetching filter options:", error);
      }
    };

    fetchFilters();
  }, []);

  useEffect(() => {
    const highlightFetch = async () => {
      try {
        const response = await fetch(
          "https://cp.raum.africa/store/product-tags",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product tags");
        }

        const data = await response.json();

        if (data.product_tags && Array.isArray(data.product_tags)) {
          console.log("Tags Response:", data.product_tags);

          setHighlights(
            data.product_tags.map((tag) => ({
              id: tag.id,
              value: tag.value,
            })),
          );
        } else {
          console.warn("No product tags found in response");
          setHighlights([]);
        }
      } catch (error) {
        console.error("Error fetching product tags:", error);
      }
    };

    highlightFetch();
  }, []);

  useEffect(() => {
    const categoriesFetch = async () => {
      try {
        const response = await fetch(
          "https://cp.raum.africa/store/product-categories",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await response.json();
        console.log("Categories Response:", data.product_categories);

        if (data.product_categories && Array.isArray(data.product_categories)) {
          setCategories(
            data.product_categories.map((category) => ({
              id: category.id,
              name: category.name, // Change to `name` to match rendering logic
            })),
          );
        } else {
          console.warn("No categories found in response");
          setCategories([]); // Set to empty array if no categories
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    categoriesFetch();
  }, []);

  const handleClearAllFilters = () => {
    setSelectedCategory("All");
    setSelectedHighlights([]);
    setSelectedBedrooms(1);
    setSelectedBathrooms(1);
    setSelectedFacilities([]);
    setSafety([]);
    setPriceRange(75000);
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const facilityFilters = selectedFacilities.map(
      (facility) => `metadata.facilities.${facility}=1`,
    );
    const safetyFilters = selectedSafety.map(
      (safety) => `metadata.safety_items.${safety}=1`,
    );

    let filters = [
      ...facilityFilters,
      ...safetyFilters,
      `metadata.parameters.beds IN [${selectedBedrooms}]`,
      `metadata.parameters.baths IN [${selectedBathrooms}]`,
      `prices_ngn >= ${priceRange}`,
      `tags IN [${selectedHighlights.join(",")}]`,
    ];

    if (selectedCategory !== "All") {
      filters.push(`categories IN [${selectedCategory}]`);
    }

    const body = {
      limit: 1,
      offset: 0,
      filter: filters.join(" AND "),
    };

    try {
      const response = await fetch(
        "https://cp.raum.africa/store/products/search?status=published",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        },
      );

      console.log("Search Request:", body);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log("Search Results:", data);

      // Navigate to results page with query data
      navigate("/admin-dashboard/filter/result", {
        state: { queryData: body },
      });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <main className="relative flex h-auto w-full overflow-hidden bg-primary_text md:min-h-screen">
      <section className="block min-h-full w-auto">
        <DashSideBar />
      </section>
      <form
        onSubmit={handleFormSubmit}
        className="flex w-full flex-col space-y-6 p-4 md:p-6 md:px-8"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold md:text-3xl">Filters</h1>
          <button
            type="button"
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
            {categories.map((item) => (
              <button
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCategory(item.id);
                }}
                className={`rounded-full px-3 py-1 text-sm transition-colors md:px-4 md:py-2 md:text-base ${
                  selectedCategory === item.id ? "bg-primary" : "bg-gray-800"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div>
          <p className="mb-2 text-base font-medium md:text-lg">Highlights</p>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {highlights.map((highlight) => (
              <button
                key={highlight.id}
                onClick={(e) => {
                  e.preventDefault();
                  toggleSelection(
                    setSelectedHighlights,
                    selectedHighlights,
                    highlight.id,
                  );
                }}
                className={`rounded-full px-3 py-1 text-sm transition-colors md:px-4 md:py-2 md:text-base ${
                  selectedHighlights.includes(highlight.id)
                    ? "bg-primary"
                    : "bg-gray-800"
                }`}
              >
                {highlight.value}
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
            {facilities.map((facility) => (
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
                className={`rounded-full px-3 py-1 text-sm capitalize transition-colors md:px-4 md:py-2 md:text-base ${
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
            {safetyItems.map((item) => (
              <button
                key={item}
                onClick={(e) => {
                  e.preventDefault();
                  toggleSelection(setSafety, selectedSafety, item);
                }}
                className={`rounded-full px-3 py-1 text-sm capitalize transition-colors md:px-4 md:py-2 md:text-base ${
                  selectedSafety.includes(item) ? "bg-primary" : "bg-gray-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="mt-4 w-full rounded-full bg-primary py-2 text-base font-semibold text-white transition-colors hover:bg-blue-700 md:mt-6 md:py-3 md:text-lg"
        >
          Search
        </button>
      </form>
    </main>
  );
};

export default DashFilter;
