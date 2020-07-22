import React from "react";
import ReactDOM from "react-dom";

import { items } from "./data";
import App from "./components/App";

const rootElement = document.getElementById("root");

ReactDOM.render(<App items={Object.values(items)} />, rootElement);
