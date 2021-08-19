import apiBooks from './api';

export const fetchBooks = () => apiBooks.get('https://www.anapioficeandfire.com/api/books?pageSize=30');