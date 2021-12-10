import styled from 'styled-components';

export const DashboardContainer = styled.main`
  //height: 100vh;
  .dashboard-header {
    margin: 0 200px;
  }
`;
export const TaskContainer = styled.main`
  width: 88%;
  margin: 40px 200px;
  border: 1px solid #ddd;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
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

