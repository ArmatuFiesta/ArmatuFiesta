import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import {Map,Marker,Popup,TileLayer}from "react-leaflet";
import {Icon, tileLayer} from "leaflet";
import "./map.css";
//maps components
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import * as datos from "./placeholder_data.json";
import useSwr from "swr"
//SWR lo voy a usar para fetch la data de la bd


import styles from "assets/jss/material-kit-react/views/landingPage.js";

const fetcher =(...args) => fetch(...args).then(response => response.json());
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const [activePopup, setActivePopup] = React.useState(null);
  const classes = useStyles();
  const { ...rest } = props;
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
      <div className={classNames(classes.main, classes.main)}>
        <div className={classes.container}>
        <Map center={[10.48801,-66.87919]} zoom={8}>
        
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
