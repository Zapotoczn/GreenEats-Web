import styled from 'styled-components'

export const Card = styled.div `

  background-color: #fff;
  width: 250px;
  height: 300px;
  border-radius: 12px;
  box-shadow: 4px 4px 12px #aaaa;


  div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 50%;
}

img {
  width: 100%;
  height: 180px;
padding-top: 140px;
  border-radius: 20px;
}

h1 {
  font-size: 1.2rem;
}
h2 {
  font-size: .9rem;
  color: #aaaa;
}



.bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  width: 100%;

  button {
  background-color: #fff;
  height: 30px;
  border: 2px solid #23aa49;
  width: 90%;
  color: #23aa49;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
}

  button:hover {
  background-color: #23aa49;
  color: #fff;
  cursor: pointer;
  transition: 400ms;
}

}

`

