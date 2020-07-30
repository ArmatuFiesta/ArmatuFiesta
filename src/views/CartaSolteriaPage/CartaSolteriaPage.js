import React from "react";
import Datetime from "react-datetime";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Arma Tu Fiesta"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Carta De Solteria</h1>
              <h4>Llena los datos Abajo para generar tu carta de solteria</h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <GridContainer>
          <GridItem xs={4}>
          <CustomInput
                labelText= "Nombre y Apellido"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
          </GridItem>
          <GridItem xs={4}>
          <CustomInput
                id="float"
                
                  labelText= "Cedula 'V-000000 o E-00000'"
               
                formControlProps={{
                  fullWidth: true
                }}
              />
          </GridItem>
          <GridItem xs={4} lg={5}>
            <InputLabel className={classes.label}>
                    Fecha de Nacimiento
                  </InputLabel>
                
                  <FormControl fullWidth>

                    <Datetime
                    timeFormat={false}
                      styles={useStyles}
                      locale ="mx"
                      inputProps={{ placeholder: "Fecha de Nacimiento" }}
                    />
                  </FormControl>
                </GridItem>

          </GridContainer>
          <GridContainer>
          <GridItem xs={4}>
          <CustomInput
                id="float"
                  labelText= "Nombre y Apellido Padre"
                formControlProps={{
                  fullWidth: true
                }}
              />
          </GridItem>
          <GridItem xs={4}>
          <CustomInput
                id="float"
                  labelText= "Cedula Padre 'V-000000 o E-00000'"
                formControlProps={{
                  fullWidth: true
                }}
              />
          </GridItem>
          </GridContainer>
          <GridContainer>
          <GridItem xs={4}>
          <CustomInput
                id="float"
                
                labelText= "Nombre y Apellido Madre"
               
                formControlProps={{
                  fullWidth: true
                }}
              />
          </GridItem>
          <GridItem xs={4}>
          <CustomInput
                id="float"
                
                  labelText="Cedula Madre 'V-000000 o E-00000'"
             
                formControlProps={{
                  fullWidth: true
                }}
              />
          </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem>
              <Button></Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
