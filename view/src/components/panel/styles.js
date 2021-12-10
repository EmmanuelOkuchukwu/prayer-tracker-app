import styled from 'styled-components';

export const Panel = styled.div`
  width: 35%;
  height: 100px;
  border: 1px solid ${props => props.theme.main};
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
