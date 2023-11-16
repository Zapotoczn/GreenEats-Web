import {Container} from "./styles";
import {ImagemTop} from "./styles";
import {ButtonsTop} from "./styles";
import {Topo} from "./styles";
import {CardSection} from "./styles";
import {Sections} from "./styles";
import Header from './../../Components/Header/index'
import { ButtonText } from "./../../Components/Button/ButtonText";
import { Cardh } from "./../../Components/Card/Card";
import { Section2 } from "./styles";

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

        <Section2>
          <h1>
              MARMITAS CONGELADAS: FITNESS E SAUDÁVEL PRA SEMANA
          </h1>

          <p>
          Quem dispensa uma boa marmita fitness, que combina sabor e praticidade sem abrir mão de uma alimentação equilibrada? Pois é, ninguém! As marmitas prontas são cada vez mais procuradas, ainda mais as marmitas congeladas baratas, como as da Liv Up. Leia a seguir e aproveite para comprar marmitas fitness deliciosas!
          </p>

          <h2>
          CONHEÇA AS MARMITAS FITNESS LIV UP
          </h2>


          <p>Marmita fitness congelada não precisa ser sem graça, viu? Com a Liv Up, você tem marmita para semana toda, com variedade e muito sabor. Criamos uma linha para quem busca produtos realmente saudáveis e preparados com ingredientes selecionados por Chefs de Cozinha e Nutricionistas. </p>

          <p>Além de qualidade, nosso cardápio está recheado de variedade: vai da combinação de frango desfiado cremoso, cenoura e brócolis ao tradicional prato brasileiro em uma versão mais equilibrada, com arroz integral, feijão carioca e carne moída, passando pelo saboroso encontro da carne moída com purê de abóbora e brócolis no vapor.</p>

          <p>Motivo para conhecer cada marmita fitness do nosso menu é o que não falta. Além de uma variedade surpreendente, oferecemos alta qualidade que vai dos ingredientes às receitas. Cada item das criações dos nossos Chefs tem origem conhecida e reconhecida pelo cuidado com toda cadeia produtiva.</p>

          <p>E, como já citamos, contamos com Nutricionistas para garantir que todas as criações da nossa cozinha sejam balanceadas. Eles participam de todas os processos: planejamento, execução e avaliação de tudo que é desenvolvido para que você tenha um cardápio rico para todos os momentos da sua rotina.</p>

          <p>Ainda em dúvida sobre pedir marmita saudável? Continue a leitura e descubra ainda mais sobre o nosso cardápio e as facilidades para quem escolhe a Liv Up como parceira para um cardápio de alimentação saudável fácil, rápida e deliciosa.</p>
          

          <h2>
          CARDÁPIO DE MARMITA FITNESS CONGELADA
          </h2>

          <p>
          <p>Já pesquisou por opções de marmita fit, mas não sentiu segurança de que receberia um produto gostoso para o seu dia a dia? É a coisa mais comum para quem está buscando dar o primeiro passo em direção a uma vida mais saudável. A notícia boa é que, na Liv Up, marmita fitness não é mais sinônimo de comida sem graça.</p>

          <p>Aliás, não só marmitas fit. Por aqui, com a variedade do nosso cardápio, todo mundo encontra as melhores escolhas para sua realidade. Por exemplo, se o seu objetivo é uma dieta low carb, buscando uma alimentação baseada na atenção ao consumo de carboidratos, pode optar por:</p>
          </p>

          <ul>
            <li>Frango com limão siciliano e hortelã com arroz de brócolis</li>
            <li>Sobrecoxa assada com ervilha e purê de abóbora</li>
            <li>Frango oriental com arroz de couve-flor</li>
            <li>Carne moída, purê de abóbora e brócolis no vapor</li>
          </ul>

          
          <p>Apesar da variedade e do sabor garantido em todas as nossas receitas, esses não são os únicos motivos para escolher a Liv Up para facilitar a sua vida atribulada. Como já falamos, todas as receitas desenvolvidas em nossa cozinha são balanceadas. Ou seja, são receitas e combinações completas, com ingredientes naturais ideais para fornecer ao corpo os nutrientes necessários para uma boa saúde.</p>

          <p>Desse modo, ao comer Liv Up, você inclui na sua rotina alimentar alternativas com o equilíbrio perfeito entre vitaminas, minerais e fibras que vão te ajudar a viver melhor, longe dos excessos que, a longo prazo, podem ser determinantes para a performance do seu corpo.</p>

          <p>E como sabemos que a dinâmica para dar conta do trabalho, vida pessoal e outras atribuições não é simples, as Marmitas Liv Up foram pensadas para acompanhar os nossos clientes em todas as situações: seja em casa, na correria do home office, ou no trabalho, entre muitas reuniões e o desânimo ao pensar em encontrar um restaurante menos lotado. </p>

          <p>Com uma embalagem prática, você pode carregar a marmita para onde for e acabar com a desculpa de comer mal para economizar tempo. É só guardar no freezer e esperar o horário do almoço para chamar a atenção de todo mundo com o cheiro de comida gostosa e nutritiva.</p>

          <p>Tem mais, viu? Agora vamos te falar de como é fácil comprar marmita fitness na Liv Up e receber em casa. E também do preço que cabe no seu bolso - e ainda sobra espaço. </p>
          

          <h2>
          DELIVERY DE MARMITA É LIV UP
          </h2>

          <p>
          Uma das nossas maiores alegrias é que estamos em mais de 15 estados, entregando marmita saudável congelada para muitas pessoas que já escolheram uma vida mais saudável. Quer saber se já estamos na sua cidade? Dá uma olhadinha na lista e saiba onde já tem marmita fit congelada da Liv Up!
          </p>

          <h2>
          REFEIÇÕES SAUDÁVEIS QUE CABEM NO BOLSO
          </h2>

      
          
          <p>Se você chegou até esse tópico e busca marmitas congeladas baratas, saiba que valeu a pena a leitura. Não satisfeitos em entregar tudo o que falamos até aqui, ainda nos preocupamos em oferecer um produto que não comprometa o seu orçamento. </p>

            <p>Em nosso cardápio, marmita ultracongelada, gostosa e saudável, tem valor a partir de R$20,90, comprando uma unidade. Já pra quem escolhe pedir o kit, o valor é a partir de R$19,90 cada marmita. </p>

            <p>E até na hora de pagar, a gente quer te deixar à vontade: pode optar pelo PIX, diversas bandeiras e Vale Refeição e Vale Alimentação, além das principais bandeiras de cartões de crédito.</p>

            <p>E aí, impossível resistir a tantos motivos para dar um up na sua alimentação saudável, né? As marmitas fitness Liv Up reúnem tudo que você precisa para manter uma dieta saudável, sem exageros e sem uma trabalheira na cozinha. Escolha as suas preferidas e peça agora!</p>
       
        </Section2>

        <footer>
          
        </footer>

      </body>
    </Container>
  );
}
