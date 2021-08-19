import { SET_FILTER } from '../actions/types';

const initialState = 'Argentina';

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_FILTER:
      return payload;
    default:
      return state;
  }
};