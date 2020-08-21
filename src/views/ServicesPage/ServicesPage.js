
import React, { useState, useEffect } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import httpClient from 'core/http-client.js';

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ProductCard from 'components/Card/ProductCard.js'
import MapPage from "views/MapPage/MapPage";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

// Sections for this page


const useStyles = makeStyles(styles);


const serviceStyles = {
  menuItemSelected:{
    textColor: "blue",
    backgroundColor: "grey",
  }
};

const useServiceStyles = makeStyles(serviceStyles);

export default function ServicePage(props) {
 
  const {menuCategories} = props;//categorias el menu
  const menuItems = [];//array del menu
  const classes = useStyles();//clases base
  const serviceClasses = useServiceStyles();//proper classes
  const {listaCompra, update,...rest} = props;
  //for the menu behavior

  //State hooks
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [items, setItems] = React.useState([]);//array para la data
  const [mapPage, setMapPage] = React.useState(false);//si el contenido requiere mapa o no
  const [adminView, setAdminView] =React.useState(true);//estoy como admin o no
  const [showMap, setChecked] = React.useState(false); // toggle: muestra o no el mapa
  const [path, setPath] = React.useState(String(menuCategories[0]).toLowerCase()); // toggle: muestra o no el mapa
  const [presupuesto, addItem] =React.useState([]); //LISTA DE PRODUCTOS: PRESUPUESTO
  //Fin de state hooks

    
 
//MENU
for (let i = 0; i < 6; i++) {
  menuItems.push(<MenuItem key={i} onClick={(e) => handleClick(e,i)}>{menuCategories[i]}</MenuItem>);
//si vas a usar el evento tienes que declararlo^ y pasarlo       ^
}


const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event,i) => {
    setItems([]);
    setMapPage(false);
    if(path==="notarias" || path==="salones"|| path==="establecimientos"||path==="matrimonios") {
    setMapPage(true);
    }
  
  setAnchorEl(event.currentTarget);
  console.log("Llamando a "+menuCategories[i].toLowerCase());
  setPath(String(menuCategories[i]).toLowerCase());
  fetchData();
};
  //FIN MANEJO DE MENU

    const toggleChecked = () => {  //funcion para el toggle de mapa
      setChecked((prev) => !prev);
    };

    const fetchData = async () => {
      const url="productos/"
      //le pasas la data que quieras cargar dependiendo de la categoria escogida y listo bello
     // const result = await httpClient.get(url) 
    //  const result = await httpClient.get("/productos/",{params: {cat: path}}) 
      const result = await httpClient.get("/notarias/") 
      
          console.log(result);
          setItems(result.data);
        
    };


    useEffect(() => { fetchData();} , []); //retorname data o vacio 



    const handleAdd = (event,idProducto) => {
      addItem(presupuesto.push(idProducto));
      console.log(presupuesto);
      httpClient.post('presupuesto/' + {idProducto} + '/add_producto')
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    };
  
    
  
 


  return (<>
  <Typography variant="subtitle1">{presupuesto}</Typography>

   {adminView && <Box  align="center">
     <Button href="/admin/productos/nuevo" props={path} size="medium">
       <Add/> Agregar Nuevo Item </Button>
       </Box> }
   {/* en href de este boton debemos pasarle la categoria exacta en la que estamos: menuCategories[i] y que te precargue la info */}
   {mapPage && <Box component="span" display="block" align="end">
     <FormControlLabel 
    control={<Switch checked={showMap} onChange={toggleChecked} />}
    label="Mapa"
  /></Box>}
 
    
    <GridContainer spacing={2}>
      <GridItem xs={3}>
        <MenuList
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menuItems}
        </MenuList>
      </GridItem>
      {items.map(item => <GridItem xs={3}>
               <ProductCard key={item.id} 
                              path={"item_example"}
                             productName={item.nombre}
                            productDescription={item.categoria}
                            onAdd={(e) => handleAdd(e,item.id)}
               />
             </GridItem>)} 
      <GridItem xs={6}><MapPage isHidden={showMap}></MapPage></GridItem>
    </GridContainer>


  </>);
}
