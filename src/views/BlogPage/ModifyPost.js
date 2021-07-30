
import React, { useState, useEffect } from 'react';
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

  const categorias=[{title: "Tips"},{title: "Masculino"}];


export default function ModifyPost() {
    const classes = useStyles();//clases base
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

//MANEJO DE FECHA
const handleDateChange = (date) => {
    setSelectedDate(date);
  };

    const handleSubmit = () => {
      console.log("click")
        //recuperar data
        //post
      };
    return(
        
        <GridItem xs={9}>
                            <GridContainer spacing={1} justify="space-around">
                                <Box align="center">
                                    <Typography variant="h6" gutterBottom>
                                    Modificar Publicacion
                                    </Typography>
                                </Box>
                                <br></br>
                                <Grid item xs={6}>
                                    <TextField
                                        id="usuario"
                                        name="usuario"
                                        label="Nombre de usuario"
                                        fullWidth
                                        autoComplete="usuario"
                                    />
                                    </Grid>
                                    <br></br>
                                    <Grid item xs={6} justify="space-around">
                                    <ComboBox id="categoria" itemList={categorias} label="Categoria"/>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <TextField
                                      multiline
                                      rows={4}
                                        id="contenido"
                                        name="contenido"
                                        label="Contenido"
                                        fullWidth
                                        autoComplete="contenido"
                                        variant="filled"
                                    />
                                    </Grid>
                                   

                                    <Grid item xs={6}>
                                    <ComboBox id="categoria" itemList={categorias} label="categoria"/>
                                    </Grid>
                                    <Grid item xs={6} justify="space-around">
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <Grid container justify="space-around">
                                            <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="fecha_publicacion"
                                            label="Fecha de publicacion"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            />
                                            </Grid>
                                    </MuiPickersUtilsProvider>
                                    </Grid>
                             </GridContainer>
                                
                            <Box  align="center">
                                <Button size="large"
                                 className={classes.button} 
                                 variant="h6" 
                                 gutterBottom
                                 onClick={handleSubmit()}
                                 >
                                 Guardar Cambios
                                  </Button>
                            </Box>
                        </GridItem>
    );
}