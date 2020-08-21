import React, {useState, useEffect} from 'react';
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
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import PostCard from 'components/Card/PostCard.js'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Button, Paper} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

// Sections for this page


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
  },
}));


 /** Estructura de una Publicacion
   * 
   * id = models.AutoField(db_column='id_publicacion',
                          primary_key=True)
    fecha_publicacion = models.DateTimeField(db_column='fecha_publicacion', auto_now=True)
    contenido = models.TextField(db_column='contenido_publicacion')
    usuario = models.ForeignKey(to='Usuario',
                                db_column='usuario_id_usuario',
                                on_delete=models.CASCADE)
    categorias = models.ManyToManyField(to='Categoria',
                                        through='CategoriaPublicacion',
                                        related_name='publicaciones')

    def __str__(self): */



export default function BlogPage() {
  const menuCategories = ["TODAS", "TIPS", "ACCESORIOS", "QUINCEAÑERAS"];//categorias el menu
  const menuItems = [];//array del menu
  const classes = useStyles();//clases base
  //const {...rest} = props;
  //for the menu behavior

  //State hooks
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [items, setItems] = React.useState([]);//array para la data
  const [adminView, setAdminView] = React.useState(true);//estoy como admin o no
  const [path, setPath] = React.useState(String(menuCategories[0]).toLowerCase()); // toggle: muestra o no el mapa
  //Fin de state hooks


//MENU
  for (let i = 0; i < menuCategories.length; i++) {
    menuItems.push(<MenuItem key={i} onClick={(e) => handleClick(e, i)}>{menuCategories[i]}</MenuItem>);
//si vas a usar el evento tienes que declararlo^ y pasarlo       ^
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event, i) => {
    setItems([]);
    setAnchorEl(event.currentTarget);
    console.log("Llamando a " + menuCategories[i].toLowerCase());
    setPath(String(menuCategories[i]).toLowerCase());
    fetchData();
  };
  //FIN MANEJO DE MENU


  const fetchData = async () => {
     var url="publicaciones/";
    //le pasas la data que quieras cargar dependiendo de la categoria escogida y listo bello
    if(path!="todas"){
      url='publicaciones/?cat='+path;
    }
    const result = await httpClient.get(url)
    console.log(result);
    setItems(result.data);

  };


  useEffect(() => { fetchData(); }, [path]); //retorname data o vacio


  return (
    <React.Fragment className={classes}>
      <CssBaseline>
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Arma Tu Fiesta BLOG
            </Typography>
          </Toolbar>
        </AppBar>
        {adminView &&
        <Box align="center">
          {/* href="/new_post"*/} 
          <Button href="admin/productos/nuevo" props={path} size="medium">
            <Add/> 
            Agregar Nuevo Item
        </Button>
        </Box>}
        {/* en href de este boton debemos pasarle la categoria exacta en la que estamos: menuCategories[i] y que te precargue la info */}
        <Paper className={classes.paper}>
          <GridContainer spacing={2}>
            <GridItem xs={3} height="100%">
              <MenuList
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {menuItems}
              </MenuList>
            </GridItem>
            {items.map(item => <GridItem xs={4}>
                <PostCard key={item.id}
                          postTitle={item.usuario}
                          postContent={item.contenido}
                         
                />
              </GridItem>
            )}

          </GridContainer>
        </Paper>
      </CssBaseline>
    </React.Fragment>
  )


}