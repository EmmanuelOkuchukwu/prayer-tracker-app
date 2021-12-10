import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 25%;
  height: 100%;
  margin: 15px;
  border: 1px solid ${props => props.theme.secondary};
  padding: 10px;
  border-radius: 4px;
  line-height: 1.8;
  .fa-edit {
    cursor: pointer;
  }
`;

export const StyledCardheader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledCardBody = styled.div``;
