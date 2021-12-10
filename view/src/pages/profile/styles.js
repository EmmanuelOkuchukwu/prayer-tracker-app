import styled from 'styled-components';

export const ProfileContainer = styled.main`
  height: 100vh;
`;

export const MainContainer = styled.div`
  width: 89.6%;
  margin: 20px 200px;
  // border: 1px solid ${prop => prop.theme.main};
  border-radius: 4px;
  h3 {
    margin: 10px;
  }
  .profile-container {
    margin: 10px;
  }
`;

export const UserInfoContainer = styled.div`
  -webkit-box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.75);
  margin: 20px 0;
  width: 80%;
  height: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .user-info-header {
    display: flex;
    align-items: center;
    width: 50%;
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
  
  .personal-info-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    border-left: 1px dashed #282c34;
    padding: 0 15px;
    .personal-info-title {
      margin: 5px 0;
    }
  }
`;
