import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
const React = require("react");
const ReactDOM = require("react-dom");

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
