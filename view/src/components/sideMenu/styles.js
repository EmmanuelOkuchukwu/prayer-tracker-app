import styled from 'styled-components';

export const MenuContainer = styled.aside`
  height: 100%;
  width: 170px;
  z-index: 1001;
  position: fixed;
  top: 62px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  -webkit-box-shadow: 4px 3px 5px 0 rgba(88, 48, 136, 1);
  -moz-box-shadow: 4px 3px 5px 0 rgba(88, 48, 136, 1);
  box-shadow: 4px 3px 5px 0 rgba(88, 48, 136, 1);
  line-height: 1.8;
  @media screen and (max-width: ${props => props.theme.mobile}) {
    display: none;
  }
`;
