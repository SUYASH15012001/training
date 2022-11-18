import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./homeReducer";
import tempReducer from "./tempReducer";

const rootReducer = combineReducers({
  temp: tempReducer,
  home: homeReducer,
});

export default rootReducer;
