import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTERS_SUCCESS
} from '../actions';

const initialState = {
  isFetching: false,
  characters: [],
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        characters: action.payload
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
