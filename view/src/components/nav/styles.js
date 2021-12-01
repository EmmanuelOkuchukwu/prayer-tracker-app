import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  background-color: ${props => props.theme.primary};
  margin: 0;
  width: 100%;
  -webkit-box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.75);
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.75);
  overflow: hidden;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  a {
    margin: 0 10px;
    text-decoration: none;
    padding: 10px;
    background-color: #000;
    border-radius: 5px;
    color: ${props => props.theme.secondary};
    &:hover {
      background-color: ${props => props.theme.secondary};
      color: #000;
      transition: all ease-in-out 0.2s;
    }
  }
`;