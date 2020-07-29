import React, { useState, useEffect } from 'react';
import axios from 'axios';
import differenceBy from 'lodash/differenceBy';
import Button from 'assets/shared/Button';
import DataTable from 'components/DataTable/DataTable';

const actions = <Button key="add">Add</Button>;
const columns = [
  {
    name: 'Producto/servicio',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Unidades',
    selector: 'year',
    sortable: true,
  },
  {
    name: 'Precio Unitario',
    selector: 'color',
    sortable: true,
  },
  {
    name: 'Precio Total',
    selector: 'pantone_value',
    sortable: true,
  },
];
export default function SelectableRowsManagement() {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [data, setData] = useState([]);
 
  const fetchUsers = async page => {
    setLoading(true);

    const response = await axios.get(
      `https://reqres.in/api/unknown?page=${page}&per_page=${perPage}&delay=1`,
    );

    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  const handlePageChange = page => {
    fetchUsers(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setLoading(true);

    const response = await axios.get(
      `https://reqres.in/api/unknown?page=${page}&per_page=${newPerPage}&delay=1`,
    );

    setData(response.data.data);
    setPerPage(newPerPage);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers(1);
  
  }, []);

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

    return <Button key="delete" onClick={handleDelete} style={{ backgroundColor: 'red' }} icon>Eliminar</Button>;
  }, [data, selectedRows, toggleCleared]);

  return (
    <DataTable
      title="Lista De Compra"
      columns={columns}
      data={data}
      progressPending={loading}
      backgroundColor="#9EDCFA"
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      selectableRows
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      
      //actions={actions}
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      
    />
  );
};
