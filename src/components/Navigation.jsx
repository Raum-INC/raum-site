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
      fetch("https://cp.raumhq.co/store/products?currency_code=ngn")
        .then((response) => response.json())
        .then((data) => {
          const filteredProducts = data.products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
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
        <main className="w-full h-auto bg-primary_text text-white p-4 px-5 md:px-9 flex justify-between items-center gap-10">
          <nav className="w-full h-auto flex justify-between items-center gap-10">
            <div className="w-[120px] md:w-[150px] flex items-center">
              <Link to="/">
                <img src={Assets.raumLogo} alt="raum-logo" className="w-full" />
              </Link>
            </div>

            <section className="w-full h-[35px] md:h-[55px]">
              <form
                action=""
                className="w-full h-full flex gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="w-[145px] md:w-[400px] h-full flex justify-start items-center rounded-full bg-bkg">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-[100px] md:w-10/12 h-full bg-transparent p-3 outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button>
                    <CiSearch
                      size={30}
                      className="w-[30px] h-[30px] md:ml-4 pl-2 border-l-2 border-white/30"
                    />
                  </button>
                </div>
              </form>
              {/* Display filtered product links */}
              <div className="md:w-[400px] mt-2 bg-bkg divide-y-2 divide-white/20 rounded-xl">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    to={`/admin-dashboard/product/${product.id}`}
                    className="block text-white first:rounded-t-xl last:rounded-b-xl hover:bg-white/20"
                    onClick={handleLinkClick}
                  >
                    <p className="w-full h-full p-2 py-4 truncate">
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
