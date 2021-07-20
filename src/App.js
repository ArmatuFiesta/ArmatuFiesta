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
import AgregarObras from "./views/BlogPage/AgregarObras";
import AgregarMonedas from "./views/BlogPage/AgregarMonedas";
import {createBrowserHistory} from "history";
import ServiceInfoPage from "./views/ServicesPage/ServiceInfo/ServiceInfo";
import CreaEvento from "./views/BlogPage/CreaEvento";
import history from "services/history";
import Ejecutar1 from "./views/EjecutarPage/Ejecutar1";
import NotificationsPage from "./views/LoginPage/NotificationsPage";
import UsersCRUDPage from "./views/AdminPage/usersCRUDPage";
import reportesPage from "./views/ReportsPage/ReportsPage";


export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route path="/events" component={catalogo}/>
          
          <Route path="/services" component={MainPage}/>
          <Route path="/newEvent2" component={AgregarObras}/>
          <Route path="/newEvent3" component={AgregarMonedas}/>
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
          <Route path="/ejecutar" component={Ejecutar1}/>
          <Route path="/" component={catalogo}/>

        </Switch>
      </Router>
    </ThemeProvider>
  )
}