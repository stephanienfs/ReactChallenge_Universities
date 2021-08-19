import styled from 'styled-components';

export const Select = styled.select`
  width: 20%;
  height:35px;
  margin:10px;
  padding-left: 30px;
  background: white;
  color: gray;
  padding-left: 5px;
  border: solid;
  font-size: 14px;
  margin-left: 10px;

       option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
       }
`;

export default Select;