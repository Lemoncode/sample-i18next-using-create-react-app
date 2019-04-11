import React, { Component, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./i18n";
import { useTranslation } from "react-i18next";

export const App = () => {
  const { t, i18n } = useTranslation();

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{t("mytest")}</p>
        </header>
      </div>
  );
};

export default App;
