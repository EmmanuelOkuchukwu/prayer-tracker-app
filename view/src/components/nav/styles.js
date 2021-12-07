import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  background-color: ${props => props.theme.primary};
  margin: 0;
  width: 100%;
  -webkit-box-shadow: 0 3px 5px 0 #583088;
  -moz-box-shadow: 0 3px 5px 0 #583088;
  box-shadow: 0 3px 5px 0 #583088;
  overflow: hidden;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin: 0 30px;
  }
  .nav-align {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1250px;
    width: 100%;
    margin: 0 auto;
  }
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
  .img-button {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin: 0 30px;
  }
  .profile-img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;
