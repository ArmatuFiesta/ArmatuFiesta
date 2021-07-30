import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function ProductCard(props) {
  const classes = useStyles();
  const { productName, productDescription, path, onAdd, ...rest } = props;
  return (
    <Card style={{width: "20rem"}}>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src="..."
        alt="Card-img-cap"
      />
      <CardBody>
        {/* aqui es donde va todo el body del card */}
        <h4 className={classes.cardTitle}>{productName}</h4>
        <p>{productDescription}</p>
        <GridContainer>
          <GridItem sm={6}><Button href={'/'+path} color="primary">Detalle</Button> </GridItem>
          <GridItem sm={6}><Button onClick={onAdd} color="secondary">Añadir</Button> </GridItem>
        </GridContainer>
        
      </CardBody>
    </Card>
  );
}