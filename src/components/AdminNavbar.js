import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {AccountCircle} from "@material-ui/icons";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navbar: {
    zIndex: theme.zIndex.drawer + 1
  },
  title: {
    flexGrow: 1,
  },
}));

export default (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const [openProfile, setOpenProfile] = React.useState(false);
  const {user} = props;

  const profileClick = ({target}) => {
    setAnchorEl(target);
    setOpenProfile(true);
  }

  const closeProfileActions = () => {
    setAnchorEl(null);
    setOpenProfile(false);
  }

  const profileActions = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      keepMounted
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={openProfile}
      onClose={closeProfileActions}
    >
      <MenuItem onClick={closeProfileActions}>Cambiar contraseña</MenuItem>
      <MenuItem onClick={closeProfileActions}>Cerrar sesión</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <Typography noWrap className={classes.title}>
            Administración de TRAVGO
          </Typography>
          <Tooltip title="Cuenta">
            <IconButton className={classes.menuButton} edge="end" aria-label="account of current user" aria-haspopup="true" onClick={profileClick}
                        color="inherit">
              <AccountCircle/>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      {profileActions}
    </div>
  );
}