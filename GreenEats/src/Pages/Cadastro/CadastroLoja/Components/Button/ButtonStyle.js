import styled from "styled-components";

export const Button = styled.button`
  background: #23aa49;
  color: #ffffff;

  border: 0px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  height: 2.8rem;
  position: relative;
  top: 15%;
  width: 15rem;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 20px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
