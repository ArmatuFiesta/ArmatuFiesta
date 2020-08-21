import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import history from "../services/history";

export default (props) => {
  const {classes} = props;
  return (
    <Drawer
      className={classes.sidebar}
      variant="permanent"
      classes={{
        paper: classes.sidebarPaper
      }}
      anchor="left">
      <Toolbar/>
      <List>
        <ListItem button onClick={() => history.push('/admin/notarias')}>
          <ListItemText primary="Notarias"/>
        </ListItem>
        <ListItem button onClick={() => history.push('/admin/jefaturas')}>
          <ListItemText primary="Jefaturas"/>
        </ListItem>
        <ListItem button onClick={() => history.push('/admin/establecimientos')}>
          <ListItemText primary="Establecimientos"/>
        </ListItem>
        <ListItem button onClick={() => history.push('/admin/festejos')}>
          <ListItemText primary="Festejos"/>
        </ListItem>
        <ListItem button onClick={() => history.push('/admin/productos')}>
          <ListItemText primary="Productos" />
        </ListItem>
        <ListItem button onClick={() => history.push('/admin/servicios')}>
          <ListItemText primary="Servicios"/>
        </ListItem>
        <ListItem button onClick={() => history.push('/admin/proveedores')}>
          <ListItemText primary="Proveedores"/>
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem button onClick={() => history.push('/admin/publicaciones')}>
          <ListItemText primary="Publicaciones" />
        </ListItem>
      </List>
    </Drawer>
  );
}