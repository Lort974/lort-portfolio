export const SET_MODE = "SET_MODE";

export const setMode = (newMode) => {
  const currentMode = newMode === "dark-mode" ? "light-mode" : "dark-mode";
  const body = document.querySelector("body");
  return (dispatch) => {
    body.classList.remove(currentMode);
    body.classList.add(newMode);
    body.setAttribute("data-mode", newMode);
    return dispatch({ type: SET_MODE, payload: newMode });
  };
};
