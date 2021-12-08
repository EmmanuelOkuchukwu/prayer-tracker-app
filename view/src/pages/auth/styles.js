import styled from 'styled-components';

/* - - - - - - - - - - - - - - - - - - - - - Login Styles - - - - - - - - - - - - - - - - - - - - - */

export const LoginContainer = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginBackground = styled.div`
  height: 370px;
  width: 320px;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 2px 1px 5px 0 rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 1px 5px 0 rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 1px 5px 0 rgba(0, 0, 0, 0.75);
`;

export const Form = styled.form`
  padding: 35px;
  height: 100%;
  position: relative;
  .eye-icon {
    position: relative;
    left: 220px;
    bottom: 26px;
  }
  span {
    color: red;
  }
  h4 {
    color: #583088;
  }
  label {
    color: #583088;
  }
`;

/* - - - - - - - - - - - - - - - - - - - - Register Styles - - - - - - - - - - - - - - - - - - - - - */

export const RegisterContainer = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RegisterBackground = styled.div`
  height: 470px;
  width: 320px;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 2px 1px 5px 0 rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 1px 5px 0 rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 1px 5px 0 rgba(0, 0, 0, 0.75);
`;
