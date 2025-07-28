import { useState, useEffect } from "react";
import axios from "axios";

const PRODUCTS_URL = "https://cp.raum.africa/store/products?currency_code=ngn";
const CATEGORIES_URL = "https://cp.raum.africa/store/product-categories";

export default function useDashboardData() {
  const [listings, setListings] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          axios.get(PRODUCTS_URL),
          axios.get(CATEGORIES_URL),
        ]);

        // Featured Listings
        const featuredListings = productsRes.data.products.filter(
          (product) =>
            product.tags &&
            product.tags.some((tag) => tag.value === "Featured"),
        );
        const limitedFeaturedListings = featuredListings.slice(0, 10);
        const formattedListings = limitedFeaturedListings.map((listing) => ({
          ...listing,
          variants: listing.variants.map((variant) => ({
            ...variant,
            original_price: variant.original_price / 100,
          })),
        }));
        setListings(formattedListings);

        // All Products
        const formattedProducts = productsRes.data.products.map((product) => ({
          ...product,
          variants: product.variants.map((variant) => ({
            ...variant,
            original_price: variant.original_price / 100,
          })),
        }));
        setProducts(formattedProducts);

        // Categories
        setCategories(categoriesRes.data.product_categories);
      } catch (err) {
        setError(err);
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { listings, categories, products, loading, error };
}
