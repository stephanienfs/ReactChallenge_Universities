import styled from 'styled-components';

export const Label = styled.label`
font: 16px sans-serif;
margin:20px;
`;

export const BookDiv = styled.div`
  background: #fff;
  position: relative;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 47%;
  color: #333;
  flex-basis: width;
  background-color: #b4c8db;  ;
`;
export const BookContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
`;
  
export const BoxCenter = styled.div `
text-align: -webkit-center;
`;
export const DetailsBox = styled.div`
    text-align: left;
`;

export default BookDiv;