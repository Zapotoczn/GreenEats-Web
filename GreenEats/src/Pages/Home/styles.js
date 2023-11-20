import styled from "styled-components"


export const Container = styled.div`
  header {
    margin: -8px;
    box-sizing: border-box;
    width: 100vw;
    background-color: white;
    display: block;
    font-family: 'Roboto', sans-serif;
font-family: 'Rubik', sans-serif;

  }

  body {
    margin: -8px;
    height: 100vh;
    width: 100%;
    font-family: 'Roboto', sans-serif;
font-family: 'Rubik', sans-serif;
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
export const Section2 = styled.div`
  width: 60vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 35%;
  padding-top: 10%;

 h1{
  font-size: 40px;
    line-height: 40px;
    text-transform: uppercase;
    font-weight: bold;
 }
 
 h2{
  font-size: 40px;
    line-height: 40px;
    text-transform: uppercase;
    font-weight: bold;
 }
`
export const Footer = styled.div`
width: 100%;
background:  #23aa48;
justify-content: center;
align-items: center;
height: 400px;
` 

export const Container1 = styled.div`
	width: 100%;
	margin:auto;
  display: flex;
  justify-content: center;
  height: 400px;
`
export const Row = styled.div`
  width: 1500px;
  padding-left: 27%;
	display: flex;
	flex-wrap: wrap;

ul{
	list-style: none;
}
`


export const FooterCol = styled.div`

   width: 25%;
   padding: 0 15px;

 h4{
	font-size: 18px;
	color: #ffffff;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
 h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: #ffffff;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
 ul li:not(:last-child){
	margin-bottom: 10px;
}
 ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: #ffffff;
	text-decoration: none;
	font-weight: 300;
	color: #ffffff;
	display: block;
	transition: all 0.3s ease;
}
 ul li a:hover{
	color: #ffffff;
	padding-left: 8px;
}
`
export const SocialLinks = styled.div`
a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;

  a:hover{
	color: #24262b;
	background-color: #ffffff;
}
}
`
