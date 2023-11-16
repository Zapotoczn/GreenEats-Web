import { LoginCadastro } from "./styles";
import { MainCadastro } from "./styles";
import { ImgFood } from "./styles";
import { ButtonText } from "./../../../Components/Button/ButtonText";
import { SVGIcon } from "./../../../Components/Svg/SVGIcon";

export function Cadastro() {
  return (
    <MainCadastro>
      <LoginCadastro>
        <SVGIcon />
        <h1>Qual cadastro gostaria de seguir</h1>
        <ButtonText title="Loja" />
        <ButtonText title="Entregador" />
        <ImgFood src="https://sophiederam.com/wp-content/uploads/2022/05/comida-saudavel-e-barata.jpg" />
      </LoginCadastro>
    </MainCadastro>
  );
}
