import { FETCH_CHARACTER, FETCH_RANDOM, FETCH_COMICS } from "../constants";

const initialState = {
  random: [],
  character: [],
  comics: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RANDOM:
      return {
        ...state,
        random: action.characters
      };
    case FETCH_COMICS:
      return {
        ...state,
        comics: action.comics
      };
    case FETCH_CHARACTER:
      return {
        ...state,
        character: action.character
      };
    default:
      return state;
  }
}
