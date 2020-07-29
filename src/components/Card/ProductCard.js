import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function ProductCard(props) {
  const classes = useStyles();
  const { productName, productDescription, ...rest } = props;
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
        {/*<Button color="primary">Añadir al carrito</Button>*/}
      </CardBody>
    </Card>
  );
}