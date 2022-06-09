import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { initialProducts } from "./data/data";
import { useState } from "react";

function App() {
  const categories = initialProducts
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  categories.unshift("All");

  const [products, setProducts] = useState(initialProducts);

  const filter = (category) => {
    let newProducts =
      category === "All"
        ? initialProducts
        : initialProducts.filter((product) => category === product.category);

    setProducts(newProducts);
  };
  return (
    <>
      <Header categories={categories} filterByCategory={filter} />
      <Products products={products} />
    </>
  );
}

export default App;
