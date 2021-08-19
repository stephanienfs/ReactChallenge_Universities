import axios from 'axios';
import React, { useEffect, useState , memo, useRef} from 'react';

import { fetchBooks } from '../services/BooksService';

import { BookDiv, DetailsBox, BookContainer } from '../components/ui/Box';

/*Va a monitoriar el componente Post recibe algun cambio y decidirá si tiene que ser renderizado o no. 
De esta manera prevent de que se rendericen cosas que no se necesitan 
Se aplica a componentes simples que no tiene ningun tipo de state management como por ejemplo el filter de abajo que usa useState*/
//const Books = memo(({ postBody }) => <span>{postBody}</span>); 

export default function Books(){
const inputRef = useRef(null);
const [books, setBooks] = useState([]);
const [filter, setFilter] = useState('');


useEffect( ()=> {
  fetchBooks().then(({ data }) => setBooks(data));
},[])


const handleFilterClick = ({ target: { value } }) => {
    setFilter(inputRef.current.value);
    console.log(inputRef);
}
    
    return <>
        <h1>Books</h1>
        <input ref={inputRef} type="text"/>
        <button onClick={handleFilterClick}>Filter</button>
        <br />
        <BookContainer>
        {books &&
            books.map((book, index) => {
                const cleanedDate = new Date(book.released).toDateString();
                const authors = book.authors.join(', ');
    
                return (
                  <BookDiv key={index}>
                    <h2>{book.name}</h2>
    
                    <DetailsBox className="details">
                      <p>👨: {authors}</p>
                      <p>📖: {book.numberOfPages} pages</p>
                      <p>🏘️: {book.country}</p>
                      <p>⏰: {cleanedDate}</p>
                    </DetailsBox>
                  </BookDiv>
                );
              })}
        </BookContainer>
    </>
};