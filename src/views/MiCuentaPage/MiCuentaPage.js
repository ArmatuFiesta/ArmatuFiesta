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
import Button from "components/CustomButtons/Button.js";
import { CreditCard } from "@material-ui/icons";

// Sections for this page


const dashboardRoutes = [];
const myStyles = {
    subHeader:{
        heigh: 500,
        backgroundColor: "#9EDCFA",
        color:"white",
    },
    textCenter: {
      textAlign: "center"
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

        <div className={myClasses.subHeader} ><h6>"Mi lista de compra"</h6></div>
       

        <GridContainer spacing={3} >
            <GridItem xs={2} id="Producto"><p>Producto</p></GridItem>
            <GridItem xs={2} id="Unidades"><p>Unidades</p></GridItem>
            <GridItem xs={2} id="Punitario"><p>Precio Unitario</p></GridItem>
            <GridItem xs={6} id="Ptotal"><p>Precio Total</p></GridItem>
        </GridContainer>
        <GridContainer spacing={4} >
            <GridItem xs={6} id="TotalCompra"><p>Total de Compra:</p></GridItem>
            <GridItem xs={6} id="PagarButton"><Button color="primary" round><CreditCard /> PAGAR</Button></GridItem>
        </GridContainer>
        </div>
    );
}