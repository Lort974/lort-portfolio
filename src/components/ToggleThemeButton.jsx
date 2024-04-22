import { setTheme } from "../actions/theme.action";
import { useDispatch } from "react-redux";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const ToggleThemeButton = () => {
  const dispatch = useDispatch();
  const [currentTheme, setCurrentTheme] = useState(
    document.querySelector("body").getAttribute("data-theme")
  );

  const handleClick = (e) => {
    const newTheme =
      currentTheme === "dark-theme" ? "light-theme" : "dark-theme";
    setCurrentTheme(newTheme);
    dispatch(setTheme(newTheme));
  };

  return (
    <>
      <button className="toggle-button" onClick={handleClick}>
        {currentTheme === "light-theme" ? <SunIcon /> : <MoonIcon />}
      </button>
    </>
  );
};

export default ToggleThemeButton;
