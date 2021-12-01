import styled from 'styled-components';

/* - - - - - - - - - - - - - - - - - - - - - Login Styles - - - - - - - - - - - - - - - - - - - - - */

export const LoginContainer = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginBackground = styled.div`
  height: 350px;
  width: 320px;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 4px;
`;

export const LoginForm = styled.form`
  padding: 35px;
  height: 150px;
`;

/* - - - - - - - - - - - - - - - - - - - - Register Styles - - - - - - - - - - - - - - - - - - - - - */

export const RegisterContainer = styled.main``;