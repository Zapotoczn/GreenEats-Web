import { LoginCard } from "./styles";
import { MainLogin } from "./styles";
import { ImgFood } from "./styles";
import { ButtonLogin } from "../../Components/Button/ButtonLogin";

export function TipoLogin() {
  return (
    <MainLogin>
      <LoginCard>
        <h1>Receba suas compras em casa</h1>
        <p>O melhor aplicativo de entrega da </p>
        <p>cidade para entregar seus </p>
        <p>mantimentos frescos diarios</p>
        <ButtonLogin title="Login" />
        <ButtonLogin title="Cadastro" />
        <ImgFood src="https://sophiederam.com/wp-content/uploads/2022/05/comida-saudavel-e-barata.jpg" />
      </LoginCard>
    </MainLogin>
  );
}
