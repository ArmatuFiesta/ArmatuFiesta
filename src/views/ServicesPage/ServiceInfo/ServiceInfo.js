import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import { cardTitle } from "assets/jss/material-kit-react.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Input, FormHelperText } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
const styles = {
  ...imagesStyles,
  cardTitle,
  textMuted: {
    color: "#6c757d"
  },
};

const useStyles = makeStyles(styles);


export default function ServicePage(props) {
{/**Este componente debe ser generico y variaria segun su tipo de producto */}
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return(
        <div>
        <GridContainer alignContent='stretch'  spacing={2}>
            <GridItem xs={6}>
                <Card>
            <img className={classes.imgCardTop} src="..." alt="Card-img-cap" />
            <CardBody>
                <h4 className={classes.cardTitle}>Servicio Ejemplo</h4>
                <p>Tipo: Comedor
Direccion: Quinta numero xx, Palos Grandes, Carcas
Contacto: 0414-xxxx-xxx
Ambiente: Elegante</p>
                <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p>
            </CardBody>
            </Card>
            </GridItem>
            <GridItem xs={4} justify='flex-end'>
            <div>
                <h6>Solicitar Presupuesto</h6>
            <FormControl>
                <InputLabel htmlFor="my-input">Nombre Completo</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                {/*<FormHelperText id="my-helper-text">Nombres y Apellidos</FormHelperText>*/}
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Correo Electronico</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                  {/*<FormHelperText id="my-helper-text">Nombres y Apellidos</FormHelperText>*/}
            </FormControl>
            <br/><br/>
            <p>Selecciona el tipo de evento: </p>
            <div>
            <br/><br/>
        <TextField
          id="outlined-textarea"
          label="Detalles del Evento"
          placeholder="Escribenos aca cualquier otro detalle!"
          multiline
          variant="outlined"
        />
    
      </div>
            
            </div>
            </GridItem>
        </GridContainer>
        

      </div>

    );
}