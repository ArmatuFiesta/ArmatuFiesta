/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload,ChatBubble,PartyMode } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
            
            <Button
          href="/map"
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={<Link to={"/com"} className={classes.Link}> </Link>}
        >
          Mapa
        </Button>
        

      </ListItem>
      <ListItem className={classes.listItem}>
            
            <Button
          href="/services"
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={<Link to={"/com"} className={classes.Link}> </Link>}
        >
          Servicios
        </Button>
        

      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.blogspot.com"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
         { /*<PartyMode className={classes.icons} /> */} Blog
        </Button>
      </ListItem>
      {/*<ListItem className={classes.listItem}>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          id="instagram-twitter"
          title="Siguenos en twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Siguenos en facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="siguenos en instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
        */}
      <ListItem className={classes.listItem}>
      <Link to={"/login-page"} className={classes.link}>
                  <Button
                    className={classes.registerNavLink}
                    color="primary"
                    round
                  >
                    Iniciar Sesión
                  </Button>
              </Link>
      </ListItem>
    </List>
  );
}
