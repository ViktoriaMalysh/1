import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from "./types";

const initialState = {
  loading: false,
  text: "",
};

export const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ALERT:
      return { ...state, text: action.payload };
    case HIDE_ALERT:
      return { ...state, text: false };

    default:
      return state;
  }
};
