import React from "react";
import httpClient from "../../../core/http-client";
import {Link, useRouteMatch} from "react-router-dom";
import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DataTable from "react-data-table-component";

export default () => {
  const [publicaciones, setPublicaciones] = React.useState([]);
  React.useEffect(() => {
    httpClient.get('/publicaciones/')
      .then(({data}) => setPublicaciones(data));
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
      name: 'Contenido',
      selector: 'contenido',
      sortable: false,
      wrap: true,
      center: true,
      grow: 1.5
    },
    {
      name: 'Autor',
      selector: 'usuario.nombre_usuario',
      sortable: false,
    },
    {
      name: 'Fecha publicación',
      selector: 'fecha_publicacion',
      sortable: false,
      grow: 0.5
    }
  ];
  const title = (
    <h2>Listado de publicaciones
      <Button startIcon={<AddIcon/>} variant="contained" color="primary">
        <Link to={`${path}/nuevo`}>Nuevo</Link>
      </Button>
    </h2>
  );
  return (
    <React.Fragment>
      <DataTable columns={columns}
                 data={publicaciones}
                 title={title}
                 pagination={true}
      />
    </React.Fragment>
  );
}