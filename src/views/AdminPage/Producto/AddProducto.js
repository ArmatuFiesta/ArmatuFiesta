import React, {useEffect, useRef} from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import httpClient from "../../../core/http-client";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import ImageUploader from "../../../components/ImageUploader";
import Typography from "@material-ui/core/Typography";
import ImagePreview from "../../../components/ImagePreview";


const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 150
  }
}));

export default (props) => {
  const classes = useStyles();
  const [proveedores, setProveedores] = React.useState();
  const [categorias, setCategorias] = React.useState([]);
  const [previewSrc, setPreviewSrc] = React.useState(null);
  const [producto, setProducto] = React.useState({
    nombre: '',
    categoria: null,
    precio: 0,
    costo: 0,
    proveedor: null,
    inventario: 20,
    foto: null
  });

  useEffect(() => {
    Promise.all([
      httpClient.get('categorias'),
      httpClient.get('proveedores')
    ]).then(([{data: cats}, {data: provs}]) => {
      setCategorias(cats);
      setProveedores(provs);
    });
  }, []);

  const fileSelectionHandler = file => {
    setProducto({...producto, foto: file});
    if (!!file) {
      const previewURL = URL.createObjectURL(file);
      setPreviewSrc(previewURL);
    } else
      setPreviewSrc(null);
  }

  const valueChange = (key, value) => {
    setProducto({...producto, [key]: value});
  }

  const submit = () => {
    const {nombre, precio, costo, inventario, proveedor, categoria} = producto;
    const data = {nombre, precio, costo, inventario, proveedor_id: proveedor.id, categoria_id: categoria.id};
    httpClient.post('productos/', data)
      .then(({data: prod}) => {
        const formData = new FormData();
        formData.set('ruta', producto.foto, producto.foto.name);
        formData.set('producto_id', prod.id);
        httpClient.post('fotos/', formData, {
          params: { tipo: 'producto'}
        })
          .then(response => {
            console.log("subido");
          })
      })
  }

  const proveedoresSelect = (
    <Select autoWidth id="proveedor_producto" onChange={(e) => valueChange('proveedor', e.target.value)}
            label={<label>Seleccione un proveedor</label>}>
      {proveedores && proveedores.map(p => {
        return (
          <MenuItem key={p.id} value={p}>{p.nombre}</MenuItem>
        );
      })}
    </Select>
  );

  const selectCategoria = (selection) => {
    valueChange('categoria', selection);
  }

  const categoriasSelect = (
    <Select autoWidth id="categoria_producto" value={producto.categoria} onChange={e => selectCategoria(e.target.value)}>
      {categorias && categorias.map(c => {
        return (
          <MenuItem key={c.id} value={c}>{c.nombre}</MenuItem>
        );
      })}
    </Select>
  )

  return (
    <form>
      <Grid container spacing={2} justify="center">
        <Grid item xs={6}>
          <Typography variant="h5">
            <h5>Datos generales</h5>
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <FormControl>
                <InputLabel htmlFor="nombre_producto">
                  Nombre del producto
                </InputLabel>
                <Input onChange={(ev) => valueChange('nombre', ev.target.value)} id="nombre_producto" type="text"
                       aria-describedby="my-helper-text"/>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="proveedor_producto">Proveedor</InputLabel>
                {proveedoresSelect}
              </FormControl>
            </Grid>
          </Grid>
          <Typography variant="h5">
            <h5>Datos administrativos</h5>
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <FormControl>
                <InputLabel htmlFor="precio_producto">
                  Precio
                </InputLabel>
                <Input value={producto.precio} type="number" onChange={(ev) => valueChange('precio', ev.target.value)}
                       id="precio_producto"/>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="costo_producto">Costo</InputLabel>
                <Input value={producto.costo} type="number" onChange={(ev) => valueChange('costo', ev.target.value)}
                       id="costo_producto"/>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="inventario_producto">Inventario</InputLabel>
                <Input value={producto.inventario} type="number"
                       onChange={(ev) => valueChange('inventario', ev.target.value)}/>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              <h5>Datos de tipificación</h5>
            </Typography>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="categoria_producto">Categoria</InputLabel>
              {categoriasSelect}
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <ImagePreview src={previewSrc}/>
        </Grid>
      </Grid>
      <ImageUploader label={"Agregar foto"} onChange={fileSelectionHandler}/>
      <Button onClick={() => submit()}>Enviar</Button>
    </form>
  );

}