import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { useLocation, Link } from "react-router-dom";
import { Assets } from "../assets";
import { CiMenuBurger, CiSearch } from "react-icons/ci";

const Navigation = () => {
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith("/admin-dashboard");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      fetch("https://cp.raum.africa/store/products?currency_code=ngn")
        .then((response) => response.json())
        .then((data) => {
          const filteredProducts = data.products.filter((product) => {
            const searchLower = searchTerm.toLowerCase();
            return (
              product.title.toLowerCase().includes(searchLower) || // Search by title
              product.generalAddressArea?.toLowerCase().includes(searchLower) || // Search by location
              product.subtitle?.toLowerCase().includes(searchLower) || // Search by number of bedrooms
              product.categories[0]?.handle
                ?.toLowerCase()
                .includes(searchLower) || // Search by type of listing
              Object.keys(product.metadata?.facilities || {}).some((facility) =>
                facility.toLowerCase().includes(searchLower),
              ) // Search by facilities
            );
          });
          setProducts(filteredProducts);
          setIsDropdownVisible(true); // Show dropdown when results are available
        })
        .catch((error) => console.error("Error fetching products:", error));
    } else {
      setProducts([]);
      setIsDropdownVisible(false); // Hide dropdown if search term is too short
    }
  }, [searchTerm]);

  // Detect clicks outside the search container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsDropdownVisible(false); // Hide dropdown when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setSearchTerm("");
    setIsDropdownVisible(false); // Hide dropdown when a link is clicked
  };

  return (
    <>
      {isAdminDashboard ? (
        <main className="flex h-[85px] w-full items-center justify-between gap-10 bg-primary_text p-4 px-5 text-white md:px-9">
          <nav className="flex h-auto w-full items-center justify-between gap-10">
            <div className="flex w-[120px] items-center md:w-[150px]">
              <Link to="/">
                <img src={Assets.raumLogo} alt="raum-logo" className="w-full" />
              </Link>
            </div>

            <section
              className="h-[35px] w-full md:h-[55px]"
              ref={searchContainerRef}
            >
              <form
                action=""
                className="flex h-full w-full gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex h-full w-[145px] items-center justify-start rounded-full bg-bkg md:w-[400px]">
                  <input
                    type="text"
                    placeholder="Search by title, city, bedrooms, room type or facilities."
                    className="h-full w-[100px] bg-transparent p-3 px-4 outline-none placeholder:text-xs md:w-10/12"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button>
                    <CiSearch size={30} className="h-[30px] w-[30px] md:ml-4" />
                  </button>
                </div>
              </form>
              {/* Display filtered product links */}
              {isDropdownVisible && (
                <div className="mt-2 max-h-[300px] divide-y-2 divide-faded/10 overflow-y-auto rounded-xl bg-bkg px-2 md:w-[400px]">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/admin-dashboard/product/${product.id}`}
                      className="block rounded-md text-white first:rounded-t-xl last:rounded-b-xl hover:bg-white/20"
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
          </nav>
        </main>
      ) : (
        <Navbar />
      )}
    </>
  );
};

export default Navigation;
