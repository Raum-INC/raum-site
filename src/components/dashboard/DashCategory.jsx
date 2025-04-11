import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";

const DashCategory = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all-categories");

  useEffect(() => {
    // Fetch categories
    axios
      .get(`https://staging-cp.raum.africa/store/product-categories`)
      .then((response) => {
        // console.log(`Categories:`, response.data.product_categories); // Log categories
        setCategories(response.data.product_categories);
      })
      .catch((error) => {
        console.error(`Error fetching categories:`, error);
      });

    // Fetch products
    axios
      .get(`https://staging-cp.raum.africa/store/products?currency_code=ngn`)
      .then((response) => {
        // console.log("Products:", response.data.products); // Log products
        const formattedProducts = response.data.products.map((product) => {
          return {
            ...product,
            variants: product.variants.map((variant) => ({
              ...variant,
              original_price: variant.original_price / 100,
            })),
          };
        });
        setProducts(formattedProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Function to handle category selection
  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
  };

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all-categories"
      ? products
      : products.filter((product) =>
          product.categories.some((cat) => cat.id === selectedCategory),
        );

  return (
    <main className="w-full bg-primary_text p-5 pb-20 text-black md:h-[500px] md:px-9">
      <h2 className="py-5 text-sm font-semibold text-white">Category</h2>
      <section className="flex flex-col gap-5">
        <div className="no-scrollbar flex w-full items-center justify-start gap-3 overflow-x-auto md:gap-5">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`whitespace-nowrap rounded-full border border-primary p-2 px-[14px] text-sm text-white md:px-6 md:text-base ${
                selectedCategory === category.id
                  ? "bg-primary"
                  : "border-white/10 bg-bkg text-white/30"
              }`}
              onClick={() => {
                handleCategorySelect(category.id);
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="no-scrollbar grid h-full w-full grid-cols-2 gap-5 md:flex md:overflow-x-auto">
          {filteredProducts.map((product, index) => (
            <Link
              to={`/admin-dashboard/product/${product.id}`}
              key={index}
              className="flex h-[240px] flex-shrink-0 flex-col items-start justify-start gap-5 rounded-2xl border border-secondary/10 bg-bkg p-3 md:h-[315px] md:w-[260px] md:gap-3"
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
                    N
                    {product.variants[0].original_price.toLocaleString("en-NG")}
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
          ))}
        </div>
      </section>
    </main>
  );
};

export default DashCategory;
