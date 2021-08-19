import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 16px sans-serif;
    color: #333;
  }
`;

const Button = styled.button.attrs({
  type: 'button'
})`
  width: 120px;
  height: 32px;
  border: 1px solid #FFF;
  border-radius: 4px;
`;

export const ActionButton = styled(Button)`
  background-color: ${ ({ primary }) => primary ? '#3a86ff' : '#e9ecrf' };
`;

export default Button;