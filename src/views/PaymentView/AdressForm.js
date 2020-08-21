import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos de usuario
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} >
          <TextField
            required
            id="nombre"
            name="nombre"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="apellido"
            name="apellido"
            label="Apellido"
            fullWidth
            autoComplete="family-name"
          />
       
        <Grid item xs={12} >
          <TextField
            required
            id="city"
            name="city"
            label="Parroquia"
            fullWidth
            autoComplete="Parroquia"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField id="state" name="state" label="Ciudad" fullWidth />
        </Grid>
      
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="country"
            name="country"
            label="Pais"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}