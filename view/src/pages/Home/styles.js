import styled from 'styled-components';

export const HomeHeader = styled.main`
  min-height: 500px;
  height: 100vh;
  background-image: linear-gradient(270deg, #583088, #F6F8F9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .main-head {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon-container {
    width: 150px;
    height: 150px;
    margin: 10px;
  }
  .task-icon {
    width: 100%;
    height: auto;
  }
  .title-container {
    width: 400px;
    text-align: justify;
    font-size: 19px;
    margin: 10px;
  }
  .btn-get-started{
    padding: 10px;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.main};
    background-color: ${props => props.theme.primary};
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.main};
      color: ${props => props.theme.primary};
      transition: all 0.2s ease-in-out;
    }
  }
`;
