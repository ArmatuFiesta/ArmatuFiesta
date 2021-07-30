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
  const [FI, setFecha_Inicio] = React.useState(new Date("2020-12-20"));

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
  const handleClick = ( FI, Costo_inscripcion_Clientes, Costo_Inscripcion,Tipo, LocalSubasta, TipoPujas, DuracionHoras) =>{
    console.log(FI);
    const ff = FI.toLocaleString();
    console.log(ff);
    const params = new URLSearchParams()
    params.append('Fecha_Inicio',ff)
    params.append('Estatus','P')
    params.append('Costo_inscripcion_Clientes',Costo_inscripcion_Clientes)
    params.append('Costo_Inscripcion',Costo_Inscripcion)
    params.append('Tipo',Tipo)
    params.append('LocalSubasta',LocalSubasta)
    params.append('TipoPujas',TipoPujas)
    params.append('DuracionHoras',DuracionHoras)

    Axios.post("http://localhost:3000/newEventos",params,
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
          value={tipo}
          onChange={handleTipo}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
          
        >
          
          <MenuItem value={'P'}>Presencial</MenuItem>
          <MenuItem value={'O'}>Online</MenuItem>



        </Select>
        <FormHelperText>Tipo</FormHelperText>
            </FormControl>
            <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
          <FormControl className={classes.formControl}>
            
          <Select
          value={local}
          onChange={handleLocal}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
          
        >
          
          <MenuItem value={1}>Si</MenuItem>
          <MenuItem value={0}>no</MenuItem>

        </Select>
        <FormHelperText>Local</FormHelperText>
            </FormControl>
            <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
          <FormControl className={classes.formControl}>
            
          <Select
          value={pujas}
          onChange={handlePujas}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
          
        >
          
          <MenuItem value={'D'}>Dinamica</MenuItem>
          <MenuItem value={'C'}>Sobre Cerrado</MenuItem>
          <MenuItem value={'R'}>Round Robin</MenuItem>
          <MenuItem value={'B'}>A la baja</MenuItem>
          <MenuItem value={'S'}>Silenciosa</MenuItem>

        </Select>
        <FormHelperText>Tipo Pujas</FormHelperText>
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
          label="Fecha"
          value={FI}
          onChange={e => setFecha_Inicio(e)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </ListItem><ListItem>
        <CustomInput
          labelText="Duracion Hrs"
          id="duracion"
          inputProps={{onChange: e => setduracion(e.target.value)
          }
        }
        /> <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <CustomInput
          labelText="Precio Clientes"
          id="costomin"
          inputProps={{onChange: e => setcostomin(e.target.value)
          }
        }
        /> <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <CustomInput
          labelText="Precio General"
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
              <Button onClick={(e) =>handleClick(FI,costomin,costomax,tipo,local,pujas,duracion)}>
              <Link to={"newEvent1"} className={classes.Link}>SIGUIENTE</Link>
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
