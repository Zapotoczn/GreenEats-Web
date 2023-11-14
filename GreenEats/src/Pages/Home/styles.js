import styled from "styled-components"


export const Container = styled.div`
  header {
    margin: -8px;
    box-sizing: border-box;
    width: 100vw;
    background-color: white;
    display: block;

  }

  body {
    margin: -8px;
    height: 100vh;
    width: 100%;
  }
  `

export const Topo = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 60%;
height: 40vh;
margin-left: 20%;
margin-top: 60px;

`

export const ImagemTop = styled.div`
width: 100%;

 img{
  
    width: 100%; /* width of container */
    height: 300px; /* height of container */
    object-fit: cover;/* try 20% 10% */ 
    border-radius: 10px;
 
  }
`

export const ButtonsTop = styled.div`
height: 50px;
width: 100%;
display: flex;
flex-direction: row;
gap: 30px;
align-items:  flex-start;
`

export const Sections = styled.div`
h3{
  padding-left: 20%;
  padding-top: 50px;
  font-size: 30px;
  margin-bottom: 0px;
}
width: 100%;
`


export const CardSection = styled.div`

height: 60%;
padding-left: 20%;
padding-right: 15%;
padding-top: 30px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
gap: 20px;
`
