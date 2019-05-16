import { ADD_PLAYER, REMOVE_PLAYER, RETURN_PLAYER } from "../actions/types";

const players = [
  {
    name: "Blaise",
    score: 0,
    id: 1
  },
  {
    name: "Manu",
    score: 0,
    id: 2
  },
  {
    name: "Ashley",
    score: 0,
    id: 3
  },
  {
    name: "Jimmy",
    score: 0,
    id: 4
  }
];

export default (state = players, { type, payload }) => {
  switch (type) {
    case ADD_PLAYER:
      return { ...state, players: [...state, payload] };
    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.filter(p => !payload)
      };
    default:
      return state;
  }
};
