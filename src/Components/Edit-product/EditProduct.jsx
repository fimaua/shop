import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { productDataSelector } from "../Selectors.js";

const EditProduct = (product) => {
  console.log(product);
  return (
    <div className="edit">
      <Link to="/products">
        <button>All Products</button>
      </Link>
      <form className="edit-product">
        <div className="title-name">
          <p>Name</p>
          <input type="text" className="edit-product__name" />
        </div>
        <div className="title-description">
          <p>Description</p>
          <textarea type="text" className="edit-product__description" />
        </div>
        <div className="title-price">
          <p>Price</p>
          <input type="text" className="edit-product__price" />
        </div>
        <Link to="/products">
          <button type="submit">Edit Product</button>
        </Link>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    product: productDataSelector(state),
  };
};

export default connect(mapStateToProps)(EditProduct);
