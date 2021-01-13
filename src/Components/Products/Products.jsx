import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { productsSelector, statusSelector } from "../Selectors.js";
import * as productsActions from "../Products/Products.actions.js";

const Products = ({ products, status, getProductsData, getProduct }) => {
  useEffect(() => getProductsData(), []);
  if (!status) {
    return (
      <div className="products">
        <p>You should be logged</p>
        <Link to="/">
          <button>Authorize</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <div className="product__name">
            <div>{product.name}</div>
          </div>
          <div className="product__description">
            <div>{product.description}</div>
          </div>
          <div className="product__price">
            <div>{product.price}</div>
          </div>
          <div className="product__photo">
            <div>{product.photo}</div>
          </div>
          <div className="product__edit">
            <Link to="/edit">
              <button onClick={getProduct(product.id)} className="edit-product">
                Edit
              </button>
            </Link>
          </div>
        </div>
      ))}
      <Link to="/create-new-product">
        <button className="new-product">Add new</button>
      </Link>
    </div>
  );
};

const mapDispatch = {
  getProductsData: productsActions.getProductsData,
  getProduct: productsActions.getProduct,
};

const mapStateToProps = (state) => {
  return {
    status: statusSelector(state),
    products: productsSelector(state),
  };
};

export default connect(mapStateToProps, mapDispatch)(Products);
