import React, {useRef} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
// @material forms 

import {Map,Marker,Popup,TileLayer}from "react-leaflet";

import "views/MapPage/components/map.css";

//maps components
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import * as datos from "views/MapPage/components/placeholder_data.json";
import * as estados from "./estados.json";
import useSwr from "swr"
//SWR lo voy a usar para fetch la data de la bd


import styles from "assets/jss/material-kit-react/views/landingPage.js";

const fetcher =(...args) => fetch(...args).then(response => response.json());
//este fetcher es para agarrar datos de la bd cuando este lista


const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const [activePopup, setActivePopup] = React.useState(null);
  const mapref = React.useRef();
  
   function handleFlyto(){
    const {current = {}} = mapref;
    const {leafletElement: mapa}= current;
    mapa.flyTo(ltln,zooom)
  }
  
  const classes = useStyles();
  const { ...rest } = props;
  var lat = 10.48801;
  var lng = -66.87919;
  var zooom = 6;
  var ltln = [28.3852,-81.5639];
  const [estado, setEstado] = React.useState('');
  const handleChange = (event) => {
    setEstado(event.target.value);
    ltln = event.target.value;
    zooom=10;
    handleFlyto();
  };


  return (
    <div>
      <div>
      <Header
        absolute
        color="white"
        brand="Arma Tu Fiesta"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      </div>
      <div className="sidebar" >
      <h2>AA</h2>
        <div className="list"></div>
      </div>
      <div >
        <FormControl className={classes.formControl}>
        <InputLabel shrink id="select-estados">
          Estado
        </InputLabel>
        <Select
          labelId="select-estados"
          id="select-estados"
          value={estado}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
           {estados.features.map((Nombre) => (
            <MenuItem key={Nombre.properties.ID} value={Nombre.geometry.coordinates} >
              {Nombre.properties.NOMBRE}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Selecciona el estado a buscar la notaria</FormHelperText>
      </FormControl>
        <div >
        <Map ref={mapref} center={[lat,lng]} zoom={zooom} >
        
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {datos.features.map( notarias => (
           <Marker
           key={notarias.properties.PARK_ID}
           position={[
            notarias.geometry.coordinates[0],
            notarias.geometry.coordinates[1]
           ]}
           onClick={() => {
            setActivePopup(notarias);
            
            
           }}
         />

        ))}
       {activePopup && (
        <Popup
          position={[
            activePopup.geometry.coordinates[0],
            activePopup.geometry.coordinates[1]
          ]}
          onClose={() => {
            setActivePopup(null);
          }}
        >
          <div>
            <h2>{activePopup.properties.NAME}</h2>
            <p>{activePopup.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      )}  




        </Map>
        </div>
      </div>
      <Footer />
    </div>
  );
 
}

