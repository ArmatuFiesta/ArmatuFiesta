import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import axios from 'axios';

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ProductCard from 'components/Card/ProductCard.js'
import MapPage from "views/MapPage/MapPage";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";


// Sections for this page


const useStyles = makeStyles(styles);
const Product = ({name, description}) => ({
  //instancia de producto
  type: 'item',
  props: {
    name: name,
    description: description,
  }
});



export default function ServicePage(props) {
 
  const {menuCategories} = props;//categorias el menu
  const menuItems = [];//array del menu
  const classes = useStyles();//clases base
  const {...rest} = props;
  //for the menu behavior

  //State hooks
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const [mapPage, setMapPage] = React.useState(true);//si el contenido requiere mapa o no
  const [adminView, setAdminView] =React.useState(true);//estoy como admin o no
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    const [showMap, setChecked] = React.useState(false); // toggle: muestra o no el mapa
  
    const toggleChecked = () => {  //funcion para el toggle de mapa
      setChecked((prev) => !prev);
    };

  const componentDidMount= (data) => {
    //le pasas la data que quieras cargar dependiendo de la categoria escogida y listo bello
    axios.get('http://localhost:8000/api/'+{data}+'/')
      .then(res => {
        const items = res.data;
        setItems({ items: items });
        uploadProducts(data);
      })
  };


//final del menu behavior

  const uploadProducts = (data) => {
    if(data==="NOTARIAS" || data==="SALONES") {
    setMapPage(true);
    }
  
    
    setItems(
     items.map(Product => <GridItem xs={3}>
        <ProductCard productName={items.name}
                     productDescription={items.categoria}
          /*href="/map"
            onClick={<Link to={"/com"} className={classes.Link}> </Link>
            Para cada producto se requiere de un link con parametro id que indique el producto al que se refiere */
        />
      </GridItem>)

    );
    
  };

  
  for (let i = 0; i < 6; i++) {
    menuItems.push(<MenuItem key={i} onClick={() => uploadProducts(i)}>{menuCategories[i]}</MenuItem>)
  }


  return (<>
    {adminView && <Button ><Add/> Agregar Nuevo Item </Button>}
   {mapPage && <FormControlLabel
    control={<Switch checked={showMap} onChange={toggleChecked} />}
    label="Mapa"
  />}
    <GridContainer spacing={2}>
      <GridItem xs={3}>
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
      {items}
      <GridItem xs={6}><MapPage isHidden={showMap}></MapPage></GridItem>
    </GridContainer>


  </>);
}
