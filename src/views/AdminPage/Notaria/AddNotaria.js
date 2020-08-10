import React, {useEffect} from "react";
import {Card, CardHeader, Select, TextField, MenuItem, FormControl, InputLabel} from "@material-ui/core";
import CardBody from "../../../components/Card/CardBody";
import {httpClient as axios} from "../../../core/http-client";
import CardFooter from "../../../components/Card/CardFooter";
import Button from "../../../assets/shared/Button";


export default (props) => {
  const [estados, setEstados] = React.useState(props.estados);
  const [municipios, setMunicipios] = React.useState([]);
  const [parroquias, setParroquias] = React.useState([]);
  const [estado, setEstado] = React.useState(null);
  const [municipio, setMunicipio] = React.useState(null);
  const [parroquia, setParroquia] = React.useState(null);

  useEffect(() => {
    axios.get('/lugares/', {
      params: {
        tipo: "ESTADO"
      }
    }).then(({data}) => setEstados(data));
  }, []);

  const estadoSelected = (estadoId) => {
    setMunicipios(estados.find(e => e.id === estadoId).lugares);
    setMunicipio(null);
    setParroquias([]);
    setParroquia(null);
    setEstado(estadoId);
  }
  const municipioSelected = (municipioId) => {
    setParroquias(municipios.find(m => m.id === municipioId).lugares);
    setParroquia(null);
    setMunicipio(municipioId);
  }
  const parroquiaSelected = (parroquiaId) => {
    setParroquia(parroquiaId);
  }


  return (
    <Card raised={false}>
      <CardHeader title="Añadir Notaría" component="div"/>
      <CardBody>
        <form autoComplete="off">
          <FormControl style={{minWidth: 100}}>
            <TextField autoComplete="false" label="Nombre" name="nombre" required />
          </FormControl>
          <FormControl>
            <InputLabel id="estado-label">Estado</InputLabel>
            <Select style={{minWidth: 100}} labelId="estado-label" value={estado} disabled={estados.length === 0} onChange={event => estadoSelected(event.target.value)}>
              {estados.map(e => (<MenuItem value={e.id} key={e.id}>{e.nombre}</MenuItem>))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="municipio-label">Municipio</InputLabel>
            <Select style={{minWidth: 100}} labelId="municipio-label" value={municipio} disabled={null === estado} onChange={event => municipioSelected(event.target.value)}>
              {municipios.map(m => (<MenuItem value={m.id} key={m.id}>{m.nombre}</MenuItem>))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="parroquia-label">Parroquia</InputLabel>
            <Select style={{minWidth: 100}} labelId="parroquia-label" value={parroquia} disabled={null === municipio} onChange={event => parroquiaSelected(event.target.value)}>
              {parroquias.map(p => (<MenuItem value={p.id} key={p.id}>{p.nombre}</MenuItem>))}
            </Select>
          </FormControl>
        </form>
      </CardBody>
      <CardFooter>
        <Button type="submit">Guardar</Button>
      </CardFooter>
    </Card>
  );
}