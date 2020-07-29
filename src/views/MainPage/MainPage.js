import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import CustomTabs from "components/CustomTabs/CustomTabs";
import ServicesPage from "views/ServicesPage/ServicesPage.js";
import ServiceInfo from "views/ServicesPage/ServiceInfo/ServiceInfo.js";
import MiCuentaPage from "views/MiCuentaPage/MiCuentaPage.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);


export default function MainPage(props) {
    const serviceCategories=["CATERING","SALONES DE FIESTA","DECORACION",
    "CORTE Y COSTURA"," OBSEQUIOS Y TARJETERIA","MATRIMONIOS"];
    const contratacionesCategories=["MUSICA", "SHOWS","SEGURIDAD",
"PROTOCOLO","FOTOGRAFIA","BAILES"];
    const classes = useStyles();
    const { ...rest } = props;
    return(
        <CustomTabs headerColor="primary" 
            title="ArmaTuFiesta"
            tabs={[
                {  tabName:"Blog",
                tabContent:(
                    <p className={classes.textCenter}>
                      Aqui iria el Blog acerca de los tips y esa vaina
                    </p>
                  ),
                },
            {  tabName:"Servicios",
                tabContent: (<ServicesPage menuCategories={serviceCategories}/>),
            },
            {tabName:'Contrataciones',
                tabContent:(<ServicesPage menuCategories={contratacionesCategories}/>)},
            {tabName:'Mi Cuenta',
                tabContent:(<MiCuentaPage/>)},
                {tabName:'EjemploProducto',
                tabContent:(<ServiceInfo/>)},
            ] }
            {...rest}
        />
    );
} 

