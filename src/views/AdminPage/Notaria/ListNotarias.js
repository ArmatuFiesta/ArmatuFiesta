import React, {useState} from "react";
import DataTable from "react-data-table-component";
import {Button, Icon} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import {Link, useRouteMatch} from "react-router-dom";
import httpClient from "../../../core/http-client";


export default (props) => {
  const [notarias, setNotarias] = React.useState([]);
  React.useEffect(() => {
    httpClient.get('/notarias/')
      .then(({data}) => setNotarias(data));
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
      name: 'Dirección',
      selector: 'direccion',
      sortable: false,
      wrap: true,
      grow: 1.5
    },
    {
      name: 'Latitud',
      selector: (row, idx) => row.ubicacion_geografica.latitud,
      sortable: false,
      grow: 0.5
    },
    {
      name: 'Longitud',
      selector: ((row, idx) => row.ubicacion_geografica.longitud),
      sortable: false,
      grow: 0.5
    }
  ];

  const title = (
    <h2>Listado de notarías
      <Button startIcon={<AddIcon/>} variant="contained" color="primary">
        <Link to={`${path}/nuevo`}>Nuevo</Link>
      </Button>
    </h2>
  );

  return (
    <React.Fragment>
      <DataTable columns={columns}
                 data={notarias}
                 title={title}
                 pagination={true}
      />
    </React.Fragment>
  );

}