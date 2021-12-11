import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 20%;
  height: 100%;
  border: 1px solid ${props => props.theme.secondary};
  padding: 10px;
  border-radius: 4px;
  line-height: 1.8;
  .fa-edit {
    cursor: pointer;
  }
  @media screen and (max-width: ${props => props.theme.mobile}) {
    //display: flex;
    //flex-direction: column;
    width: 100%;
    padding: 10px;
  }
`;

export const StyledCardheader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledCardBody = styled.div``;
