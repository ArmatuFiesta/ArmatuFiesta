import React  from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
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
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);




export default function ReportsPage(props) {
  const classes = useStyles();
  const [min1, setMin1] = React.useState(new Date('2014-08-18T21:11:54'));
  const [max1, setmax1]= React.useState(new Date('2014-08-18T21:11:54'));
  const [min2, setMin2] = React.useState(new Date('2014-08-18T21:11:54'));
  const [max2, setmax2]= React.useState(new Date('2014-08-18T21:11:54'));
  const [min3, setMin3] = React.useState(new Date('2014-08-18T21:11:54'));
  const [max3, setmax3]= React.useState(new Date('2014-08-18T21:11:54'));
  const [min4, setMin4] = React.useState(new Date('2014-08-18T21:11:54'));
  const [max4, setmax4]= React.useState(new Date('2014-08-18T21:11:54'));
 
  
  const { ...rest } = props;
  const handleClick = (min,max) =>{
    
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'terceros'}  ,
  'data':{
        "min": min,
        "max": max,
  
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
  const handleClick1 = () =>{
    
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'FiestaMes'} },
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
        link.setAttribute('download', 'FiestaMes.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    })
    .catch((error) => console.log(error));

  }
  const handleClick2 = (min,max) =>{
    
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'ingresos'}  ,
  'data':{
        "min": min,
        "max": max,
  
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
        link.setAttribute('download', 'ingresos.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    })
    .catch((error) => console.log(error));

  }
  const handleClick3 = (min,max) =>{
    
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'top-contrataciones'}  ,
  'data':{
        "min": min,
        "max": max,
  
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
        link.setAttribute('download', 'topContrataciones.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    })
    .catch((error) => console.log(error));

  }
  const handleClick4 = (min,max) =>{
    
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'ofertas'}  ,
  'data':{
        "min": min,
        "max": max,
  
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
      
      <div className={classNames(classes.main, classes.mainRaised)}>
      
        <div className={classes.container}>

        <GridContainer>
            <GridItem> espacio</GridItem>
        </GridContainer><GridContainer>
            <GridItem> espacio</GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem> espacio</GridItem>
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
            <GridItem> <label><h1>Reportes</h1> </label></GridItem>
        </GridContainer>
          <GridContainer>
          
              <GridItem>
                <Button color="primary" onClick={(e)=> handleClick1()} > Total de Eventos por mes  </Button>
              </GridItem>
              </GridContainer>  
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <GridContainer justify="space-around">
              <GridItem>
                <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="min1"
          label="Desde (minimo)"
          value={min1}
          onChange={e => setMin1(e)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /><KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        id="max1"
        label="hasta (maximo)"
        value={max1}
        onChange={e => setmax1(e)}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
        
              </GridItem>
              <GridItem>
                <Button color="primary" onClick={(e)=> handleClick(min1,max1)} > contrataciones a terceros  </Button>
                </GridItem>
              </GridContainer>  
              </MuiPickersUtilsProvider>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <GridContainer justify="space-around">
              <GridItem>
                <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="min2"
          label="Desde (minimo)"
          value={min2}
          onChange={e => setMin2(e)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /><KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        id="max2"
        label="hasta (maximo)"
        value={max2}
        onChange={e => setmax2(e)}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
        
              </GridItem>
              <GridItem>
                <Button color="primary" onClick={(e)=> handleClick2(min2,max2)} > Ingresos y Egresos  </Button>
              </GridItem>
              </GridContainer>  
              </MuiPickersUtilsProvider>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <GridContainer justify="space-around">
              <GridItem>
                <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="min3"
          label="Desde (minimo)"
          value={min3}
          onChange={e => setMin3(e)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /><KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        id="max3"
        label="hasta (maximo)"
        value={max3}
        onChange={e => setmax3(e)}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      /></GridItem>
              <GridItem>
                <Button color="primary" onClick={(e)=> handleClick3(min3,max3)} > Top 10 de servicios tercerizados contratados  </Button>
              </GridItem>
              </GridContainer> 
              </MuiPickersUtilsProvider>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <GridContainer justify="space-around">
              <GridItem>
                <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="min4"
          label="Desde (minimo)"
          value={min4}
          onChange={e => setMin4(e)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /><KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        id="max4"
        label="hasta (maximo)"
        value={max4}
        onChange={e => setmax4(e)}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      /></GridItem>
              
              <GridItem>
                <Button color="primary" onClick={(e)=> handleClick4(min4,max4)} > Descuentos ofrecidos y aplicados  </Button>
              </GridItem>
              </GridContainer> 
              </MuiPickersUtilsProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
}
