import React, {useRef, useEffect} from "react";
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
import axios from 'axios';
import "views/MapPage/components/map.css";

//maps components
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import * as datos from "views/MapPage/components/placeholder_data.json";
import * as estados from "./estados.json";



import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { SmsOutlined } from "@material-ui/icons";




const useStyles = makeStyles(styles);

export default function MapPage(props) {

  const [activePopup, setActivePopup] = React.useState(null);
  const mapref = React.useRef();

  const [data, setData] = React.useState([]);
  
  const fetchNotarias = async page => {
    const response = await axios.get(
      `http://localhost:8000/api/notarias/`,
    );
    setData(response.data);
    console.log(response.data);
  };

   function handleFlyto(){
    const {current = {}} = mapref;
    const {leafletElement: mapa}= current;
    mapa.flyTo(ltln,zooom)
  }
  
  useEffect(() => {
    fetchNotarias(1);
  
  }, []);

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
        {data.map( notaria => (
           <Marker
           key={notaria.id}
           position={[
            notaria.ubicacion_geografica.latitud,
            notaria.ubicacion_geografica.longitud
           ]}
           onClick={() => {
            setActivePopup(notaria);


           }}
         />

        ))}
       {activePopup && (
        <Popup
          position={[
            activePopup.ubicacion_geografica.latitud,
            activePopup.ubicacion_geografica.longitud
          ]}
          onClose={() => {
            setActivePopup(null);
          }}
        >
          <div>
            <h2>{activePopup.nombre_notaria}</h2>
            
          </div>
        </Popup>
      )}  




        </Map>
        </div>
      </div>
    
  );
 
}

