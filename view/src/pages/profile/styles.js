import styled from 'styled-components';

export const ProfileContainer = styled.main`
  height: 100vh;
`;

export const MainContainer = styled.div`
  max-width: 768px;
  margin: 40px auto;
  border: 1px solid ${prop => prop.theme.main};
  border-radius: 4px;
  h3 {
    margin: 10px;
  }
  .profile-container {
    margin: 10px;
  }
  .profile-img-container {
    width: 150px;
    height: 150px;
  }
  .profile-img {
    width: 100%;
    height: auto;
    border-radius: 100%;
  }
`;
