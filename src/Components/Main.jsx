import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Authorization from "./Authorization/Authorization.jsx";
import Products from "./Products/Products.jsx";
import EditProduct from "./Edit-product/EditProduct.jsx";
import CreateNewProduct from "./CreateNewProduct/CreateNewProduct.jsx";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Authorization />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/edit">
            <EditProduct />
          </Route>
          <Route path="/create-new-product">
            <CreateNewProduct />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Main;
