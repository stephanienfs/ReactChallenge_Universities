import { LOAD_UNIV, ADD_UNIV } from '../actions/types';

const initialState = {
  loaded: false,
  data: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case LOAD_UNIV: 
      return {
        ...state,
        loaded: true,
        data: [
          ...payload
        ]
      };
    case ADD_UNIV:
      return {
        ...state,
        data: [
          ...state.data,
          payload
        ]
      };
    default:
      return state;
  }
}