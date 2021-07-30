import React from "react";
import httpClient from "../../../core/http-client";
import DataTable from "react-data-table-component";
import Dialog from "@material-ui/core/Dialog";
import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AddProducto from "./AddProducto";
import history from "../../../services/history";
import {Link, Route, Router, Switch, useRouteMatch} from "react-router-dom";

export default () => {
  const [productos, setProductos] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    httpClient.get('productos/')
      .then(({data}) => setProductos(data));
  }, []);

  const {path, url} = useRouteMatch();
console.log(path, url);
  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
      right: true,
      grow: 0.25
    },
    {
      name: 'Nombre',
      selector: 'nombre',
      sortable: true
    },
    {
      name: 'Categoría mínima',
      selector: (row, idx) => row.categoria.nombre,
      sortable: false,
    },
    {
      name: 'Costo',
      selector: 'costo',
      sortable: false,
      grow: 0.5
    },
    {
      name: 'Precio venta',
      selector: 'precio',
      sortable: false,
      grow: 0.5
    },
    {
      name: 'Inventario',
      selector: 'inventario',
      sortable: false,
      grow: 0.5
    },
    {
      name: 'Proveedor',
      selector: 'proveedor.nombre',
      sortable: false,
    },
  ];
  const title = (
    <h2>Listado de productos
      <Button startIcon={<AddIcon/>} variant="contained" color="primary">
        <Link to={`${path}/nuevo`}>Nuevo</Link>
      </Button>
    </h2>
  );
  return (
    <React.Fragment>
      <DataTable columns={columns}
                 data={productos}
                 title={title}
                 pagination={true}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <AddProducto/>
        <Button onClick={() => setOpen(false)}>Cerrar</Button>
      </Dialog>
    </React.Fragment>
  );
}