import { setMode } from "../actions/settings.action";
import { useDispatch, useSelector } from "react-redux";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const SettingsModal = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.settingsReducer.mode);
  const handleMode = (e, newMode) => {
    dispatch(setMode(newMode));
  };
  return (
    <>
      <h2 className="settings-modal__title">Settings</h2>
      <div className="settings-modal__content">
        <div className="settings-modal__content__element">
          <p className="settings-modal__content__element__name">Color mode</p>
          <SunIcon
            onClick={(e) => {
              handleMode(e, "light-mode");
            }}
            className={
              "setting-option" + (mode === "light-mode" ? " --current" : "")
            }
          />
          <MoonIcon
            onClick={(e) => {
              handleMode(e, "dark-mode");
            }}
            className={
              "setting-option" + (mode === "dark-mode" ? " --current" : "")
            }
          />
        </div>
      </div>
    </>
  );
};

export default SettingsModal;
