import styled from 'styled-components';

export const StyledButton = styled.input`
  width: 100%;
  background-color: #583088;
  border-radius: 4px;
  border: none;
  padding: 10px;
  cursor: pointer;
  color: #fff;
  &:hover {
    background-color: #F6F8F9;
    border: 2px solid #583088;
    transition: all 0.2s ease-in-out;
    color: #282c34;
  }
`;