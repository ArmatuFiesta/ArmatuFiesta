import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import {LocalDining, MusicNote, House } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function AboutUs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Quienes Somos?</h2>
          <h5 className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
            pellentesque nulla eu placerat. Mauris tristique leo et placerat
            rhoncus. Fusce non posuere sem, eu molestie nisl. Proin quis
            suscipit felis. Aenean accumsan lacus sit amet maximus sollicitudin.
            Integer varius vestibulum mi, at cursus tortor. Nam condimentum est
            ac maximus pulvinar. Vivamus molestie a odio sed feugiat.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Cathering"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pellentesque nulla eu placerat. Mauris tristique leo et placerat rhoncus. "
              icon={LocalDining}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Música"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pellentesque nulla eu placerat. Mauris tristique leo et placerat rhoncus. "
              icon={MusicNote}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Salones de fiesta"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pellentesque nulla eu placerat. Mauris tristique leo et placerat rhoncus. "
              icon={House}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
