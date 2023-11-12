import {Container} from "./styles";
import {ImagemTop} from "./styles";
import {ButtonsTop} from "./styles";
import {Topo} from "./styles";
import Header from './../../Components/Header/index'
import { ButtonText } from "./../../Components/Button/ButtonText";
import { Cardh } from "./../../Components/Card/Card";

export function Home() {
  return (
    <Container>
      <header>
        <Header />  
      </header>


      <body>
        <Topo>
          <ImagemTop>
            <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </ImagemTop>

          <ButtonsTop>
            <ButtonText title="Dia A Dia"/>
            <ButtonText title="Vegano"/>
            <ButtonText title="Nutrientes"/>
          </ButtonsTop>

        </Topo>


        <div>
          <Cardh Alimento="Morango" Tipo="Morango" Valor="R$ 50,00" />
        </div>


      </body>
    </Container>
  );
}
