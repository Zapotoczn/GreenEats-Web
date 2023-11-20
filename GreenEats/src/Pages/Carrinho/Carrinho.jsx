import { Box, Category, Content, Info, Info2, Name, PageTitle, Product, Qty, Corpo, Table, Aside } from "./styles";


export function Carrinho() {
  return (
  <Corpo>
    <header>
      <span>Carrinho de compras</span>
    </header>
    <main>
      <PageTitle>Seu Carrinho</PageTitle>
      <Content>
        <section>
          <Table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Product>
                    <img src="https://picsum.photos/100/120" alt="" />
                    <Info>
                      <Name>Nome do produto</Name>
                      <Category>Categoria</Category>
                    </Info>
                  </Product>
                </td>
                <td>R$ 120</td>
                <td>
                  <Qty>
                    <button>-</button>
                    <span>2</span>
                    <button>+</button>
                  </Qty>
                </td>
                <td>R$ 240</td>
                <td>
                  <button class="remove">X</button>
                </td>
              </tr>
              <tr>
                <td>
                  <Product>
                    <img src="https://picsum.photos/100/120" alt="" />
                    <Info>
                      <Name>Nome do produto</Name>
                      <Category>Categoria</Category>
                    </Info>
                  </Product>
                </td>
                <td>R$ 120</td>
                <td>
                  <Qty>
                  <button>-</button>
                    <span>2</span>
                    <button>+</button>
                  </Qty>
                </td>
                <td>R$ 240</td>
                <td>
                <button class="remove">X</button>
                </td>
              </tr>
              <tr>
                <td>
                  <Product>
                    <img src="https://picsum.photos/100/120" alt="" />
                    <Info>
                      <Name>Nome do produto</Name>
                      <Category>Categoria</Category>
                    </Info>
                  </Product>
                </td>
                <td>R$ 120</td>
                <td>
                  <Qty>
                  <button>-</button>
                    <span>2</span>
                    <button>+</button>
                  </Qty>
                </td>
                <td>R$ 240</td>
                <td>
                <button class="remove">X</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </section>
        <Aside>
          <Box>
            <header>Resumo da compra</header>
            <Info2>
              <div><span>Sub-total</span><span>R$ 418</span></div>
              <div><span>Frete</span><span>Gratuito</span></div>
              <div>
                <button>
                  Adicionar cupom de desconto
                  <i class="bx bx-right-arrow-alt"></i>
                </button>
              </div>
            </Info2>
            <footer>
              <span>Total</span>
              <span>R$ 418</span>
            </footer>
          </Box>
          <button>Finalizar Compra</button>
        </Aside>
      </Content>
    </main>
  </Corpo>
  )
}
