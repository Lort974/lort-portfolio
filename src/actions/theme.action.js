export const SET_THEME = "SET_THEME";

export const setTheme = (newTheme) => {
  const currentTheme = newTheme === "dark-theme" ? "light-theme" : "dark-theme";
  const body = document.querySelector("body");
  return (dispatch) => {
    body.classList.remove(currentTheme);
    body.classList.add(newTheme);
    body.setAttribute("data-theme", newTheme);
    return dispatch({ type: SET_THEME, payload: newTheme });
  };
};
