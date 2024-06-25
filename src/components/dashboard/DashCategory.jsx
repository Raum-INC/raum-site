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
      .get("https://cp.raumhq.co/store/product-categories")
      .then((response) => {
        console.log("Categories:", response.data.product_categories); // Log categories
        setCategories(response.data.product_categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    // Fetch products
    axios
      .get("https://cp.raumhq.co/store/products?currency_code=ngn")
      .then((response) => {
        console.log("Products:", response.data.products); // Log products
        setProducts(response.data.products);
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
          product.categories.some((cat) => cat.id === selectedCategory)
        );

  console.log(filteredProducts);

  return (
    <main className="w-full md:h-[500px] bg-primary_text p-5 md:px-9 pb-20 text-black">
      <h2 className="text-sm font-semibold py-5 text-white">Category</h2>
      <section className="flex flex-col gap-5">
        <div className="w-full flex md:gap-5 justify-start gap-3 items-center overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`p-2 px-[14px] md:px-6 text-sm md:text-base whitespace-nowrap text-white rounded-full border border-primary ${
                selectedCategory === category.id
                  ? "bg-primary "
                  : "bg-bkg text-white/30 border-white/10"
              }`}
              onClick={() => {
                handleCategorySelect(category.id);
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="w-full h-full md:overflow-x-auto no-scrollbar md:flex grid grid-cols-2 gap-5">
          {filteredProducts.map((product, index) => (
            <Link
              to={`/admin-dashboard/product/${product.id}`}
              key={index}
              className="md:w-[260px] h-[240px] md:h-[315px] flex-shrink-0 flex flex-col justify-start items-start gap-5 md:gap-3 rounded-2xl p-3 border border-secondary/10 bg-bkg"
            >
              <img
                src={product.thumbnail}
                alt="Category"
                className="w-full h-full aspect-video object-cover rounded-md"
              />
              <div className="w-full flex justify-between items-center text-white">
                <div className="space-y-2">
                  <h3 className="text-xs md:text-md font-bold w-4/5 md:w-auto line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-sm md:text-lg font-semibold ">
                    N
                    {product.variants[0].original_price.toLocaleString("en-NG")}
                  </p>
                  <p className="text-xs text-fade flex gap-2 justify-start items-center">
                    <MdLocationPin />
                    Lekki, Lagos
                  </p>
                </div>
                <div>
                  <i className="w-10 h-10 bg-[#0000FF0A] rounded-md flex justify-center items-center">
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
