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

export default function PostCard(props) {
  const classes = useStyles();
  const { postTitle, postContent, path, imageSrc, ...rest } = props;
  return (
    <Card style={{width: "200"}}>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src={imageSrc}
        alt={postTitle}
      />
      <CardBody>
        {/* aqui es donde va todo el body del card */}
        <h4 className={classes.cardTitle}>{postTitle}</h4>
        <p>{postContent}</p>
       {/*<GridContainer>
          <GridItem sm={6}><Button href={'/'+path} color="primary">Detalle</Button> </GridItem>
          <GridItem sm={6}><Button color="secondary">Añadir</Button> </GridItem>
       </GridContainer>*/}
        
      </CardBody>
    </Card>
  );
}