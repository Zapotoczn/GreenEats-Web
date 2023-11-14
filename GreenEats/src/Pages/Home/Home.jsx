import {Container} from "./styles";
import {ImagemTop} from "./styles";
import {ButtonsTop} from "./styles";
import {Topo} from "./styles";
import {CardSection} from "./styles";
import {Sections} from "./styles";
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
            <ButtonText title="Marmita de Carne"/>
            <ButtonText title="Marmita de Peixe"/>
            <ButtonText title="Marmita de Frango"/>
          </ButtonsTop>

        </Topo>

        <Sections>
        <h3>Marmita de Carne</h3>

          <CardSection>
            <Cardh Alimento="Marmita de Carne" Tipo="Morango" Valor="R$ 50,00" />
            <Cardh Alimento="Marmita de Carne" Tipo="Morango" Valor="R$ 50,00" />
            <Cardh Alimento="Marmita de Carne" Tipo="Morango" Valor="R$ 50,00" />
            <Cardh Alimento="Marmita de Carne" Tipo="Morango" Valor="R$ 50,00" />
            <Cardh Alimento="Marmita de Carne" Tipo="Morango" Valor="R$ 50,00" />
            <Cardh Alimento="Marmita de Carne" Tipo="Morango" Valor="R$ 50,00" />
          </CardSection>

        </Sections>

        <Sections>
        <h3>Marmita de Peixe</h3>

          <CardSection>
            <Cardh Alimento="Marmita de Peixe" Tipo="Morango" Valor="R$ 50,00" />
            <Cardh Alimento="Marmita de Peixe" Tipo="Morango" Valor="R$ 50,00" />
            <Cardh Alimento="Marmita de Peixe" Tipo="Morango" Valor="R$ 50,00" />
            <Cardh Alimento="Marmita de Peixe" Tipo="Morango" Valor="R$ 50,00" />
            <Cardh Alimento="Marmita de Peixe" Tipo="Morango" Valor="R$ 50,00" />
            <Cardh Alimento="Marmita de Peixe" Tipo="Morango" Valor="R$ 50,00" />
            <Cardh Alimento="Marmita de Peixe" Tipo="Morango" Valor="R$ 50,00" />
          </CardSection>

        </Sections>

        <Sections>
        <h3>Marmita de Frango</h3>

          <CardSection>
            <Cardh Alimento="Marmita de Frango" Tipo="Morango" Valor="R$ 50,00" />

          </CardSection>

        </Sections>


      </body>
    </Container>
  );
}
