import React from "react";
import { Route, Switch } from "react-router";
import {
  Home,
  ProductEdit,
  SignUp,
  SignIn,
  Reset,
  Chat,
  Calendar,
} from "./templates";
import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signin/reset" component={Reset} />

      <Auth>
        <Route exact path="(/)?" component={Home} />
        <Route exact path="/product/edit" component={ProductEdit} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/calendar" component={Calendar} />
      </Auth>
    </Switch>
  );
};

export default Router;
