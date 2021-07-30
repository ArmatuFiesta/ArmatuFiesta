import React  from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
import DateFnsUtils from '@date-io/date-fns';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import { downloadFile } from 'react-file-downloader'
// @material-ui/icons

// core components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import Header from "components/Header/Header.js";
import MenuItem from '@material-ui/core/MenuItem';
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import CustomInput from "components/CustomInput/CustomInput.js";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Axios from "axios";
import { defaultBoxShadow } from 'assets/jss/material-kit-react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { number } from 'prop-types';


// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);



export default function LandingPage(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [agencia, setAgencia] = React.useState('0');
  const [costomin, setcostomin]= React.useState('0');
  const [costomax, setcostomax] = React.useState('0');
  const [personas, setpersonas] = React.useState('0');
  const [salidamin, setsalidamin] = React.useState(new Date("2020-12-20"));
  const [salidamax, setsalidamax] = React.useState(new Date("2020-12-20"));
  const [duracion, setduracion] = React.useState('0');
  const [html, setHTML]= React.useState('');


  const handlenombre = (event) => {
    setAgencia(event.target.value);
    
  };

  const htmlnuevo = (htmll)=>{
    setHTML(htmll.data);

  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { ...rest } = props;
  const handleClick = (agencia,costomin,costomax,personas,salidamin,salidamax,duracion) =>{
    if(costomin=='') {costomin=0; console.log(costomin)};
    if(costomax=='') {costomax=0; console.log(costomax)};
    if(personas=='') {personas=0; console.log(personas)};
    if(duracion=='') {duracion=0; console.log(duracion)};
    if(!isNaN(costomin)&&!isNaN(costomax)&&!isNaN(personas)&&!isNaN(duracion)){
    
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'fichaa','recipe':'chrome-pdf'}  ,
  'data':
  {"continente": agencia,
  "costomin": costomin,
  "costomax": costomax,
  "personas": personas,
  "salidamin": salidamin,
  "salidamax": salidamax,
  "duracion": duracion
    }},
    {
        responseType: 'arraybuffer',
        headers: {
            'Content-Type': 'application/json',
            
            'Accept': 'application/pdf'
        }
    })
    .then((res) => {
        const contentType = res.headers["content-type"];
        const blob = new Blob([res.data], {contentType} ); 
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'fichas.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    })
    .catch((error) => console.log(error));

  }else handleClickOpen()
}
  const handleClick1 = (agencia,costomin,costomax,personas,salidamin,salidamax,duracion) =>{

    if(costomin=='') {costomin=0; console.log(costomin)};
    if(costomax=='') {costomax=0; console.log(costomax)};
    if(personas=='') {personas=0; console.log(personas)};
    if(duracion=='') {duracion=0; console.log(duracion)};
    if(!isNaN(costomin)&&!isNaN(costomax)&&!isNaN(personas)&&!isNaN(duracion)){
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'fichaa'}  ,
  'data':
  {"continente": agencia,
  "costomin": costomin,
  "costomax": costomax,
  "personas": personas,
  "salidamin": salidamin,
  "salidamax": salidamax,
  "duracion": duracion
    }},
    {
        responseType: 'text',
        headers: {
            'Content-Type': 'application/json',
            'Accept':'HTML'
            
            
        }
    })
    .then((res) => {
      const contentType = res.headers["content-type"];
      console.log(res.status);
      htmlnuevo(res); 
    })
    .catch((error) => console.log(error));
  }else handleClickOpen()
  }

  return (
    <div>
      
     
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <GridContainer>
            <GridItem> </GridItem>
        </GridContainer><GridContainer>
            <GridItem>&nbsp; </GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem> &nbsp; </GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem> &nbsp;</GridItem>
        </GridContainer><GridContainer>
            <GridItem> </GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem> </GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem> <label><h1>Productos</h1> </label></GridItem>
        </GridContainer>

        <GridContainer>
            <GridItem> <h1></h1> </GridItem>
        </GridContainer><GridContainer>
            <GridItem> 
              <h1></h1>

            </GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem>  <h1></h1><h1></h1> </GridItem>
        </GridContainer>


        <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <FormControl className={classes.formControl}>
          <Select
          value={agencia}
          onChange={handlenombre}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
          
        >
          
          <MenuItem value={0}>Todos</MenuItem>
          <MenuItem value={'asia'}>asia</MenuItem>
          <MenuItem value={'africa'}>africa</MenuItem>
          <MenuItem value={'america'}>america</MenuItem>
          <MenuItem value={'europa'}>europa</MenuItem>
          <MenuItem value={'oceania'}>oceania</MenuItem>

        </Select>
        <FormHelperText>Filtrar por continente</FormHelperText>
            </FormControl>
        </ListItem>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ListItem>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="min1"
          label="Desde (minimo)"
          value={salidamin}
          onChange={e => setsalidamin(e)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /><KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        id="max1"
        label="hasta (maximo)"
        value={salidamax}
        onChange={e => setsalidamax(e)}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />

        </ListItem>
        </MuiPickersUtilsProvider>
        <ListItem>
            <CustomInput
                      labelText="precio minimo"
                      id="costomin"
                      
                      inputProps={{onChange: e => setcostomin(e.target.value)
                      }
                    }
                    /> 
                    
            <CustomInput
                      labelText="precio maximo"
                      id="costomax"
                      
                      inputProps={{
                        
                        onChange: e => setcostomax(e.target.value)
                      }}
                    />    
           <CustomInput
                      labelText="numero de personas"
                      id="personas"
                     
                      inputProps={{
                        
                        onChange: e => setpersonas(e.target.value)
                      }}
                    />  
                    <CustomInput
                      labelText="duracion"
                      id="duracion"
                     
                      inputProps={{
                        
                        onChange: e => setduracion(e.target.value)
                      }}
                    /> </ListItem>
                    </List>
                    
                   
                     

 
                    <GridContainer>      
                
                <div dangerouslySetInnerHTML={{__html:html}}></div>
                
                </GridContainer>   
         
          <GridContainer>
            <GridItem>
              <Button onClick={(e) =>handleClick(agencia,costomin,costomax,personas,salidamin,salidamax,duracion)} >Ofertar </Button>
            </GridItem>
         
          </GridContainer>
          <div>
             
          </div>
          <div>&nbsp;</div>
          <div>
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Todos los datos deben ser numeros o vacios, por favor verifica
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
