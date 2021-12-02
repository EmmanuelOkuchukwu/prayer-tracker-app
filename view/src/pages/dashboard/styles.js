import styled from 'styled-components';

export const DashboardContainer = styled.main`
  height: 100vh;
`;
export const TaskContainer = styled.main`
  max-width: 1200px;
  margin: 40px auto;
  border: 1px solid #ddd;
  height: 70vh;
  hr {
    color: #DDDDDD;
  }
  .task-sub-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn-add {
    background-color: #F6F8F9;
    border: 1px solid ${props => props.theme.main};
    border-radius: 10%;
    padding: 8px 15px;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.main};
      color: ${props => props.theme.primary};
      transition: all 0.2s ease-in-out;
    }
  }
  // .task-panel {
  //   width: 98.3%;
  //   height: 100%;
  //   border: 1px solid ${props => props.theme.secondary};
  //   border-radius: 5px;
  //   margin: 10px;
  //   padding: 0 5px;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   .fa-check-circle {
  //     color: green;
  //   }
  //   .fa-times {
  //     color: red;
  //   }
  // }
  .tasks-not-found {
    text-align: center;
    padding: 15px;
    background-color: #fff;
    border: 2px solid ${props => props.theme.main};
    border-radius: 4px;
    width: 300px;
    margin: 0 auto;
  }
  .fa-trash {
    cursor: pointer;
  }
`;