import theme from "./theme";
import {Route, Router, Switch} from "react-router-dom";
import Solteria from "./views/CartaSolteriaPage/CartaSolteriaPage";
import MainPage from "./views/MainPage/MainPage";
import {ContextProvider} from "./Context";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import MapPage from "./views/MapPage/MapPage";
import AddItemView from "./views/AdminPage/AddItemView";
import CheckOut from "./views/PaymentView/CheckOut";
import ServicePojo from "./views/ServicesPage/ServicePojo";
import LandingPage from "./views/LandingPage/LandingPage";
import {ThemeProvider} from "@material-ui/core/styles";
import React from "react";
import {createBrowserHistory} from "history";
import ServiceInfoPage from "./views/ServicesPage/ServiceInfo/ServiceInfo";
import BlogPage from "./views/BlogPage/BlogPage";
import history from "services/history";
import Admin from "./views/AdminPage/Admin";
import NotificationsPage from "./views/LoginPage/NotificationsPage";
import UsersCRUDPage from "./views/AdminPage/usersCRUDPage";
import reportesPage from "./views/ReportsPage/ReportsPage";
import NewPost from "./views/BlogPage/NewPost";

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route path="/solteria" component={Solteria}/>
          <Route path="/new_post" component={NewPost}/>
          <Route path="/services" component={MainPage}/>
          <Route path="/login-page">
            <LoginPage/>
          </Route>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/blog" component={BlogPage}/>
          <Route path="/item_example" component={ServiceInfoPage}/>
          <Route path="/map" component={MapPage}/>
          <Route path="/adminView" component={AddItemView}/>
          <Route path="/payment" component={CheckOut}/>
          <Route path="/servicesEx" component={ServicePojo}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/reportes" component={reportesPage}/>
          <Route path="/notifications" component={NotificationsPage}/>
          <Route path="/set_roles" component={UsersCRUDPage}/>
          <Route path="/" component={LandingPage}/>

        </Switch>
      </Router>
    </ThemeProvider>
  )
}