import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ProductCard from 'components/Card/ProductCard.js'


// Sections for this page


const useStyles = makeStyles(styles);
const Product=({name, description})=>({ 
    //instancia de producto
    type:'item',
    props:{
        name:name,
        description:description,
    }
});

export default function ServicePage(props) {
const {menuCategories}=props;
    const classes = useStyles();
    const { ...rest } = props;
    //for the menu behavior
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const selectedMenuItem = (category) => {
        var productsList;
        switch (category) {
            case 0:
              //Muestra comida y bebidas
              break;
            case 1:
              //Muestra Salones
              break;
            case 6:
                productsList=[
                    {
                        name: 'Cursos Matrimoniales',
                        description: 'cursitos matrimoniales para ti'
                    },
                
                    {
                        name: 'Carta de Solteria',
                        email: 'Haz tu carta de solteria online!'
                    }
                ]
              //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
              break;
            default:
              //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
              break;
          }
          uploadProducts(productsList);
      };

      const uploadProducts = (products) => {
      
                products.map(Product => <GridItem xs={3}>
                <ProductCard productName={Product.name} 
                productDescription={Product.description}
              /*href="/map"
                onClick={<Link to={"/com"} className={classes.Link}> </Link>
                Para cada producto se requiere de un link con parametro id que indique el producto al que se refiere */
                          />
                </GridItem>);
    
    
    };

      //end of the menu behavior
    return(<div> 

        <GridContainer spacing={2}> 
        <GridItem xs={3}>
        <MenuList
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem onClick={selectedMenuItem}>{menuCategories[0]}</MenuItem>
            <MenuItem onClick={selectedMenuItem}>{menuCategories[1]}</MenuItem>
            <MenuItem onClick={selectedMenuItem}>{menuCategories[2]}</MenuItem>
            <MenuItem onClick={selectedMenuItem}>{menuCategories[3]}</MenuItem>
            <MenuItem onClick={selectedMenuItem}>{menuCategories[4]}</MenuItem>
            <MenuItem onClick={selectedMenuItem}>{menuCategories[5]}</MenuItem>
            </MenuList>
        </GridItem>
        {/**AQUI VAN LOS PRODUCTOS/SERVICIOS */}
        </GridContainer>
        

    </div>); 
}


