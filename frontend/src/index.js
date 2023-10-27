import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";
import PWAPrompt from 'react-ios-pwa-prompt'

ReactDOM.render(
  <Provider store={Store}>
    <App /><PWAPrompt copyTitle="AutoEssentials "/>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
