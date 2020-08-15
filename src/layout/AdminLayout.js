import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AdminNavbar from "../components/AdminNavbar";
import AdminSideBar from "../components/AdminSideBar";


const DRAWER_WIDTH = 200;

const useStyles = makeStyles(theme => ({

  sidebar: {
    width: DRAWER_WIDTH,
  },
  sidebarPaper: {
    width: DRAWER_WIDTH
  },
  content: {
    padding: theme.spacing(3),
    marginTop: 50,
    marginLeft: DRAWER_WIDTH
  }
}));

export default (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AdminSideBar classes={{sidebar: classes.sidebar, sidebarPaper: classes.sidebarPaper}}/>
      <main className={classes.content}>
        <AdminNavbar user={props.user}/>
        {props.children}
      </main>
    </div>
  )
}