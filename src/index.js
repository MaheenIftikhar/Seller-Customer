import React from "react";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store, { Persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

window.store = store;

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={Persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
