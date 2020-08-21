import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import httpClient from "../../../core/http-client";

const useStyles = makeStyles(theme => ({
  formControl: {
    width: "100%"
  }
}));

export default () => {
  const classes = useStyles();
  const [publicacion, setPublicacion] = React.useState({
    contenido: '',
    precio: '',
  });

  const valueChange = (key, value) => {
    setPublicacion({...publicacion, [key]: value});
  }

  const submit = () => {
    httpClient.post('/publicaciones/', publicacion)
      .then(res => console.log("subido: ", res.data));
  }

  return (
    <form>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor="contenido_publicacion">
              Contenido
            </InputLabel>
            <Input value={publicacion.nombre} onChange={(ev) => valueChange('nombre', ev.target.value)}
                   id="nombre_servicio" type="text"/>
          </FormControl>
        </Grid>
      </Grid>
      <Button onClick={() => submit()}>Enviar</Button>
    </form>
  );
}