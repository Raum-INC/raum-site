import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DashSideBar from "../components/dashboard/DashSideBar";
import { MdLocationPin } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const DashResult = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const queryData = location.state?.queryData;

  useEffect(() => {
    const fetchResults = async () => {
      if (!queryData) {
        console.warn("No query data provided");
        return;
      }

      try {
        const response = await fetch(
          "https://cp.raum.africa/store/products/search?status=published",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(queryData),
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch results");
        }

        const data = await response.json();
        console.log("Search Results:", data.hits);
        setProducts(data.hits || []); // Assuming the results are in `data.products`
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchResults();
  }, [queryData]);

  return (
    <div className="relative flex h-auto w-full overflow-hidden bg-primary_text md:min-h-screen">
      <section className="block min-h-full w-auto">
        <DashSideBar />
      </section>
      <section className="flex w-full flex-col p-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 rounded bg-primary px-4 py-2 text-white"
        >
          Back
        </button>
        <h1 className="text-2xl font-bold">Filter Results</h1>

        {/* Display Results */}
        <div className="no-scrollbar grid h-full w-full grid-cols-2 gap-5 pt-5 md:flex md:overflow-x-auto">
          {products.length > 0 ? (
            products.map((product, index) => (
              <Link
                to={`/admin-dashboard/product/${product.id}`}
                key={index}
                className="flex h-[240px] flex-shrink-0 flex-col items-start justify-start gap-5 rounded-2xl border border-secondary/10 bg-bkg p-3 md:h-[315px] md:gap-3 lg:w-[215px]"
              >
                <img
                  src={product.thumbnail}
                  alt="Category"
                  className="aspect-video h-full w-full rounded-md object-cover"
                />
                <div className="flex w-full items-center justify-between text-white">
                  <div className="space-y-2">
                    <h3 className="md:text-md line-clamp-2 w-4/5 text-xs font-bold md:w-auto">
                      {product.title}
                    </h3>
                    <p className="text-sm font-semibold md:text-lg">
                      N{(product.prices_ngn / 100).toLocaleString("en-NG")}
                    </p>
                    <p className="flex items-center justify-start gap-2 text-xs text-fade">
                      <MdLocationPin />
                      Lekki, Lagos
                    </p>
                  </div>
                  <div>
                    <i className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0000FF0A]">
                      <CiHeart size={25} className="text-[#FF0000]" />
                    </i>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default DashResult;
