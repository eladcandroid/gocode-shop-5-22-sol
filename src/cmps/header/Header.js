import React from "react";
import "./Header.css";

const Header = ({ categories, ViewFiltered}) => {
  return (
    <nav className="product-filter">

      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>

          <select
            onChange={(e) => {
              let selectedCategory = e.target.value;
              ViewFiltered(selectedCategory);
            }}
          >
            <option>--Choose an option--</option>
            {categories.map((Category, index) => (
              <option key={index}>{Category}</option>
            ))}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>
  );
};
export default Header;
