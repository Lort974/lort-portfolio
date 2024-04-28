import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./style/style.css";

//Redux :
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { setLanguage, setMode, setTheme } from "./actions/settings.action";

// import i18n (needs to be bundled ;))
import "./i18n";

const store = configureStore({
  reducer: rootReducer,
  devtools: true,
});

const newMode = "dark";
const newTheme = "mint";
const newLanguage = "en";

store.dispatch(setMode(newMode));
store.dispatch(setTheme(newTheme));
store.dispatch(setLanguage(newLanguage));

// document.querySelector("body").classList.add("dark-theme");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
