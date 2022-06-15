import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import "./Cart.css";

const Cart = () => {
  const { cartProducts, removeFromCart } = useContext(ProductContext);
  return (
    <div className="Cart">
      <h3>Cart</h3>
      {cartProducts.map((item) => (
        <React.Fragment key={item.id}>
          <div id={item.id} value={item.title}>
            {item.title}
          </div>
          <button
            id={item.id}
            value={item.title}
            onClick={() => removeFromCart(item.id)}
          >
            Remove From Cart
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};
export default Cart;
