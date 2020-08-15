import React from "react";
import httpClient from "../../core/http-client";
import DataTable from "react-data-table-component";
import Dialog from "@material-ui/core/Dialog";
import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";


import {Link, Route, Router, Switch, useRouteMatch} from "react-router-dom";

    const [selectedRows, setSelectedRows] = React.useState([]);
    const [toggleCleared, setToggleCleared] = React.useState(false);
  
    const handleRowSelected = React.useCallback(state => {
      setSelectedRows(state.selectedRows);
    }, []);
  
    const contextActions = React.useMemo(() => {
      const handleDelete = () => {
        
        if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.name)}?`)) {
          setToggleCleared(!toggleCleared);
          setData(differenceBy(data, selectedRows, 'name'));
        }
      };
  
      return <Button key="delete" onClick={handleDelete} style={{ backgroundColor: 'red' }} icon>Delete</Button>;
    }, [data, selectedRows, toggleCleared]);

export default function As(props) {
  const [productos, setProductos] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    httpClient.get('cursos/')
      .then(({data}) => setProductos(data));
  }, []);
 
  const {path, url} = useRouteMatch();
    console.log(path, url);
  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: false,
      right: true,
      grow: 0.25
    },
    {
      name: 'Nombre',
      selector: 'nombre',
      sortable: false
    },
    {
      name: 'precio',
      selector: 'precio',
      sortable: false,
      grow: 0.5
    },
  ];
  const title = (
    <h2>Listado Cursos
    </h2>
  );
  return (
    <React.Fragment>
      <DataTable columns={columns}
                 data={productos}
                 title={title}
                 pagination={true}
                onSelectedRowsChange={handleRowSelected}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Button onClick={() => setOpen(false)}>Cerrar</Button>
      </Dialog>
    </React.Fragment>
  );
}