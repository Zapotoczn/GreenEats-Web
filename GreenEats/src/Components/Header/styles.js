import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  display: flex;
  background-color: #23aa48; 
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 20px;
    margin-left: 32px;
    cursor: pointer;
  }

  > input {
    width: 30%;
    height: 15%;
    position: relative;
    margin-top: 22px;
    margin-left: 35%;
    border-radius: 10px;
    padding: 10px;
    border: none;


    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;

  }
`;