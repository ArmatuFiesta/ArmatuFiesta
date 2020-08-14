import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import {Link} from "react-router-dom";

import FormControl from '@material-ui/core/FormControl';
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import {InputLabel, Input, FormHelperText} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {Message, Save, Add, Label, Cloud, CloudUpload} from "@material-ui/icons";
import Button from "components/CustomButtons/Button.js";
import ComboBox from "components/ComboBox/ComboBox.js";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import httpClient from "core/http-client";

const categoriasEx = [{title: "CATERING"}, {title: "NOTARIAS"}, {title: "DECORACION"}, {title: "CORTE Y COSTURA"}, {title: "OBSEQUIOS Y TARJETERIA"}, {title: "MATRIMONIOS"}];

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    width: 'auto',
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
  },
  margins: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  }
}));


export default function AddItemPage(props) {
  const classes = useStyles();
  const category = props;
  const [product, setProduct]= React.useState(null); 

  console.log('Categoria: '+ category);

   const handleSubmit = event => {
     
    //setProduct(nombre);

    httpClient.post(''+{category}+'/',{product})
    .then(res => {
      console.log(res);
    }) 
  };
  return (
    <React.Fragment>
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Vista Administrador
          </Typography>
        </Toolbar>
      </AppBar>


      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h5" align="center">Agregar Item</Typography>
          <GridContainer spacing={3}>
            <GridItem sm={6}>
              <p>Selecciona la categoria del Item</p>
              <ComboBox itemList={categoriasEx} label="Categoria"/>
              <ComboBox itemList={categoriasEx} label="Subcategoria"/>
              <br/>
              <p>Coloca el nombre con el que se identifica el item</p>
              <FormControl>
                <InputLabel htmlFor="my-input">Nombre Item</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text"/>
                {/*<FormHelperText id="my-helper-text">Nombres y Apellidos</FormHelperText>*/}
              </FormControl>
              <br/>
              <p>Indica el precio asociado</p>
              <FormControl>
                <InputLabel htmlFor="my-input">Precio Item</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text"/>
                {/*<FormHelperText id="my-helper-text">Nombres y Apellidos</FormHelperText>*/}
              </FormControl>
            </GridItem>
            <GridItem sm={6}>
              <Button
                variant="contained"
                align="center"
                color="default"
                className={classes.button}
                startIcon={<CloudUpload/>}
              >
                Agregar Foto
              </Button>
              <Input type="image" className={classes.margins}></Input>
              <TextField
                id="outlined-textarea"
                label="Descripción Item"
                width="full"
                placeholder="Describe aqui tu producto/servicio!"
                multiline
                variant="outlined"
                className={classes.margins}
              />

              <br/><br/>
              <Button onClick= {handleSubmit()} color="primary" round className={classes.buttons}><Save/> Agregar Producto</Button>
            </GridItem>
          </GridContainer>
        </Paper>
      </main>


    </React.Fragment>
  );
}