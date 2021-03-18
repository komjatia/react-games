import { combineReducers } from "redux";
import GameReducer from "./gameReducer";
import detailReducer from "./detailReducer";

export const rootReducer = combineReducers({
  games: GameReducer,
  detail: detailReducer
});


