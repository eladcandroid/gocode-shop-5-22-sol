// import FromApp from "../contexts/FromApp"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Cart from "../cmps/Cart/Cart";
import Header from "../cmps/header/Header";
import LoadingSpinner from "../cmps/LoadingSpinner/LoadingSpinner";
import Products from "../cmps/products/Products";
import ProductContext from "../contexts/ProductContext";

function Home() {
  const [fixedProducts, setFixedProducts] = useState([]);
  const [changeableProducts, setChangeableProducts] = useState([]);
  const [didItLoad, setDidItLoad] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  // const { addToCart } = useContext(FromApp);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((initialProducts) => {
        setChangeableProducts(initialProducts);
        setFixedProducts(initialProducts);
        setDidItLoad(true);
      });
  }, []);

  let categories = fixedProducts
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  function viewFiltered(selectedCategory) {
    const filteredView = fixedProducts.filter((item) =>
      item.category === selectedCategory
        ? item.category
        : selectedCategory === "--Choose an option--"
    );
    setChangeableProducts(filteredView);
  }

  function addToCart(id) {
    const foundedProduct = fixedProducts.find((item) => item.id === id);

    let increasingCartArray = [...cartProducts, foundedProduct];
    setCartProducts(increasingCartArray);
  }

  function removeFromCart(id) {
    let decreasingCartArray = cartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(decreasingCartArray);
  }

  return (
    <ProductContext.Provider
      value={{
        fixedArray: fixedProducts,
        cartProducts: cartProducts,
        setCartArray: setCartProducts,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      {didItLoad ? (
        <>
          <h1>Jackets</h1>
          <Cart />
          <div className="App">
            <Header ViewFiltered={viewFiltered} categories={categories} />
            <Products
              changeableProductsArray={changeableProducts}
              fixedArray={fixedProducts}
            />
            <Link className="aboutLink" to="/about">
              About
            </Link>
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </ProductContext.Provider>
  );
}
export default Home;
