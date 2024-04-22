import { SET_THEME } from "../actions/theme.action";

const initialState = {};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
};
