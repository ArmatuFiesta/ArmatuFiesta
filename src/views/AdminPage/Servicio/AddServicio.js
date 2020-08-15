import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
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
  const [servicio, setServicio] = React.useState({
    nombre: '',
    costo: '',
    precio: '',
    activo: true,
    tercerizado: false,
    habilita_agenda: false
  });

  const valueChange = (key, value) => {
    setServicio({...servicio, [key]: value});
  }

  const submit = () => {
    httpClient.post('/servicios/', servicio)
      .then(res => console.log("subido: ", res.data));
  }

  return (
    <form>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4}>
              <FormControl>
                <InputLabel htmlFor="nombre_servicio">
                  Nombre del servicio
                </InputLabel>
                <Input value={servicio.nombre} onChange={(ev) => valueChange('nombre', ev.target.value)}
                       id="nombre_servicio" type="text"/>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="costo_servicio">Costo</InputLabel>
                <Input value={servicio.costo} onChange={ev => valueChange('costo', ev.target.value)} type="number"
                       id="costo_servicio"/>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="precio_servicio">Precio</InputLabel>
                <Input value={servicio.precio} onChange={ev => valueChange('precio', ev.target.value)} type="number"
                       id="precio_servicio"/>
              </FormControl>
            </Grid>
            <Grid item={4}>
              <FormControlLabel
                control={<Checkbox checked={servicio.activo} onChange={e => valueChange('activo', e.target.checked)}
                                   name="activo_servicio"/>}
                label="Activo"
              />
            </Grid>
            <Grid item={4}>
              <FormControlLabel
                control={<Checkbox checked={servicio.tercerizado} onChange={e => valueChange('tercerizado', e.target.checked)}
                                   name="tercerizado_servicio"/>}
                label="Tercerizado"
              />
            </Grid>
            <Grid item={4}>
              <FormControlLabel
                control={<Checkbox checked={servicio.habilita_agenda} onChange={e => valueChange('habilita_agenda', e.target.checked)}
                                   name="habilita_agenda_servicio"/>}
                label="Habilita agenda"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Button onClick={() => submit()}>Enviar</Button>
    </form>
  );
}