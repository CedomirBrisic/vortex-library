import React from "react";
import ReactDOM from "react-dom/client";
import AppStore from "./AppStore";
import App from "./App";


const element = <React.StrictMode>
  <AppStore>
    <App />
  </AppStore>
</React.StrictMode>
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(element);