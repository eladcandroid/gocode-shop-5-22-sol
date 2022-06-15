import "./Products.css";
import ProductCard from "../product/Product";
import React from "react";
// import ProductContext from "../../contexts/ProductContext";
// import { useContext } from "react";

const Products = ({ changeableProductsArray }) => {
  return (
    <div>
      <section className="products">
        {changeableProductsArray.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            category={item.category}
          />
        ))}
      </section>
    </div>
  );
};
export default Products;
