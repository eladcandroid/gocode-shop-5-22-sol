import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Products from "./components/Products/Products.js";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner.js";

function App() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = products
    .map((product) => product.category)
    .filter(
      (category, index, categories) => categories.indexOf(category) === index
    )
    .sort();

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <div>The server isn't responding. Please try again later.</div>
      ) : (
        <>
          <Header
            setCategory={setCategory}
            categories={categories}
            fetchProducts={fetchProducts}
          />
          <Products
            collection={products.filter((product) =>
              category === "all" ? true : product.category === category
            )}
          />
        </>
      )}
    </div>
  );
}

export default App;
