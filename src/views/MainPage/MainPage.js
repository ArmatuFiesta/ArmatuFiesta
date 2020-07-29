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
import MiCuentaPage from "views/MiCuentaPage/MiCuentaPage.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);


export default function MainPage(props) {
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
                tabContent: (<ServicesPage/>),
            },
            {tabName:'Contrataciones',
                tabContent:(<ServicesPage/>)},
            {tabName:'Mi Cuenta',
                tabContent:(<MiCuentaPage/>)},
            ] }
            {...rest}
        />
    );
} 

