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
        <ListItem button>
          <ListItemText primary="Notarias"/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Jefaturas"/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Locales"/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Festejos"/>
        </ListItem>
        <ListItem button onClick={() => history.push('/admin/productos')}>
          <ListItemText primary="Productos" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Servicios"/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Proveedores"/>
        </ListItem>
      </List>
      <Divider/>
    </Drawer>
  );
}