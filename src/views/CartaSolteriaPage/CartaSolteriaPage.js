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
import Axios from "axios";

// Sections for this page

const dashboardRoutes = [];
const headers = {
  'Content-Type': 'application/json',
};
const useStyles = makeStyles(styles);
const datos ={
  
  'template': { 
    "content" : '<b><p>Yo, {{name}}, de nacionalidad Venezolana, mayor de edad, civilmente hábil, de este domicilio, soltero y titular de la cédula de Identidad V-{{$randomPhoneNumber}}, comparezco por ante su competente autoridad con motivo al matrimonio civil que he decidido contraer, a objeto de solicitarle se sirva interrogar a los testigos que oportunamente presentaré, sobre los siguientes particulares:</p><p>PRIMERO Si me conocen suficientemente de vista, trato y comunicación desde hace varios años.</p><p>SEGUNDO: Si por ese conocimiento que de mi tienen, saben y les consta que nací en Caracas, el día {{dia}} de {{mes}} de {{año}}, y que soy hijo de {{papa}} Y {{mama}}.</p><p>TERCERO: Si por el conocimiento que de mi tienen, saben y les consta que soy soltero(a) y no tengo impedimento alguno para contraer matrimonio.</p><p>Por último solicito que una vez evacuadas las presentes actuaciones se sirva devolvérmelas en original con sus resultas. Es Justicia que espero a la fecha de su presentación. Los testigos contestaron afirmativamente a las anteriores preguntas y en consecuencia estampan sus firmas a continuación</p></b>',
    "recipe": "chrome-pdf",
    "engine": "handlebars",
    "chrome": {
        "landscape": false
    }
    
    },
  "data":{  
    "name":"qweqwe",
    "dia":"18",
    "mes":"septiembre",
    "año":"1800",
    "papa":"qweqwe",
    "mama":"dasdasdad"
    }

};


function handleClick(){
  //llega la data bien pero al descargar queda en blanco :/
  Axios.post('http://localhost:5488/api/report',datos,{header:headers}).then(res => {
    const headerContentDisp = res.headers["content-disposition"];
      const filename =
        headerContentDisp &&
        headerContentDisp.split("filename=")[1].replace(/["']/g, ""); // TODO improve parcing
      const contentType = res.headers["content-type"];

      const blob = new Blob([res.data], { contentType });
      const href = window.URL.createObjectURL(blob);

      const el = document.createElement("a");
      el.setAttribute("href", href);
      el.setAttribute(
        "download",
        filename || "someFile"
      );
      el.click();
      window.URL.revokeObjectURL(blob);
      return res;
  })
};

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
              <Button onClick={handleClick} >Get</Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
