import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  width: 200px;
  border-right: 1px solid ${props => props.theme.secondary};
  height: 100%;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }
`;

export const LinkBtn = styled.a`
  border: 1px solid ${props => props.theme.secondary};
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 4px;
  width: 100%;
  margin: 10px;
  &:hover {
    background-color: ${props => props.theme.main};
    color: #F6F8F9;
    transition: all 0.2s ease-in-out;
  }
`;
