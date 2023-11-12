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
  position: relative;
  bottom: 8%;
  padding: 5px;
  width: 500px;

  .error-message {
    color: rgb(255, 72, 72);
    font-size: 0.75rem;
    margin-top: 8px;
  }

  .input-error {
    outline: 1px solid rgb(255, 72, 72);
  }

  .input::placeholder {
    color: #999;
  }

  > label {
    font-weight: 500;
    padding: 12px;
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

export const InputCep = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
  width: 500px;

  .error-message {
    color: rgb(255, 72, 72);
    font-size: 0.75rem;
    margin-top: 8px;
  }

  .input-error {
    outline: 1px solid rgb(255, 72, 72);
  }

  .input::placeholder {
    color: #999;
  }

  > label {
    font-weight: 500;
    padding: 12px;
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

export const InputEstado = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  right: 23%;
  top: 2%;
  padding: 10px;
  width: 200px;

  .error-message {
    color: rgb(255, 72, 72);
    font-size: 0.75rem;
    margin-top: 8px;
  }

  .input-error {
    outline: 1px solid rgb(255, 72, 72);
  }

  .input::placeholder {
    color: #999;
  }

  > label {
    font-weight: 500;
    padding: 12px;
  }

  > select {
    padding: 12px;
    border: none;
    border-radius: 5px;
    outline: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    outline: 1px solid 444;
  }
`;

export const InputCidade = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 10vh;
  left: 23%;
  padding: 10px;
  width: 200px;

  .error-message {
    color: rgb(255, 72, 72);
    font-size: 0.75rem;
    margin-top: 8px;
  }

  .input-error {
    outline: 1px solid rgb(255, 72, 72);
  }

  .input::placeholder {
    color: #999;
  }

  > label {
    font-weight: 500;
    padding: 12px;
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

export const InputNumero = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  right: 23%;
  bottom: 5%;
  padding: 10px;
  width: 200px;

  .error-message {
    color: rgb(255, 72, 72);
    font-size: 0.75rem;
    margin-top: 8px;
  }

  .input-error {
    outline: 1px solid rgb(255, 72, 72);
  }

  .input::placeholder {
    color: #999;
  }

  > label {
    font-weight: 500;
    padding: 12px;
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

export const InputComplemento = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 16vh;
  left: 23%;
  padding: 10px;
  width: 200px;

  .error-message {
    color: rgb(255, 72, 72);
    font-size: 0.75rem;
    margin-top: 8px;
  }

  .input-error {
    outline: 1px solid rgb(255, 72, 72);
  }

  .input::placeholder {
    color: #999;
  }

  > label {
    font-weight: 500;
    padding: 12px;
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
