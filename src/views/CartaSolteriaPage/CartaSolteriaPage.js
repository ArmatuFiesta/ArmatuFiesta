import React  from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import { downloadFile } from 'react-file-downloader'
// @material-ui/icons

// core components

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import TextField from '@material-ui/core/TextField';

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Axios from "axios";

// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const datos ={
  
  'template': { 
    "name":"solteria"
    
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

  Axios.post("http://localhost:5488/api/report",
  datos,
  {
      responseType: 'arraybuffer',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/pdf'
      }
  })
  .then((res) => {
      const contentType = res.headers["content-type"];
      const blob = new Blob([res.data], {contentType} ); 
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'sample.pdf'); //or any other extension
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
  })
  .catch((error) => console.log(error));


};
function handleChange(event) {
  this.setState({value: event.target.value});
  console.log(event.target.value)
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
        <GridContainer></GridContainer>
        <GridContainer>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="name" label="Nombre y apellido" variant="outlined"/>
          <TextField id="dia" label="dia de nacimiento" variant="outlined" />
          <TextField id="mes" label="mes de nacimiento" variant="outlined" />
          <TextField id="año" label="año de nacimiento" variant="outlined" />
          <TextField id="padre" label="nombre y apellido padre" variant="outlined" />
          <TextField id="madre" label="Nombre y apellido madre" variant="outlined" props={onchange={name=this.target.value}}/>
        </form>      
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
