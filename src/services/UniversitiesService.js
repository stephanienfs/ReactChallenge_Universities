import api from './api';
import axios from 'axios';

export const fetchUniversitiesARS = api.get(`/universitiesArgentina`);
export const fetchUniversitiesCH = api.get(`/universitiesChile`);
export const fetchUniversitiesPY = api.get(`/universitiesParaguay`);
export const fetchUniversitiesUY = api.get(`/universitiesUruguay`);

export const fetchUniversities = () => axios.all([fetchUniversitiesARS, fetchUniversitiesUY, fetchUniversitiesCH, fetchUniversitiesPY]);