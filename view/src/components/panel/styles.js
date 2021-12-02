import styled from 'styled-components';

export const Panel = styled.a`
  width: 98.3%;
  height: 100%;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 5px;
  margin: 10px;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  .fa-check-circle {
    color: green;
  }
  .fa-times {
    color: red;
  }
`;