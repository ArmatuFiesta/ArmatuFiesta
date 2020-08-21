import React, {useEffect} from "react";
import {Select, MenuItem, FormControl, InputLabel} from "@material-ui/core";
import httpClient, {httpClient as axios} from "../../../core/http-client";
import Button from "../../../assets/shared/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import ImagePreview from "../../../components/ImagePreview";
import ImageUploader from "../../../components/ImageUploader";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  formControl: {
    width: "100%"
  }
}));

export default (props) => {
  const classes = useStyles();
  const [estados, setEstados] = React.useState([]);
  const [municipios, setMunicipios] = React.useState([]);
  const [parroquias, setParroquias] = React.useState([]);
  const [notaria, setNotaria] = React.useState({
    nombre: '',
    estado: null,
    municipio: null,
    parroquia: null,
    ubicacion_geografica: {
      latitud: 0,
      longitud: 0
    },
    foto: null,
    lugar_id: null
  });
  const [previewSrc, setPreviewSrc] = React.useState(null);

  useEffect(() => {
    console.log("Primer useEffect");
    axios.get('/lugares/', {
      params: {
        tipo: "ESTADO"
      }
    }).then(({data}) => setEstados(data));
  }, []);

  useEffect(() => {
    console.log("Segundo useEffect");
    setNotaria({...notaria, lugar_id: resolveLugar(notaria)} );
  }, [notaria.estado, notaria.municipio, notaria.parroquia]);

  const estadoSelected = (estado) => {
    setMunicipios(estado.lugares);
    setNotaria({...notaria, estado, municipio: null, parroquia: null});
    setParroquias([]);
  }
  const municipioSelected = (municipio) => {
    setParroquias(municipio.lugares);
    setNotaria({...notaria, municipio, parroquia: null});
  }
  const parroquiaSelected = (parroquia) => {
    setNotaria({...notaria, parroquia});
  }

  const resolveLugar = (notaria) => {
    if (null !== notaria.parroquia) {
      return notaria.parroquia;
    }

    if (null !== notaria.municipio) {
      return notaria.municipio;
    }

    if (null !== notaria.estado) {
      return notaria.estado;
    }

    return null;
  }

  const fileSelectionHandler = file => {
    setNotaria({...notaria, foto: file});
    if (!!file) {
      const src = URL.createObjectURL(file);
      setPreviewSrc(src);
    } else {
      setPreviewSrc(null);
    }
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(notaria);
    const {lugar_id, ubicacion_geografica, nombre, foto} = notaria;
    const data = {ubicacion_geografica, nombre, lugar_id: lugar_id.id};
    httpClient.post('/notarias/', data)
      .then(({data: not}) => {
        const formData = new FormData();
        formData.set('ruta', notaria.foto, notaria.foto.name);
        formData.set('notaria_id', not.id);
        httpClient.post('/fotos/', formData, {
          params: { tipo: 'notaria' }
        })
          .then(console.log("subido"));
      })
  }


  return (
    <form>
      <Grid container spacing={2} justify="center">
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5">
                <h5>Datos generales</h5>
              </Typography>
              <FormControl>
                <InputLabel htmlFor="nombre_notaria">
                  Nombre de la notaría
                </InputLabel>
                <Input onChange={(ev) => {setNotaria({...notaria, nombre: ev.target.value})}} id="nombre_notaria" type="text"/>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h5">
                <h5>Dirección</h5>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControl disabled={estados.length === 0} className={classes.formControl}>
                <InputLabel htmlFor="estado_notaria">
                  Estado
                </InputLabel>
                <Select value={notaria.estado} type="text" onChange={ev => estadoSelected(ev.target.value)}
                        id="estado_notaria">
                  {estados.map(e => (
                    <MenuItem key={e.id} value={e}>{e.nombre}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl disabled={municipios.length === 0} className={classes.formControl}>
                <InputLabel htmlFor="municipio_notaria">Municipio</InputLabel>
                <Select value={notaria.municipio} type="text" onChange={ev => municipioSelected(ev.target.value)}
                       id="municipio_notaria">
                  {municipios.map(m => (
                    <MenuItem key={m.id} value={m}>{m.nombre}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl disabled={parroquias.length === 0} className={classes.formControl}>
                <InputLabel htmlFor="parroquia_notaria">Parroquia</InputLabel>
                <Select value={notaria.parroquia} id="parroquia_notaria" type="text"
                       onChange={ev => parroquiaSelected(ev.target.value)}>
                  {parroquias.map(p => (
                    <MenuItem key={p.id} value={p}>{p.nombre}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h5">
                <h5>Detalles de ubicación</h5>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="latitud_notaria">Latidud</InputLabel>
                <Input type="number" id="latitud_notaria" value={notaria.ubicacion_geografica.latitud}
                onChange={e => setNotaria({...notaria,
                  ubicacion_geografica: {
                  ...(notaria.ubicacion_geografica), latitud: Number(e.target.value)
                  }})}/>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="longitud_notaria">Longitud</InputLabel>
                <Input type="number" id="longitud_notaria" value={notaria.ubicacion_geografica.longitud}
                onChange={e => setNotaria({...notaria,
                  ubicacion_geografica: {
                  ...(notaria.ubicacion_geografica), longitud: Number(e.target.value)
                  }})}/>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <ImagePreview src={previewSrc}/>
        </Grid>
      </Grid>
      <ImageUploader label={"Agregar foto"} onChange={fileSelectionHandler}/>
      <Button onClick={(e) => submit(e)}>Enviar</Button>
    </form>
  );
}