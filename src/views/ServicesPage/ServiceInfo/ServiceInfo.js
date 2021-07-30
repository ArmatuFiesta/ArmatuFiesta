import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import CssBaseline from '@material-ui/core/CssBaseline';
import { cardTitle } from "assets/jss/material-kit-react.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Input, FormHelperText, Paper } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { Message } from "@material-ui/icons";
import Button from "components/CustomButtons/Button.js";
import ComboBox from "components/ComboBox/ComboBox.js";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const styles = {
  ...imagesStyles,
  cardTitle,
  textMuted: {
    color: "#6c757d"
  },
};

const myStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(10),
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

const tiposEventos=[{title:"Matrimonio"},{title:"Boda"},{title:"Quinceanos"},{title:"Infantil"},{title:"Otros"}];

const useStyles = makeStyles(myStyles);


export default function ServiceInfoPage(props) {
{/**Este componente debe ser generico y variaria segun su tipo de producto */}
const { productName, productDescription, path, ...rest } = props;
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return(


<React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            star subastas
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Informacion del producto
          </Typography>
         
          <GridContainer alignContent='stretch'  spacing={2}>
          <GridItem xs={6}>
              <Card>
          <img className={classes.imgCardTop} src="..." alt="Card-img-cap" />
          <CardBody>
              <h4 className={classes.cardTitle}>Servicio Ejemplo</h4> {/** {service.name} */}
              <p>Tipo: Comedor
Direccion: Quinta numero xx, Palos Grandes, Carcas {/** {service.description} */}
Contacto: 0414-xxxx-xxx
Ambiente: Elegante</p>   
              <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p>  {/** {service.habilitado} */}
          </CardBody>
          </Card>
          </GridItem>
          <GridItem xs={4} justify='flex-end'>
          <div>
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
        <Button color="primary" round><Message/> Contratar</Button>
    </div>
          
          </div>
          </GridItem>
      </GridContainer>
      
        </Paper>
      </main>
    </React.Fragment>

    );
}