import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./components/App";
import serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker();
console.log(serviceWorker());
