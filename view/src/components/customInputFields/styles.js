import styled from 'styled-components';

export const InputFieldContainer = styled.main`
  width: 100%;
`

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: solid 1px #ddd;
  border-radius: 5px;
  position: relative;
  &:focus {
    outline: 2px solid #583088;
    transition: all 0.1s ease-in-out;
  }
`