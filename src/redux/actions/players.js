import { ADD_PLAYER, REMOVE_PLAYER, RETURN_PLAYER } from "./types";

export const addPlayer = player => {
  return dispatch => {
    dispatch({ type: ADD_PLAYER, payload: player });
  };
};
