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
import { Button, Paper } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

export default function NotificationsPage(props){
const classes = useStyles();//clases base
const [notifications, setNotifications]=React.useState("No tiene pagos pendientes");

    return(

        <React.Fragment className={classes}>
        <CssBaseline>
        <AppBar position="absolute" color="default" className={classes.appBar}>
           <Toolbar>
           <Typography variant="h6" color="inherit" noWrap>
               Arma Tu Fiesta Notificaciones
           </Typography>
           </Toolbar>
        </AppBar>
       <Paper className={classes.paper}>
       <React.Fragment>
       <Typography variant="h6" color="grey" noWrap>
                     {notifications}
           </Typography>
          </React.Fragment>
          <Box  align="center">
                                <Button size="large"
                                 className={classes.button} 
                                 variant="h6" 
                                 gutterBottom
                                 href="/"
                                 >
                                 Acceder
                                  </Button>
                            </Box>
              </Paper>
               </CssBaseline>
        </React.Fragment>

    );
}