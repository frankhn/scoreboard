import { combineReducers } from "redux";
import addPlayers from "./players";

export default combineReducers({
  players: addPlayers
});
