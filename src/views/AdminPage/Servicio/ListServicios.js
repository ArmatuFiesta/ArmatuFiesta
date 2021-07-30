import React from "react";
import httpClient from "../../../core/http-client";
import {Link, useRouteMatch} from "react-router-dom";
import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DataTable from "react-data-table-component";

export default () => {
  const [servicios, setServicios] = React.useState([]);
  React.useEffect(() => {
    httpClient.get('/servicios/')
      .then(({data}) => setServicios(data));
  }, []);

  const {path, url} = useRouteMatch();
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
      name: 'Activo',
      selector: (row, index) => row.activo ? "Sí" : "No",
      sortable: false,
      grow: 0.5
    },
    {
      name: 'Tercerizado',
      selector: (row, index) => row.tercerizado ? "Sí" : "No",
      sortable: false,
    },
    {
      name: 'Agendable',
      selector: (row, index) => row.habilita_agenda ? "Sí" : "No",
      sortable: false,
    },
  ];
  const title = (
    <h2>Listado de Servicios
      <Button startIcon={<AddIcon/>} variant="contained" color="primary">
        <Link to={`${path}/nuevo`}>Nuevo</Link>
      </Button>
    </h2>
  );
  return (
    <React.Fragment>
      <DataTable columns={columns}
                 data={servicios}
                 title={title}
                 pagination={true}
      />
    </React.Fragment>
  );
}