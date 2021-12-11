import styled from 'styled-components';

export const DashboardContainer = styled.main`
  //height: 100vh;
  .dashboard-header {
    margin: 0 200px;
  }
  .welcome-container {
    margin: 20px 0;
    display: flex; 
    align-items: center; 
    justify-content: space-between;
  }
  .create-task-btn {
    width: 150px;
    border: 1px solid ${props => props.theme.main};
    border-radius: 4px;
    background-color: transparent;
    cursor: pointer;
    color: ${props => props.theme.main};
    padding: 10px;
    &:hover {
      background-color: ${props => props.theme.main};
      color: ${props => props.theme.primary};
      transition: all 0.2s ease-in-out;
    }
  }
  @media screen and (max-width: ${props => props.theme.mobile}) {
    .welcome-container {
      display: flex;
      flex-direction: column;
      margin: 0;
      width: 100%;
    }
    .dashboard-header {
      margin: 0;
    }
    .text-welcome {
      width: 100%;
    }
    .create-task-btn {
      width: 100%;
    }
    .btn-create-wrapper {
      width: 100%;
    }
  }
`;
export const TaskContainer = styled.main`
  width: 88%;
  margin: 40px 200px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 15px;
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
    margin: 0 10px;
    &:hover {
      background-color: ${props => props.theme.main};
      color: ${props => props.theme.primary};
      transition: all 0.2s ease-in-out;
    }
  }
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
  @media screen and (max-width: ${props => props.theme.mobile}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    margin: 0;
  }
`;

/* - - - - - - - - - - - - - - - - - - - - - -Create Task Component - - - - - - - - - - - - - - - - - - - - - - - - - */

export const FormWrapper = styled.form`
  width: 100%;
  padding: 0 70px;
  .create-btn {
    border: 1px solid ${props => props.theme.main};
    border-radius: 4px;
    padding: 10px;
    background-color: ${props => props.theme.primary};
    cursor: pointer;
    width: 100%;
    &:hover {
      background-color: ${props => props.theme.main};
      transition: all 0.2s ease-in-out;
      color: ${props => props.theme.primary};
    }
  }
  .update-header-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

/* - - - - - - - - - - - - - - - - - - - - - - Update Task Component - - - - - - - - - - - - - - - - - - - - - - - - - */

