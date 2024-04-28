import { setLanguage, setMode, setTheme } from "../actions/settings.action";
import { useDispatch, useSelector } from "react-redux";
import { SunIcon, MoonIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const SettingsModal = ({ settingsPosition, handleCloseSettings }) => {
  const { t } = useTranslation("settings");
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.settingsReducer.mode);
  const theme = useSelector((state) => state.settingsReducer.theme);
  const language = useSelector((state) => state.settingsReducer.language);
  const handleMode = (e, newMode) => {
    dispatch(setMode(newMode));
  };
  const handleTheme = (e, newTheme) => {
    dispatch(setTheme(newTheme));
  };
  const { i18n } = useTranslation();
  const handleLanguage = (e, newLanguage) => {
    dispatch(setLanguage(newLanguage));
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const settings = document.querySelector(".settings-modal");
    if (settings) {
      settings.style.top = settingsPosition.top;
      settings.style.left = settingsPosition.left;
    }
  }, [settingsPosition]);
  return (
    <>
      <h2 className="settings-modal__title">
        {t("title")}
        <Cross1Icon onClick={handleCloseSettings} className="close-icon" />
      </h2>
      <div className="settings-modal__content">
        <div className="settings-modal__content__element">
          <p className="settings-modal__content__element__name">{t("mode")}</p>
          <div className="settings-modal__content__element__options">
            <button
              onClick={(e) => {
                handleMode(e, "light");
              }}
              className={
                "setting-option" + (mode === "light" ? " --current" : "")
              }
            >
              <SunIcon />
            </button>
            <button
              onClick={(e) => {
                handleMode(e, "dark");
              }}
              className={
                "setting-option" + (mode === "dark" ? " --current" : "")
              }
            >
              <MoonIcon />
            </button>
          </div>
        </div>
        <div className="settings-modal__content__element">
          <p className="settings-modal__content__element__name">{t("theme")}</p>
          <div className="settings-modal__content__element__options">
            <button
              onClick={(e) => {
                handleTheme(e, "ruby");
              }}
              className={
                "setting-option --ruby" + (theme === "ruby" ? " --current" : "")
              }
            ></button>
            <button
              onClick={(e) => {
                handleTheme(e, "indigo");
              }}
              className={
                "setting-option --indigo" +
                (theme === "indigo" ? " --current" : "")
              }
            ></button>
            <button
              onClick={(e) => {
                handleTheme(e, "jade");
              }}
              className={
                "setting-option --jade" + (theme === "jade" ? " --current" : "")
              }
            ></button>
            <button
              onClick={(e) => {
                handleTheme(e, "mint");
              }}
              className={
                "setting-option --mint" + (theme === "mint" ? " --current" : "")
              }
            ></button>
            <button
              onClick={(e) => {
                handleTheme(e, "amber");
              }}
              className={
                "setting-option --amber" +
                (theme === "amber" ? " --current" : "")
              }
            ></button>
            <button
              onClick={(e) => {
                handleTheme(e, "olive");
              }}
              className={
                "setting-option --olive" +
                (theme === "olive" ? " --current" : "")
              }
            ></button>
          </div>
        </div>
        <div className="settings-modal__content__element">
          <p className="settings-modal__content__element__name">
            {t("language")}
          </p>
          <div className="settings-modal__content__element__options">
            <button
              onClick={(e) => {
                handleLanguage(e, "en");
              }}
              className={
                "setting-option" + (language === "en" ? " --current" : "")
              }
            >
              <span>EN</span>
            </button>
            <button
              onClick={(e) => {
                handleLanguage(e, "fr");
              }}
              className={
                "setting-option" + (language === "fr" ? " --current" : "")
              }
            >
              <span>FR</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsModal;
