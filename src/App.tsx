import React from "react";

import { useTranslation } from "react-i18next";
import "./App.css"

const App = () => {
  const { t } = useTranslation();


  return (
    <div className="center-align">
      <div className="orange animate">
        {t("welcome")}
        <h1>Under Development</h1>
        <p>{new Date().toLocaleString()}</p>
      </div>
    </div>
  )
}

export default App
