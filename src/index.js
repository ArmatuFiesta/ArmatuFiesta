import React from "react";
import ReactDOM from "react-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";
import App from "./App";
import {ContextProvider} from "./Context";

// Dejemos que el App sea el punto de entrada. Si se tiene ahí, se pueden realizar procesos que no se pueden
// desde el index.js
ReactDOM.render(
  <ContextProvider>
    <App/>
  </ContextProvider>, document.getElementById("root"));
