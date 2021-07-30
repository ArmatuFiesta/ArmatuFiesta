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
  const [idOrganizador, setid] = React.useState('0');
  const [costomin, setcostomin]= React.useState('0');
  const [costomax, setcostomax] = React.useState('0');
  const [tipo, setTipo] = React.useState('0');
  const [local, setLocal] = React.useState('0');
  const [pujas, setpujas] = React.useState('0');
  const [duracion, setduracion] = React.useState('0');
  

  const [html, setHTML]= React.useState('');
  
  const handleTipo = (event)=>{
    setTipo(event.target.value);
  };
  const handleLocal = (event)=>{
    setLocal(event.target.value);
  };
  const handlePujas = (event)=>{
    setpujas(event.target.value);
  };

  const handleCostoCliente = (event)=>{
    setcostomin(event.target.value);
  };
  const handleId = (event) => {
    setid(event.target.value);
    
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

  const handleClick = (idOrganizador) =>{
    const params = new URLSearchParams()
    params.append('id',idOrganizador)

    Axios.post("http://localhost:3000/insOrg",params,
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            
            
        }
    })
    .then((res) => {
        
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
            <GridItem> <label><h1>Agregar Organizadores y Lugar</h1> </label></GridItem>
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
        
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ListItem>
        <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <CustomInput
          labelText="id Organizador"
          id="idOrganizador"
          inputProps={{onChange: e => setid(e.target.value)
          }
        }
        /> <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <CustomInput
          labelText="Nombre Lugar"
          id="costomax"
          inputProps={{onChange: e => setcostomax(e.target.value)
          }
        }
        />         
        </ListItem>
        </MuiPickersUtilsProvider>
        
                    </List>
                    
                   
                     

 
                       
         
          <GridContainer>
            <GridItem>
              <Button onClick={(e) =>handleClick(idOrganizador)}>
              <Link to={"newEvent2"} className={classes.Link}>SIGUIENTE</Link>
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
