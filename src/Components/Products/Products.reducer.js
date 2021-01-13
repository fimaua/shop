import {
  PRODUCTS_DATA_RECIVED,
  PRODUCT_DATA,
  NEW_PRODUCT_NAME,
  NEW_PRODUCT_DESCRIPTION,
  NEW_PRODUCT_PRICE,
} from "./Products.actions.js";

const initialData = {
  status: false,
  products: null,
  productData: null,
  newProductName: "",
  newProductDescription: "",
  newProductPrice: "",
};

const ProductsReducer = (state = initialData, action) => {
  switch (action.type) {
    case PRODUCTS_DATA_RECIVED: {
      return {
        ...state,
        status: !status,
        products: action.payload.products,
      };
    }
    case PRODUCT_DATA: {
      return {
        ...state,
        productData: action.payload.product,
      };
    }
    case NEW_PRODUCT_NAME: {
      return {
        ...state,
        newProductName: action.payload.event,
      };
    }
    case NEW_PRODUCT_DESCRIPTION: {
      return {
        ...state,
        newProductDescription: action.payload.event,
      };
    }
    case NEW_PRODUCT_PRICE: {
      return {
        ...state,
        newProductPrice: action.payload.event,
      };
    }
    default:
      return state;
  }
};

export default ProductsReducer;
