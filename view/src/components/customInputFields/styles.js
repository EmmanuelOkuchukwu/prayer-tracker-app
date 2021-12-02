import styled from 'styled-components';

export const InputFieldContainer = styled.main`
  width: 100%;
`

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: solid 1px ${props => props.theme.secondaryColor};
  border-radius: 5px;
  position: relative;
  &:focus {
    outline: none;
  }
`