import React  from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
import DateFnsUtils from '@date-io/date-fns';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import { downloadFile } from 'react-file-downloader'
// @material-ui/icons

// core components

import Header from "components/Header/Header.js";
import MenuItem from '@material-ui/core/MenuItem';
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Axios from "axios";
import { defaultBoxShadow } from 'assets/jss/material-kit-react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { number } from 'prop-types';
import { getYear } from 'date-fns';


// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);



export default function LandingPage(props) {
  const classes = useStyles();
  const [agencia, setAgencia] = React.useState('0');
  const [costomin, setcostomin]= React.useState('0');
  const [costomax, setcostomax] = React.useState('0');
  const [personas, setpersonas] = React.useState('0');
  const [salidamin, setsalidamin] = React.useState(new Date("2020-12-20"));
  const [salidamax, setsalidamax] = React.useState(new Date("2020-12-20"));
  const [duracion, setduracion] = React.useState('0');
  const [html, setHTML]= React.useState('');


  const handlenombre = (event) => {
    setAgencia(event.target.value);
    
  };

  const htmlnuevo = (htmll)=>{
    setHTML(htmll.data);

  };


  const { ...rest } = props;
  const handleClick = (salidamin) =>{
    
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'rally_mapa','recipe':'chrome-pdf'}  ,
  'data':
  {
  "fecha": getYear(salidamin)
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
        link.setAttribute('download', 'catalogo.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    })
    .catch((error) => console.log(error));

  }
  const handleClick1 = (salidamin) =>{
    
  
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'rally_mapa'}  ,
  'data':
  {
  "fecha": getYear(salidamin)
    }},
    {
        responseType: 'text',
        headers: {
            'Content-Type': 'application/json',
            'Accept':'HTML'
            
            
        }
    })
    .then((res) => {
      const contentType = res.headers["content-type"];
      console.log(res.status);
      htmlnuevo(res); 
    })
    .catch((error) => console.log(error));
  
  }

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="TRAVGO"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
     
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <GridContainer>
            <GridItem> </GridItem>
        </GridContainer><GridContainer>
            <GridItem>espacio </GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem> espacio </GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem> espacio</GridItem>
        </GridContainer><GridContainer>
            <GridItem> espacio</GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem> espacio</GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem> <label><h1>Mapa</h1> </label></GridItem>
        </GridContainer>


        <List className={classes.list}>
        
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ListItem>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy"
          margin="normal"
          id="min1"
          label="año"
          value={salidamin}
          onChange={e => setsalidamin(e)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </ListItem>
        </MuiPickersUtilsProvider>
 </List>
                    
                   
                     

 
                       
         
          <GridContainer>
            <GridItem>
              <Button onClick={(e)=>handleClick(salidamin)} >Descargar</Button>
              
            </GridItem>
            <GridItem>
              <Button onClick={(e) =>handleClick1(salidamin)} >Ver</Button>
            </GridItem>
          </GridContainer>
          <div>
           
              <div dangerouslySetInnerHTML={{__html:html}}></div>
         
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
