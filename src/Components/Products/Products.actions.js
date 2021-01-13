import { db } from "../../firebase.js";

export const PRODUCTS_DATA_RECIVED = "COMPONENTS/PRODUCTS_DATA_RECIVED";
export const PRODUCT_DATA = "COMPONENTS/PRODUCT_DATA";
export const NEW_PRODUCT_NAME = "COMPONENTS/NEW_PRODUCT_NAME";
export const NEW_PRODUCT_DESCRIPTION = "COMPONENTS/NEW_PRODUCT_DESCRIPTION";
export const NEW_PRODUCT_PRICE = "COMPONENTS/NEW_PRODUCT_PRICE";

export const productsDataRecived = (products) => {
  return {
    type: PRODUCTS_DATA_RECIVED,
    payload: {
      products,
    },
  };
};
export const productData = (product) => {
  return {
    type: PRODUCT_DATA,
    payload: {
      product,
    },
  };
};

export const newName = (event) => {
  return {
    type: NEW_PRODUCT_NAME,
    payload: {
      event,
    },
  };
};

export const newDescription = (event) => {
  return {
    type: NEW_PRODUCT_DESCRIPTION,
    payload: {
      event,
    },
  };
};

export const newPrice = (event) => {
  return {
    type: NEW_PRODUCT_PRICE,
    payload: {
      event,
    },
  };
};

export const getProductsData = () => {
  return function (dispatch) {
    db.collection("products")
      .get()
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(productsDataRecived(products));
      });
  };
};
export const getProduct = (id) => {
  return function (dispatch) {
    db.collection("products")
      .doc(id)
      .get()
      .then((snapshot) => {
        const product = {
          id: snapshot.id,
          ...snapshot.data(),
        };
        dispatch(productData(product));
      });
  };
};
