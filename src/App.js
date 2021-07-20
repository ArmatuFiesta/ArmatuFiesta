import theme from "./theme";
import {Route, Router, Switch} from "react-router-dom";
import catalogo from "./views/catalogo/catalogo";
import MainPage from "./views/MainPage/MainPage";
import {ContextProvider} from "./Context";
import LoginPage from "./views/LoginPage/LoginPage";
import factura from "./views/factura/factura";
import mapa from "./views/mapaPage/mapa";
import MapPage from "./views/MapPage/MapPage";
import AddItemView from "./views/AdminPage/AddItemView";
import CheckOut from "./views/PaymentView/CheckOut";
import ServicePojo from "./views/ServicesPage/ServicePojo";
import LandingPage from "./views/LandingPage/LandingPage";
import {ThemeProvider} from "@material-ui/core/styles";
import React from "react";
import {createBrowserHistory} from "history";
import ServiceInfoPage from "./views/ServicesPage/ServiceInfo/ServiceInfo";
import CreaEvento from "./views/BlogPage/CreaEvento";
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
          <Route path="/catalogo" component={catalogo}/>
          <Route path="/new_post" component={NewPost}/>
          <Route path="/services" component={MainPage}/>
          
          <Route path="/mapa" component={mapa}/>
          <Route path="/factura" component={factura}/>
          <Route path="/item_example" component={ServiceInfoPage}/>
          <Route path="/adminView" component={AddItemView}/>
          <Route path="/payment" component={CheckOut}/>
          <Route path="/servicesEx" component={ServicePojo}/>
          <Route path="/newEvent" component={CreaEvento}/>
          <Route path="/reportes" component={reportesPage}/>
          <Route path="/notifications" component={NotificationsPage}/>
          <Route path="/set_roles" component={UsersCRUDPage}/>
          <Route path="/" component={catalogo}/>

        </Switch>
      </Router>
    </ThemeProvider>
  )
}