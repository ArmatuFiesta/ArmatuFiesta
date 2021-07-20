import React  from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
import DateFnsUtils from '@date-io/date-fns';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import { downloadFile } from 'react-file-downloader'
// @material-ui/icons

// core components
import { Link } from "react-router-dom";

import Header from "components/Header/Header.js";
import MenuItem from '@material-ui/core/MenuItem';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Axios from "axios";



// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);



export default function LandingPage(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [agencia, setAgencia] = React.useState('0');
  const [costomin, setcostomin]= React.useState('0');
  const [costomax, setcostomax] = React.useState('0');
  const [personas, setpersonas] = React.useState('0');
  const [salidamin, setsalidamin] = React.useState(new Date("2020-12-20"));
  const [salidamax, setsalidamax] = React.useState(new Date("2020-12-20"));
  const [duracion, setduracion] = React.useState('0');
  const [html, setHTML]= React.useState('');
  const [Loading, setLoading]= React.useState(true);

  const handlenombre = (event) => {
    setAgencia(event.target.value);
    
  };

  const htmlnuevo = (htmll)=>{
    setHTML(htmll.data);

  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const { ...rest } = props;

  const handleClick1 = (agencia) =>{
 
    Axios.post("http://localhost:5488/api/report",
    {'template':{'name':'Eventos'}  ,
  'data':
  {"idAgencia": agencia,
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
        brand="star subastas"
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
            <GridContainer>
            <GridItem>espacio </GridItem>
        </GridContainer><GridContainer>
            <GridItem>espacio </GridItem>
        </GridContainer><GridContainer>
            <GridItem>espacio </GridItem>
        </GridContainer><GridContainer>
            <GridItem>espacio </GridItem>
        </GridContainer><GridContainer>
            <GridItem>espacio </GridItem>
        </GridContainer><GridContainer>
            <GridItem>espacio </GridItem>
        </GridContainer><GridContainer>
            <GridItem>espacio </GridItem>
        </GridContainer><GridContainer>
            <GridItem>espacio </GridItem>
        </GridContainer>
            <GridItem> espacio </GridItem>
            <GridItem> espacio </GridItem><GridItem> espacio </GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem> {'  '}</GridItem>
            <GridItem> {'  '}</GridItem>
            <GridItem> {'  '}</GridItem>
            <GridItem> {'  '}</GridItem>
        </GridContainer>
        <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <FormControl className={classes.formControl}>
          <Select
          value={agencia}
          onChange={handlenombre}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
          
        >
          
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>

        </Select>
        <FormHelperText>ID Organizador  </FormHelperText>
            </FormControl>
            </ListItem>
            </List>
            <GridContainer>      
                
                <div dangerouslySetInnerHTML={{__html:html}}></div>
                
                </GridContainer>  
            <GridContainer>
            <GridItem>
              <Button ><Link to={"newEvent"} className={classes.Link}>Crear Nuevo</Link></Button>
            </GridItem>
            <GridItem>
              <Button onClick={(e) =>handleClick1(agencia,costomin,costomax,personas,salidamin,salidamax,duracion)} >Ver</Button>
            </GridItem>
          </GridContainer>
          <div>
            
          </div>


            </div>

    </div>
    

</div>




  );
}
