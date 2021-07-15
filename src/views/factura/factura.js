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
import Parallax from "components/Parallax/Parallax.js";
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


// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);



export default function LandingPage(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [idcontrato, setcontrato] = React.useState('');
  
  const [html, setHTML]= React.useState('');

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
  const handleClickFactura = (idcontrato) =>{
    if(!isNaN(idcontrato)){
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'factura','recipe':'chrome-pdf'}  ,
  'data':
  {"idContrato": idcontrato
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
        link.setAttribute('download', 'factura.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    })
    .catch((error) => console.log(error));
  }else handleClickOpen()
  }
  const handleClickFactura1 = (idcontrato) =>{
    if(!isNaN(idcontrato)){
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'factura'}  ,
  'data':
  {"idContrato": idcontrato
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
  } else handleClickOpen()
  }

  const handleClickIT = (idcontrato) =>{
    if(!isNaN(idcontrato)){
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'itinerario','recipe':'chrome-pdf'}  ,
  'data':
  {"idContrato": idcontrato
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
        link.setAttribute('download', 'itinerario.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    })
    .catch((error) => console.log(error));
  }else handleClickOpen()
  }
  const handleClickIT1 = (idcontrato) =>{
    if(!isNaN(idcontrato)){
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'itinerario'}  ,
  'data':
  {"idContrato": idcontrato
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
  } else handleClickOpen()
  }

  const handleClickVJ = (idcontrato) =>{
    if(!isNaN(idcontrato)){
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'viajeros','recipe':'chrome-pdf'}  ,
  'data':
  {"idContrato": idcontrato
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
        link.setAttribute('download', 'viajeros.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    })
    .catch((error) => console.log(error));
  }else handleClickOpen()
  }
  const handleClickVJ1 = (idcontrato) =>{
    if(!isNaN(idcontrato)){
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'viajeros'}  ,
  'data':
  {"idContrato": idcontrato
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
  } else handleClickOpen()
  }


  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="TRAVGO"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      /> 
     
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <GridContainer>
            <GridItem> </GridItem>
        </GridContainer><GridContainer>
            <GridItem>espacio </GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem> espacio </GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem> espacio</GridItem>
        </GridContainer><GridContainer>
            <GridItem> espacio</GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem> espacio</GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem> <label><h1>VENTA</h1> </label></GridItem>
        </GridContainer>


        <List className={classes.list}>
        
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ListItem>
       

        </ListItem>
        </MuiPickersUtilsProvider>
        <ListItem>
            <CustomInput
                      labelText="id contrato"
                      id="idcontrato"
                      inputProps={{onChange: e => setcontrato(e.target.value)
                      }
                    }
                    /> 
             </ListItem>
                    </List>
                    
                   
                     

 
                       
         
          <GridContainer>
            <GridItem>
              <Button onClick={(e) =>handleClickFactura(idcontrato)} >Descargar Factura</Button>
              <Button onClick={(e) =>handleClickIT(idcontrato)} >Descargar Itinerario</Button>
              <Button onClick={(e) =>handleClickVJ(idcontrato)} >Descargar Viajeros</Button>
            </GridItem>
            <GridItem>
              <Button onClick={(e) =>handleClickFactura1(idcontrato)} >Ver Factura</Button>
              <Button onClick={(e) =>handleClickIT1(idcontrato)} >Ver Itinerario</Button>
              <Button onClick={(e) =>handleClickVJ1(idcontrato)} >Ver Viajeros</Button>
            </GridItem>
          </GridContainer>
          <div>
           
              <div dangerouslySetInnerHTML={{__html:html}}></div>
         
          </div>
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
      <Footer />
    </div>
  );
}
