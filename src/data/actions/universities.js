import { LOAD_UNIV, ADD_UNIV } from './types';

export const loadUniversities = (universities) => ({
  type: LOAD_UNIV,
  payload: universities
});

export const addUniversities = (university) => ({
  type: ADD_UNIV,
  payload: university
});
