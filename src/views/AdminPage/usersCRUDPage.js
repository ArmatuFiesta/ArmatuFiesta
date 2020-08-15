import React, { useState, useEffect } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import httpClient from 'core/http-client.js';

// @material-ui/icons

// core components
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ComboBox from "components/ComboBox/ComboBox.js";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button, Paper } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import GridItem from "components/Grid/GridItem.js";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import GridContainer from 'components/Grid/GridContainer';
import UserForm from './rolesComponents/userForm';
import RolesConfig from './rolesComponents/rolesConfig';
import DeleteUserForm from './rolesComponents/deleteUserForm';




   /*
   Data de usuario en back
   id autoIncrement
cedula =char 
        max_length=11)
primer_nombre = char max_length=20,
               
segundo_nombre = char
                max_length=20,
                null=True,
             
primer_apellido =char 
                 max_length=20,
          
segundo_apellido = char
               
                  null=True,
                
fecha_nacimiento = dateTime
genero = (M,H)
      
*/
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: "#F8BBD0",
    color:"white",
    variant:"contained"
  },
}));



export default function UsersCRUDPage(props){
  //State hooks
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [vista, setVista] = React.useState();
  //Fin de state hooks
  const classes = useStyles();//clases base
  const menuCategories=["Agregar","Roles", "Eliminar"];//categorias el menu
  const menuItems = [];//array del menu
  //const {...rest} = props;
  //for the menu behavior



    
 
//MENU
for (let i = 0; i < menuCategories.length; i++) {
  menuItems.push(<MenuItem key={i} onClick={(e) => handleClick(e,i)}>{menuCategories[i]}</MenuItem>);
//si vas a usar el evento tienes que declararlo^ y pasarlo       ^
}

const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event,i) => {
  setAnchorEl(event.currentTarget);
  setVista([]);
  setVista(setMenuItem(i));
 
};

const setMenuItem = (i) => {
  console.log(String(menuCategories[i]).toLowerCase());
  const category = String(menuCategories[i]).toLowerCase();
  switch(category){
    case 'agregar':
    return(<UserForm/>);
    case 'roles':
      return(<RolesConfig/>);
    case 'eliminar':
      return(<DeleteUserForm/>);
    default:
        return(<UserForm/>);
}
}
  //FIN MANEJO DE MENU


return (
  <React.Fragment className={classes}>
  <CssBaseline>
  <AppBar position="absolute" color="default" className={classes.appBar}>
     <Toolbar>
     <Typography variant="h6" color="inherit" noWrap>
         Arma Tu Fiesta Administrador
     </Typography>
     </Toolbar>
  </AppBar>
 <Paper className={classes.paper}>
 <React.Fragment>

<Grid container spacing={3} justify="space-around">
<GridItem xs={3} height="100%" >
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
      {vista}
      </Grid>
    </React.Fragment>
        </Paper>
         </CssBaseline>
  </React.Fragment>

    );


}