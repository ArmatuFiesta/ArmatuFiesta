import React, { useState, useEffect } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function  NotificationItem(props){
    const {fecha_contrato, monto}=props;
  
  
    return(
      
      <Box align="center" >
      <Typography variant="h6" color="primary" noWrap>{"tiene un contrato pendiente por cancelar en "+String(fecha_contrato)}</Typography>
      <Typography variant="subtitle1" color="grey" noWrap>{"por un monto de "+monto}</Typography>
      <br></br>
      </Box>
    );
  }