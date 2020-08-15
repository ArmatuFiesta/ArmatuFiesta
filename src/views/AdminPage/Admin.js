import React from "react";
import {Router, Route, Switch, useRouteMatch} from "react-router-dom";
import history from "../../services/history";
import AddItemView from "./AddItemView";
import AdminLayout from "../../layout/AdminLayout";
import Context from "../../Context";
import ListProductos from "./Producto/ListProductos";
import AddProducto from "./Producto/AddProducto";

export default () => {
  let {path, url} = useRouteMatch();
  const {user} = React.useContext(Context);
  return (
    <AdminLayout user={user}>
      <Router history={history}>
        <Switch>
          <Route path={`${path}/productos/nuevo`} component={AddProducto} />
          <Route path={`${path}/productos`} component={ListProductos}/>
        </Switch>
      </Router>
    </AdminLayout>
  );
}