import { combineReducers } from "redux";
import GameReducer from "./gameReducer";

export const rootReducer = combineReducers({
  games: GameReducer,
});


