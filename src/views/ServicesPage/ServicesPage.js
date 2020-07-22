import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Grid from "@material-ui/core/Grid";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { primaryBoxShadow } from "assets/jss/material-kit-react";
import theme from "theme.js"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

// Sections for this page


const dashboardRoutes = [];

const useStyles = makeStyles(styles);


export default function ServicePage(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    return(<div> 
        <Header/>

        <Grid container spacing={3} color>
                
                    <Grid item xs={3}>
                        <h2>Arma tu Fiesta</h2>
                    </Grid>
                    <Grid item xs={1} lg={6} container>
                        <Grid item xs><h6>item 1</h6></Grid>
                        <Grid item xs><h6>item 2</h6></Grid>
                        <Grid item xs><h6>item 3</h6></Grid>
        </Grid>
        </Grid>


        <GridContainer spacing={2}>
        <GridItem xs={3}>
        <MenuList
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>Servicio 1</MenuItem>
            <MenuItem onClick={handleClose}>Servicio 2</MenuItem>
            <MenuItem onClick={handleClose}>Servicio 3</MenuItem>
            <MenuItem onClick={handleClose}>Servicio 4</MenuItem>
            <MenuItem onClick={handleClose}>Servicio 5</MenuItem>
            <MenuItem onClick={handleClose}>Servicio 6</MenuItem>
            </MenuList>
        </GridItem>
        <GridItem xs container><div heigh="200px" color="red"></div></GridItem>
            <GridItem xs={12} md><div color="blue"></div></GridItem>
            <GridItem xs={12} md><div color="blue"></div></GridItem>
            <GridItem xs={12} md><div color="blue"></div></GridItem>
        </GridContainer>

    </div>); 
}


