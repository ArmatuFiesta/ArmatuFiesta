import React, {useState} from "react";
import DataTable from "react-data-table-component";
import {Button, Icon} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";


export default (props) => {
  const {notarias, lugares} = props;
  const [open, setOpen] = useState(false);
  console.log(notarias);
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

  const addNotaria = () => {
    setOpen(true);
  };

  const title = (
    <h2>Listado de notarías <Button startIcon={<AddIcon/>} variant="contained" color="primary"
                                    onClick={() => addNotaria()}>Nuevo</Button></h2>
  );

  return (
    <React.Fragment>
      <DataTable columns={columns}
                 data={notarias}
                 title={title}
                 pagination={true}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <p>test</p>
        <Button onClick={() => setOpen(false)}>Cerrar</Button>
      </Dialog>
    </React.Fragment>
  );

}