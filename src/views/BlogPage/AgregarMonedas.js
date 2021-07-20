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
import { Link } from "react-router-dom";

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
  const [NUR, setNur]= React.useState('0');
  const [ASK, setAsk]= React.useState('0');
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

  const handleNur = (event)=>{
    setNur(event.target.value);
  };
  const handleAsk = (event)=>{
    setAsk(event.target.value);
  };
  const handleDur = (event)=>{
    setduracion(event.target.value);
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

  const handleClick1 = () =>{
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'EventosObras'}  
  },
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

  }
  const handleClick = (NUR,ASK,duracion) =>{
    const params = new URLSearchParams()
    params.append('nur',NUR)
    params.append('ask',ASK)
    params.append('duracion',duracion)
    Axios.post("http://localhost:3000/",params,
    
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
            <GridItem> <label><h1>Agrega Monedas</h1> </label></GridItem>
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
          
           <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
          
           
           
    
        </ListItem>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ListItem>
        
        </ListItem><ListItem>
        <CustomInput
          labelText="NUR"
          id="NUR"
          inputProps={{onChange: e => handleNur(e.target.value)
          }
        }
        /> <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
       <CustomInput
          labelText="ASK"
          id="ASK"
          inputProps={{onChange: e => handleAsk(e.target.value)
          }
        }
        /> <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <CustomInput
          labelText="Duracion"
          id="duracion"
          inputProps={{onChange: e => setduracion(e.target.value)
          }
        }
        /> <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>    
        </ListItem>
        </MuiPickersUtilsProvider>
        
                    </List>
                    
                   
                     

 
                       
         
          <GridContainer>
            <GridItem>
              <Button onClick={(e) =>handleClick(NUR,ASK,duracion)} >Agregar</Button>
              <Button onClick={(e) =>handleClick1()} >Ver lista</Button>
              <Button>
              <Link to={"events"} className={classes.Link}>Finalizar</Link>
              </Button>
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
