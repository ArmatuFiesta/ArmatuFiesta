import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

import FormControl from '@material-ui/core/FormControl';
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import { InputLabel, Input, FormHelperText } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { Message } from "@material-ui/icons";
import Button from "components/CustomButtons/Button.js";
import ComboBox from "components/ComboBox/ComboBox.js";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const tiposEventos=[{title:"Matrimonio"},{title:"Boda"},{title:"Quinceanos"},{title:"Infantil"},{title:"Otros"}];

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
    },
  }));
export default function AddServicePage(props){
  const classes=useStyles();
    return(
        <React.Fragment>
        <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Vista Administrador
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.layout}>
      <Paper  className={classes.paper}>
                <h6>Solicitar Presupuesto</h6>
            <FormControl>

                <InputLabel htmlFor="my-input">Nombre Completo</InputLabel> 
                <Input id="my-input" aria-describedby="my-helper-text" />
                {/*<FormHelperText id="my-helper-text">Nombres y Apellidos</FormHelperText>*/}
            </FormControl>
            <br/><br/>
            <FormControl>
                <InputLabel htmlFor="my-input">Correo Electronico</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                  {/*<FormHelperText id="my-helper-text">Nombres y Apellidos</FormHelperText>*/}
            </FormControl>
            <br/><br/>
            <p>Selecciona el tipo de evento: </p>
            <ComboBox itemList={tiposEventos} label="Eventos"/>
            <div>
            <br/><br/>
        <TextField
          id="outlined-textarea"
          label="Detalles del Evento"
          placeholder="Escribenos aca cualquier otro detalle!"
          multiline
          variant="outlined"
        />

            <br/><br/>
          <Button color="primary" round><Message/> Submit</Button>
      </div>
            
      </Paper>
      </main>
      

      </React.Fragment>
    );
}