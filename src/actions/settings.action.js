export const SET_MODE = "SET_MODE";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setMode = (newMode) => {
  const currentMode = newMode === "dark" ? "light" : "dark";
  const body = document.querySelector("body");
  let currentTheme = body.getAttribute("data-theme");
  if (!currentTheme) {
    currentTheme = "mint";
  }
  return (dispatch) => {
    body.classList.remove(`${currentMode}-${currentTheme}`);
    body.classList.add(`${newMode}-${currentTheme}`);
    body.setAttribute("data-mode", newMode);
    return dispatch({ type: SET_MODE, payload: newMode });
  };
};

export const setTheme = (newTheme) => {
  const body = document.querySelector("body");
  const currentMode = body.getAttribute("data-mode");
  let currentTheme = body.getAttribute("data-theme");
  if (!currentTheme) {
    currentTheme = "mint";
  }
  return (dispatch) => {
    body.classList.remove(`${currentMode}-${currentTheme}`);
    body.classList.add(`${currentMode}-${newTheme}`);
    body.setAttribute("data-theme", newTheme);
    return dispatch({ type: SET_THEME, payload: newTheme });
  };
};

export const setLanguage = (newLanguage) => {
  const body = document.querySelector("body");
  let currentLanguage = body.getAttribute("data-language");
  if (!currentLanguage) {
    currentLanguage = "english";
  }
  return (dispatch) => {
    body.setAttribute("data-language", newLanguage);
    return dispatch({ type: SET_LANGUAGE, payload: newLanguage });
  };
};
