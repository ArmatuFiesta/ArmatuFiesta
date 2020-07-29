import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import SelectableRowsManagement from "./sections/DataTable.js"
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import { CreditCard } from "@material-ui/icons";

// Sections for this page


const dashboardRoutes = [];
const myStyles = {
    subHeader:{
        height: 30,
        backgroundColor: "#9EDCFA",
        color:"white",
        fontSize:20,
    },
    textCenter: {
      textAlign: "center",
      fontSize:20,
    }
  };

const useStyles = makeStyles(styles);
const useMyStyles = makeStyles(myStyles);


export default function MiCuentaPage(props) {
    const classes = useStyles();
    const myClasses = useMyStyles();
    const { ...rest } = props;
    return(
        <div>

        <div className={myClasses.subHeader} ><h6 className={myClasses.subHeader}></h6></div>
       

        <GridContainer spacing={3} >
        <GridItem xs={14} id="Compra">
            <SelectableRowsManagement/>
            </GridItem>
        </GridContainer>
        <GridContainer spacing={4} >
            <GridItem xs={6} id="TotalCompra"><p>Total de Compra:</p></GridItem>
            <GridItem xs={6} id="PagarButton"><Button color="primary" round><CreditCard /> PAGAR</Button></GridItem>
        </GridContainer>
        </div>
    );
}