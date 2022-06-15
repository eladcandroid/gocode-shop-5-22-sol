import "./Product.css";
import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import { Link, Route, Routes, useParams } from "react-router-dom";

const ProductCard = ({ title, image, price, category, id }) => {
  
const { addToCart } = useContext(ProductContext);

  return (
    <div className="product-card">
      <Link to={`/Products/${id}`}>
        <div className="product-image">
          <img src={image} width="90px" alt="Sorry, No Pic..." />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
        </div>
      </Link>
      <div className="product-info">
        <h6>{price}</h6>
        <h6>{category}</h6>
      </div>
      <div className="addButton">
        <button
          onClick={() => {
            addToCart(id);
          }}
        >
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};
export default ProductCard;

{
  /* <Link to="/ProductDetails">details</Link> */
}
