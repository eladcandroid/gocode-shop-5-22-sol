// import FromApp from "../contexts/FromApp"
import ProductContext from "../contexts/ProductContext";
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import React from "react";

export default function ProductDetails() {
  //   const { addToCart } = useContext(FromApp);
  const [isItLoading, setisItLoading] = useState([true]);

  const { dynamicProductID } = useParams();
  //   console.log("dynamicProductID", dynamicProductID);

  const [productObj, setproductObj] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${dynamicProductID}`)
      .then((res) => res.json())
      .then((productObj) => {
        setproductObj(productObj);
        setisItLoading(false);
      });
  }, []);
  //   console.log("productObj", productObj);
  return (
    <React.Fragment>
      {isItLoading ? (
        <h1>Loading Your Choice...</h1>
      ) : (
        <>
          <div className="details">
            <h1>{productObj.title}</h1>
            <div>
              <img src={productObj.image} width="150px" alt="Sorry, No Pic" />
            </div>
            <h6>{productObj.price}</h6>
            <div>{productObj.description}</div>
            <div className="addButton">
              <button
              // onClick={() => {
              //   addToCart(productObj.id);
              // }}
              >
                {" "}
                (Comming: AddToCart){" "}
              </button>
            </div>
          </div>
          <br />
          <Link className="aboutLink" to="/about">
            about
          </Link>
          <br />
          <Link className="homeLink" to="/">
            Home Page
          </Link>
        </>
      )}
    </React.Fragment>
  );
}
