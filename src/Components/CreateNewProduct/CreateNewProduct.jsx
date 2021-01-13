import React from "react";
import { db } from "../../firebase.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as productsActions from "../Products/Products.actions.js";
import {
  newNameSelector,
  newDescriptionSelector,
  newPriceSelector,
} from "../Selectors.js";

const CreateNewProduct = ({
  newName,
  name,
  newDescription,
  description,
  newPrice,
  price,
}) => {
  const onSubmit = (name, description, price) => {
    db.collection("products").add({
      name,
      description,
      price,
      discount: 0,
      isDiscount: false,
    });
  };

  console.log(name, description, price);

  return (
    <div className="edit">
      <Link to="/products">
        <button>All Products</button>
      </Link>
      <form className="edit-product">
        <div className="title-name">
          <p>Name</p>
          <input
            type="text"
            className="edit-product__name"
            onChange={() => newName(event.target.value)}
          />
        </div>
        <div className="title-description">
          <p>Description</p>
          <textarea
            type="text"
            className="edit-product__description"
            onChange={() => newDescription(event.target.value)}
          />
        </div>
        <div className="title-price">
          <p>Price</p>
          <input
            type="text"
            className="edit-product__price"
            onChange={() => newPrice(event.target.value)}
          />
        </div>
        <Link to="/products">
          <button
            type="submit"
            onClick={() => onSubmit(name, description, price)}
          >
            Create Product
          </button>
        </Link>
      </form>
    </div>
  );
};

const mapDispatch = {
  newName: productsActions.newName,
  newDescription: productsActions.newDescription,
  newPrice: productsActions.newPrice,
};
const mapStateToProps = (state) => {
  return {
    name: newNameSelector(state),
    description: newDescriptionSelector(state),
    price: newPriceSelector(state),
  };
};

export default connect(mapStateToProps, mapDispatch)(CreateNewProduct);
