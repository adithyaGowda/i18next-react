import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import LanguageSelector from "./components/language-selector";

function App() {
  const { t } = useTranslation();

  // const { line1, line2 } = t("description", { by: "Libertarian" });
  const { line1, line2 } = t("description");

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      {/* <p>{line1}</p> */}
      <p>
        <Trans
          // i18nKey={"description.line1"}
          i18nKey={line1}
          values={{
            by: "Libertarian",
          }}
          components={{ 1: <b /> }}
        />
      </p>
      <span>{line2}</span>
    </div>
  );
}

export default App;
