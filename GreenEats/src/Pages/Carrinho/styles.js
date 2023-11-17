import styled from "styled-components";

export const Corpo = styled.div`
    background: #f6f6f6;
  font-family: 'Lato', sans-serif;

  Header {
    background: #111;
  color: white;
  font-size: 24px;
  padding: 20px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  }

  main {
    background: #fff;
  padding: 0 30px 30px;
  }
  `

export const PageTitle = styled.div`
    font-size: 40px;
  padding: 50px 0;
  text-align: center;
  `

export const Content = styled.div`
    display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  section {
    -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  }
`

export const Table = styled.div`
  width: 100%;
  border-collapse: collapse;

  thead tr {
  border-bottom: 3px solid #eee;
}

thead tr th {
  text-align: left;
  padding-bottom: 10px;
  text-transform: uppercase;
  color: #666;
}

table tbody tr {
  border-bottom: 3px solid #eee;
}

table tbody tr:last-child {
  border: 0;
}

table tbody tr td {
  padding: 30px 0;
}

  `

export const Product = styled.div`
    display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;

          img {
  border-radius: 6px;
}

  `

export const Info = styled.div`
    margin-left: 30px;
    margin-right: 30px;
    font-size: 20px;
`
export const Name = styled.div`
    font-size: 20px;
  margin-bottom: 10px;
`

export const Category = styled.div`
    color: #666;
`

export const Qty = styled.div`
  
  background: #eee;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  padding: 100 0;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  min-width: 60px;
  border-radius: 20px;
  overflow: hidden;
  height: 30px;


 span {
  margin: 0 10px;
}

button {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background: transparent;
  border: 0;
  padding: 0 10px;
  font-size: 20px;
  height: 100%;
}

button:hover {
  background: #ddd;
}
`

export const Aside = styled.div`
    margin-left: 30px;

    aside > button {
  border: 0;
  padding: 15px 0;
  color: white;
  background: #28a745;
  display: block;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 16px;
}

 button:hover {
  background: #3bc55b;
 }
`

export const Box = styled.div`

  margin-bottom: 15px;
  border: 1px solid #ccc;
  background: #eee;
  color: #222;


 header {
  padding: 15px 20px;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
}



 footer {
  padding: 15px 20px;
  background: #ddd;
  font-size: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}


`


export const Info2 = styled.div`

 
    padding: 20px;
    font-size: 16px;
  
  
   div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    margin-bottom: 10px;
    color: #555;
  }
  
   div:last-child {
    margin: 0;
  }
  
  button {
    color: #28a745;
    background: transparent;
    border: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-size: 16px;
  }

`

