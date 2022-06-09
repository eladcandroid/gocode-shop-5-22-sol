import "./Products.css";
//  import Products from './components/products/Products.js';
import Product from "../Product/Product";

const Products = ({ products }) => {
  return (
    <section className="products">
      {products.map(({ id, title, price, image }) => {
        return (
          <Product key={id} id={id} title={title} price={price} image={image} />
        );
      })}
    </section>
  );
};
export default Products;
