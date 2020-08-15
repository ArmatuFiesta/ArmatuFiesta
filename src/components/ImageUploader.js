import React from "react";
import {CloudUpload} from "@material-ui/icons";
import Button from "./CustomButtons/Button";

export default (props) => {
  const {onChange, label} = props;
  const uploader = React.useRef(null);
  const [text, setText] = React.useState(label);
  const handler = ({target: {files: [file]}}) => {
    setText(file ? file.name : label);
    onChange(file);
  }

  const openUploadDialog = () => uploader.current.click();
  return (
    <>
      <Button variant="contained" align="center" color="default" startIcon={<CloudUpload/>}
        onClick={openUploadDialog}>
        {text}
      </Button>
      <input type="file" style={{display: "none"}} onChange={(ev) => handler(ev)} ref={uploader}/>
    </>
  );
}