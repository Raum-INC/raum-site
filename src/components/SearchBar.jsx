import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({
  fetchUrl = "https://cp.raum.africa/store/products?currency_code=ngn",
  linkPrefix = "/admin-dashboard/product/",
  placeholder = "Title, City, Bedrooms...",
  inputClassName = "h-full w-[100px] bg-transparent p-3 px-4 outline-none placeholder:text-xs md:w-10/12",
  containerClassName = "flex h-full w-[145px] items-center justify-start rounded-full bg-bkg md:w-[400px]",
  dropdownClassName = "mt-2 max-h-[300px] divide-y-2 divide-faded/10 overflow-y-auto rounded-xl bg-bkg px-2 md:w-[400px]",
  linkClassName = "block rounded-md text-white first:rounded-t-xl last:rounded-b-xl hover:bg-white/20",
  onResultClick,
}) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchContainerRef = useRef(null);
  const location = useLocation();

  const isAdminDashboard = location.pathname.startsWith("/admin-dashboard");

  useEffect(() => {
    if (searchTerm.length >= 3) {
      fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => {
          const filteredProducts = data.products.filter((product) => {
            const searchLower = searchTerm.toLowerCase();
            return (
              product.title.toLowerCase().includes(searchLower) ||
              product.generalAddressArea?.toLowerCase().includes(searchLower) ||
              product.subtitle?.toLowerCase().includes(searchLower) ||
              product.categories[0]?.handle
                ?.toLowerCase()
                .includes(searchLower) ||
              Object.keys(product.metadata?.facilities || {}).some((facility) =>
                facility.toLowerCase().includes(searchLower),
              )
            );
          });
          setProducts(filteredProducts);
          setIsDropdownVisible(true);
        })
        .catch((error) => console.error("Error fetching products:", error));
    } else {
      setProducts([]);
      setIsDropdownVisible(false);
    }
  }, [searchTerm, fetchUrl]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setSearchTerm("");
    setIsDropdownVisible(false);
    if (onResultClick) onResultClick();
  };

  return (
    <section
      className={
        isAdminDashboard
          ? "h-auto w-full"
          : "relative mx-auto flex w-10/12 max-w-3xl items-center justify-center rounded-full border border-secondary bg-transparent p-2 px-4 xl:w-full"
      }
      ref={searchContainerRef}
    >
      <form
        action=""
        className={
          isAdminDashboard
            ? "flex h-[35px] w-full gap-5 md:h-[55px]"
            : "mx-auto flex h-[35px] w-full items-center justify-center gap-5 md:h-[55px]"
        }
        onSubmit={(e) => e.preventDefault()}
      >
        <div
          className={
            isAdminDashboard
              ? containerClassName
              : "flex h-full w-full items-center justify-between"
          }
        >
          <input
            type="text"
            placeholder={placeholder}
            className={
              isAdminDashboard
                ? inputClassName
                : "h-full w-10/12 rounded-full bg-transparent text-lg outline-none placeholder:text-lg"
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="flex h-12 w-14 items-center justify-center border-l border-faded"
          >
            <CiSearch
              className={isAdminDashboard ? "p-2" : "text-4xl text-primary"}
            />
          </button>
        </div>
      </form>
      {isDropdownVisible && (
        <div
          className={
            isAdminDashboard
              ? dropdownClassName
              : "no-scrollbar absolute top-20 h-[300px] w-full overflow-y-scroll rounded-md bg-black/80 opacity-90"
          }
        >
          {products.map((product) => (
            <Link
              key={product.id}
              to={`${linkPrefix}${product.id}`}
              className={linkClassName}
              onClick={handleLinkClick}
            >
              <p className="flex h-full w-full items-center justify-between truncate p-2 px-4 py-4">
                {product.title}
                <img
                  src={product.thumbnail}
                  alt=""
                  className="aspect-video w-[80px] rounded-md"
                />
              </p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchBar;
