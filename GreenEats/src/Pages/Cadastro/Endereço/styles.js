import styled from "styled-components";

export const MainCadastro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginCadastro = styled.div`
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
  background-color: #ebf8ee;

  > h1 {
    position: relative;
    bottom: 3%;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;

  .error-message {
    color: rgb(255, 72, 72);
    font-size: 0.75rem;
  }

  .input-error {
    outline: 1px solid rgb(255, 72, 72);
  }

  .input::placeholder {
    color: #999;
  }

  > label {
    font-weight: 500;
    padding: 10px;
  }

  > input {
    width: 500px;
    padding: 12px;
    border: none;
    border-radius: 5px;
    outline: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    outline: 1px solid 444;
  }
`;

export const DuoInput = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  width: 200px;

  .error-message {
    color: rgb(255, 72, 72);
    font-size: 0.75rem;
  }

  .input-error {
    outline: 1px solid rgb(255, 72, 72);
  }

  .input::placeholder {
    color: #999;
  }

  > label {
    font-weight: 500;
    padding: 10px;
  }

  > select {
    padding: 12px;
    border: none;
    border-radius: 5px;
    outline: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    outline: 1px solid 444;
  }

  > input {
    padding: 12px;
    border: none;
    border-radius: 5px;
    outline: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    outline: 1px solid 444;
  }
`;
