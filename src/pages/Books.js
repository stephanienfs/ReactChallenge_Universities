
import React, { useEffect, useState, useRef } from 'react';

import { fetchBooks } from '../services/BooksService';

import { BookDiv, DetailsBox, BookContainer, Label } from '../components/ui/Box';
import { ActionButton } from '../components/ui/Button';
import { Input } from '../components/ui/Input';


export default function Books() {
  const inputRef = useRef(null);
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchBooks().then(({ data }) => setBooks(data));
  }, [])


  const handleFilterClick = ({ target: { value } }) => {
    setFilter(inputRef.current.value.toLowerCase());
  }

  return <>
    <h1>Books</h1>
    <Label>Search Book by Name!</Label>
    <Input ref={inputRef} type="text" />
    <ActionButton onClick={handleFilterClick}>Filter</ActionButton>
    <br />
    <BookContainer>
      {books &&
        books.map((book) => {
          const cleanedDate = new Date(book.released).toDateString();
          const authors = book.authors.join(', ');
          if (book.name.toLowerCase().localeCompare(filter) === 0 || filter === '') {
            return <>
      
            <BookDiv key={book.isbn}>
              
              <h2>{book.name}</h2>

              <DetailsBox className="details">
                <p>👨: {authors}</p>
                <p>📖: {book.numberOfPages} pages</p>
                <p>🏘️: {book.country}</p>
                <p>⏰: {cleanedDate}</p>
              </DetailsBox>
            </BookDiv>
            </>
           }
        })}
    </BookContainer>
  </>
};