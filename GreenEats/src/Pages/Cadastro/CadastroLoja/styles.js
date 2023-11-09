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
    bottom: 20%;
  }

  > p {
    margin: 0;
    color: #979899;
    position: relative;
    bottom: 19%;
  }
`;

export const NomeCompleto = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 80px;
  width: 500px;

  > label {
    font-weight: 500;
    padding: 12px;
  }

  > input {
    padding: 12px;
    border: none;
    border-radius: 5px;
    outline: none;
    color: #eee;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    outline: 1px solid 444;
  }
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 25px;
  width: 500px;

  > label {
    font-weight: 500;
    padding: 12px;
  }

  > input {
    padding: 12px;
    border: none;
    border-radius: 5px;
    outline: none;
    color: #eee;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    outline: 1px solid 444;
  }
`;

export const Cnpj = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 25px;
  width: 500px;

  > label {
    font-weight: 500;
    padding: 12px;
  }

  > input {
    padding: 12px;
    border: none;
    border-radius: 5px;
    outline: none;
    color: #eee;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    outline: 1px solid 444;
  }
`;
