import { useTranslation } from "react-i18next";
import "./App.css"

const App = () => {
  const { t } = useTranslation();


  return (
    <div className="center-align">
      <div className="orange animate">
        <h1 className="text-white">Portfolio VN</h1>
        <h2 className="text-white">Version 1.0</h2>
        {t("welcome")}
      </div>
    </div>
  )
}

export default App
