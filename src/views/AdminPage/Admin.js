import React from "react";
import {Router, Route, Switch, useRouteMatch} from "react-router-dom";
import history from "../../services/history";
import AddItemView from "./AddItemView";
import AdminLayout from "../../layout/AdminLayout";
import Context from "../../Context";
import ListProductos from "./Producto/ListProductos";
import AddProducto from "./Producto/AddProducto";
import ListNotarias from "./Notaria/ListNotarias";
import AddNotaria from "./Notaria/AddNotaria";
import AddServicio from "./Servicio/AddServicio";
import ListServicios from "./Servicio/ListServicios";

export default () => {
  let {path, url} = useRouteMatch();
  const {user} = React.useContext(Context);
  return (
    <AdminLayout user={user}>
      <Router history={history}>
        <Switch>
          <Route path={`${path}/productos/nuevo`} component={AddProducto}/>
          <Route path={`${path}/productos`} component={ListProductos}/>
          <Route path={`${path}/notarias/nuevo`} component={AddNotaria}/>
          <Route path={`${path}/notarias`} component={ListNotarias}/>
          <Route path={`${path}/servicios/nuevo`} component={AddServicio}/>
          <Route path={`${path}/servicios`} component={ListServicios}/>
          <Route path={`${path}/publicaciones/nuevo`} component={AddServicio}/>
          <Route path={`${path}/publicaciones`} component={ListServicios}/>
        </Switch>
      </Router>
    </AdminLayout>
  );
}