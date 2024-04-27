import { SET_MODE } from "../actions/settings.action";

const initialState = {
  mode: "dark-mode",
  theme: "mint",
  language: "english",
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE:
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};
