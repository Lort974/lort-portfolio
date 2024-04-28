import { SET_LANGUAGE, SET_MODE, SET_THEME } from "../actions/settings.action";

const initialState = {
  mode: "dark",
  theme: "mint",
  language: "english",
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE:
      return { ...state, mode: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
