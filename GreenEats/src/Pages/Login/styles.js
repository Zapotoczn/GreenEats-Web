import styled from "styled-components";

export const MainLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginCard = styled.div`
  width: 70vh;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1px 10px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 20px;

  > h1 {
    position: relative;
    bottom: 5%;
  }

  > p {
    margin: 0;
    color: #979899;
    position: relative;
    bottom: 35px;
  }
`;

export const ImgFood = styled.img`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 101px;
`;
