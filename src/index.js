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
import { Provider } from 'react-redux'
import store from 'redux/store.js'
import reportesPage from 'views/ReportsPage/ReportsPage'
import UsersCRUDPage from "views/AdminPage/usersCRUDPage";
import NotificationsPage from "views/LoginPage/NotificationsPage";
var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <Router history={hist}>
      <Switch>
        <Route path="/reportes" component={reportesPage}/>
        <Route path="/solteria" component={Solteria}/>
        <Route path="/notifications" component={NotificationsPage}/>
        <Route path="/set_roles" component={UsersCRUDPage}/>
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
  </ThemeProvider>
  </Provider>
  ,
  
  document.getElementById("root")
);
