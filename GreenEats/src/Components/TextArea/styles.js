import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
  display: flex;
  align-items: right;
  flex-direction: column;
  

  background-color: #ffffff;
  color: #000000;
  
  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;
    color: #ffffff;
    background: transparent;
    border: 0;

    &:placeholder {
      color: #000000
    }
  }
`