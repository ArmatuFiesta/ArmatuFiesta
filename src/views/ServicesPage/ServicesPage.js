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


const dashboardRoutes = [];

const useStyles = makeStyles(styles);


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
      //end of the menu behavior
    return(<div> 
       {/*<Header
        brand="Arma Tu Fiesta"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}

        {...rest}/> */} 

        <GridContainer spacing={2}> 
        <GridItem xs={3}>
        <MenuList
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>{menuCategories[0]}</MenuItem>
            <MenuItem onClick={handleClose}>{menuCategories[1]}</MenuItem>
            <MenuItem onClick={handleClose}>{menuCategories[2]}</MenuItem>
            <MenuItem onClick={handleClose}>{menuCategories[3]}</MenuItem>
            <MenuItem onClick={handleClose}>{menuCategories[4]}</MenuItem>
            <MenuItem onClick={handleClose}>{menuCategories[5]}</MenuItem>
            </MenuList>
        </GridItem>

      
        <GridItem xs={3}>
            <ProductCard></ProductCard>
        </GridItem>
        <GridItem xs={3}>
            <ProductCard></ProductCard>
        </GridItem>
        <GridItem xs={3}>
            <ProductCard></ProductCard>
        </GridItem>
            <GridItem xs={12} md><div color="blue"></div></GridItem>
        </GridContainer>

    </div>); 
}


