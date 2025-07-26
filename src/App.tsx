import { useTranslation } from "react-i18next";
import "./App.css"

const App = () => {
  const { t } = useTranslation();
  return (
    <div className="center-align">
      <div className="animate text-2xl ">
        {t("welcome")}
      </div>
    </div>
  )
}

export default App
