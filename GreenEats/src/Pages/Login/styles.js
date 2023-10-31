import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content"
  "Footer";
  
  

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;

  }
  
  p { 
    overflow-wrap: break-word;
    width: 200px;
  }
`