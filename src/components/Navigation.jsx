import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useLocation, Link } from "react-router-dom";
import { Assets } from "../assets";
import { CiMenuBurger, CiSearch } from "react-icons/ci";

const Navigation = () => {
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith("/admin-dashboard");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm.length >= 3) {
      fetch(`https://staging-cp.raum.africa/store/products?currency_code=ngn`)
        .then((response) => response.json())
        .then((data) => {
          const filteredProducts = data.products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()),
          );
          setProducts(filteredProducts);
        })
        .catch((error) => console.error("Error fetching products:", error));
    } else {
      setProducts([]);
    }
  }, [searchTerm]);

  const handleLinkClick = () => {
    setSearchTerm("");
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

            <section className="h-[35px] w-full md:h-[55px]">
              <form
                action=""
                className="flex h-full w-full gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex h-full w-[145px] items-center justify-start rounded-full bg-bkg md:w-[400px]">
                  <input
                    type="text"
                    placeholder="Search"
                    className="h-full w-[100px] bg-transparent p-3 outline-none md:w-10/12"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button>
                    <CiSearch
                      size={30}
                      className="h-[30px] w-[30px] border-l-2 border-white/30 pl-2 md:ml-4"
                    />
                  </button>
                </div>
              </form>
              {/* Display filtered product links */}
              <div className="mt-2 divide-y-2 divide-white/20 rounded-xl bg-bkg md:w-[400px]">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    to={`/admin-dashboard/product/${product.id}`}
                    className="block text-white first:rounded-t-xl last:rounded-b-xl hover:bg-white/20"
                    onClick={handleLinkClick}
                  >
                    <p className="h-full w-full truncate p-2 py-4">
                      {product.title}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* <div className="w-full h-full flex justify-end items-center">
              <div className="w-[30px] h-[30px]">
                <img src={Assets.account} alt="" className="w-full" />
              </div>
              <button>
                <CiMenuBurger size={25} className="" />
              </button>
            </div> */}
          </nav>
        </main>
      ) : (
        <Navbar />
      )}
    </>
  );
};

export default Navigation;
