import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  previewContainer: {
    width: "100%",
    height: 500,
  },
  previewImage: {
    width: "100%",
    height: "auto",
    display: "block"
  },
  previewPlaceholder: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "dashed 4px lightgray"
  }
}));
export default (props) => {
  const classes = useStyles();
  const {src} = props;

  return (
    <div className={classes.previewContainer}>
      {src !== null ? <img className={classes.previewImage} src={src}/> :
        <p className={classes.previewPlaceholder}>Preview de la imagen</p>}
    </div>
  );
}