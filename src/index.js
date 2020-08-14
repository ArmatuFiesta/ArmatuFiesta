import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product

import LandingPage from "views/LandingPage/LandingPage.js";

import LoginPage from "views/LoginPage/LoginPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage.js";
import MapPage from "views/MapPage/MapPage.js";
import MainPage from "views/MainPage/MainPage.js";
import Solteria from "views/CartaSolteriaPage/CartaSolteriaPage.js";
import AddItemView from "views/AdminPage/AddItemView.js";
import ServiceInfoPage from "views/ServicesPage/ServiceInfo/ServiceInfo.js";
import CheckOut from "views/PaymentView/CheckOut";
import Notaria from "./views/AdminPage/Notaria/Notaria";
import BlogPage from "views/BlogPage/BlogPage";
var hist = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={hist}>
      <Switch>
        <Route path="/solteria" component={Solteria}/>
       
        <Route path="/services" component={MainPage}/>
        <Route path="/blog" component={BlogPage}/>
        <Route path="/item_example" component={ServiceInfoPage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/map" component={MapPage} />
        <Route path="/adminView" component={AddItemView} />
        <Route path="/payment" component={CheckOut} />
        <Route path="/admin/notarias" component={Notaria}/>
        <Route path="/" component={LandingPage} />
        
      </Switch>
    </Router>,
  </ThemeProvider>,
  
  document.getElementById("root")
);
