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
  const [tipo, setTipo] = React.useState('0');
  const [personas, setpersonas] = React.useState('0');
  const [salidamin, setsalidamin] = React.useState(new Date("2020-12-20"));
  const [salidamax, setsalidamax] = React.useState(new Date("2020-12-20"));
  const [duracion, setduracion] = React.useState('0');
  const [html, setHTML]= React.useState('');
  
  const handleTipo = (event)=>{
    setTipo(event.target.value);
  };

  const handleCostoCliente = (event)=>{
    setcostomin(event.target.value);
  };
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
    {'template':{'name':'ficharally','recipe':'chrome-pdf'}  ,
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
        link.setAttribute('download', 'rallys.pdf'); //or any other extension
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
    {'template':{'name':'ficharally'}  ,
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
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="star subastas"
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
            <GridItem> <label><h1>Nuevo Evento</h1> </label></GridItem>
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
          
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>

        </Select>
        <FormHelperText>ID Organizador  </FormHelperText>
            </FormControl>
           <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
          <FormControl className={classes.formControl}>
            
          <Select
          value={tipo}
          onChange={handleTipo}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
          
        >
          
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>

        </Select>
        <FormHelperText>Tipo</FormHelperText>
            </FormControl>
            <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
          <FormControl className={classes.formControl}>
            
          <Select
          value={tipo}
          onChange={handleTipo}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
          
        >
          
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>

        </Select>
        <FormHelperText>Local</FormHelperText>
            </FormControl>
            <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
          <FormControl className={classes.formControl}>
            
          <Select
          value={tipo}
          onChange={handleTipo}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
          
        >
          
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>

        </Select>
        <FormHelperText>Tipo Pujas</FormHelperText>
            </FormControl>
        </ListItem>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ListItem>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy/HH/mm"
          margin="normal"
          id="min1"
          label="Fecha"
          value={salidamin}
          onChange={e => setsalidamin(e)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </ListItem><ListItem>
        <CustomInput
          labelText="Duracion Hrs"
          id="idcontrato"
          inputProps={{//onChange: e => setcontrato(e.target.value)
          }
        }
        /> <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <CustomInput
          labelText="Precio Clientes"
          id="idcontrato"
          inputProps={{//onChange: e => setcontrato(e.target.value)
          }
        }
        /> <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <CustomInput
          labelText="Precio General"
          id="idcontrato"
          inputProps={{//onChange: e => setcontrato(e.target.value)
          }
        }
        />         
        </ListItem>
        </MuiPickersUtilsProvider>
        
                    </List>
                    
                   
                     

 
                       
         
          <GridContainer>
            <GridItem>
              <Button onClick={(e) =>handleClick(agencia,costomin,costomax,personas,salidamin,salidamax,duracion)} >Siguiente</Button>
            </GridItem>
          </GridContainer>
          <div>
           
              <div dangerouslySetInnerHTML={{__html:html}}></div>
         
          </div>
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