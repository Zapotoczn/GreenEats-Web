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
  height: 150px;
  padding-top: 50px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

h1 {
  padding-top : 3rem ;
  font-size: 1.2rem;
}
h2 {
  font-size: .9rem;
  color: #aaaa;
}
button {
  background-color:#23aa49;
  height: 45px;
  border: none;
  padding: 4px;
  width: 90%;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
}

button:hover {
  background-color: #a4ea4f;
  cursor: pointer;
}

`

