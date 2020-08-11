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
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Axios from "axios";
import { defaultBoxShadow } from 'assets/jss/material-kit-react';

// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const datos ={
  
  'template': { 
    "name":"solteria"
    
    },
  "data":{  
    "name":"",
    "dia":"",
    "mes":"",
    "año":"",
    "papa":"",
    "mama":""
    }

};



export default function LandingPage(props) {
  const classes = useStyles();
  const [nombre, setNombre] = React.useState('');
  const [cedula, setCedula]= React.useState('');
  const [dia, setDia] = React.useState('');
  const [mes, setMes] = React.useState('');
  const [anio, setAño] = React.useState('');
  const [padre, setPadre] = React.useState('');
  const [madre, setMadre] = React.useState('');
  
  const { ...rest } = props;
  const handleClick = (nombre,dia,mes,anio,padre,madre) =>{
    
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'solteria'}  ,
  'data':
  {'name':nombre,
    'cedula':cedula,
    'dia':dia,
    'mes':mes,
    'año':anio,
    'papa':padre,
    'mama':madre
    }},
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

  }
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
          <GridItem>
        <CustomInput
                      labelText="Nombre y Apellido"
                      id="nombre"
                     
                      inputProps={{
                        
                        onChange: e => setNombre(e.target.value)
                      }}
                    /> 
            <CustomInput
                      labelText="Dia"
                      id="dia"
                     
                      inputProps={{
                        
                        onChange: e => setDia(e.target.value)
                      }}
                    />      
           <CustomInput
                      labelText="Mes"
                      id="mes"
                     
                      inputProps={{
                        
                        onChange: e => setMes(e.target.value)
                      }}
                    />  
                    <CustomInput
                      labelText="Año"
                      id="anio"
                     
                      inputProps={{
                        
                        onChange: e => setAño(e.target.value)
                      }}
                    /> </GridItem><GridItem>
                    <CustomInput
                      labelText="Nombre apellido Padre"
                      id="padre"
                     
                      inputProps={{
                        
                        onChange: e => setPadre(e.target.value)
                      }}
                    /> 
                    <CustomInput
                      labelText="Nombre apellido Madre"
                      id="madre"
                      
                      inputProps={{
                        
                        onChange: e => setMadre(e.target.value)
                      }}
                    />          </GridItem>        
          </GridContainer>
          <GridContainer>
            <GridItem>
              <Button onClick={(e) =>handleClick(nombre,dia,mes,anio,padre,madre)} >Get</Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
