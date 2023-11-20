import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { LoginCadastro } from "./styles";
import { MainCadastro } from "./styles";
import { ButtonCadastro } from "../../../Components/Button/ButtonCadastro";
import { Inputs } from "./styles";
import { SVGIcon } from "./../../../Components/Svg/SVGIcon";

const schema = Yup.object().shape({
  name: Yup.string().required("Nome obrigatório"),
  email: Yup.string().email("Email invalido").required("Email obrigatório"),
  cnpj: Yup.string().required("Cnpj obrigatório"),
  senha: Yup.string()
    .min(6, "A senha precisa ter 6 caracteres")
    .required("Campo obrigatória"),
  confirmacao: Yup.string()
    .oneOf([Yup.ref("senha"), null], "Senha diferente")
    .required("Campo obrigatoório"),
});

export const CadastroLoja = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MainCadastro>
      <LoginCadastro>
        <SVGIcon />
        <h1>Cadastre sua loja</h1>
        <p>Entre e ganhe mensalidade grátis</p>
        <Inputs>
          <label>Nome completo</label>
          <input
            className={errors?.name && "input-error"}
            type="text"
            placeholder="Guilherme silva"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </Inputs>

        <Inputs>
          <label>E-mail</label>
          <input
            className={errors?.email && "input-error"}
            type="email"
            placeholder="email@email.com"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </Inputs>

        <Inputs>
          <label htmlFor="cnpjInput">CNPJ:</label>
          <InputMask
            className={errors?.cnpj && "input-error"}
            mask="99.999.999/9999-99"
            placeholder="00.000.000/0000-00"
            maskChar=""
            type="text"
            id="cnpjInput"
            {...register("cnpj", {
              required: true,
            })}
          />
          {errors.cnpj && (
            <p className="error-message">{errors.cnpj.message}</p>
          )}
        </Inputs>

        <Inputs>
          <label>Senha</label>
          <input
            className={errors?.senha && "input-error"}
            type="password"
            placeholder="Senha"
            {...register("senha", {
              required: true,
            })}
          />
          {errors.senha && (
            <p className="error-message">{errors.senha.message}</p>
          )}
        </Inputs>

        <Inputs>
          <label>Confirmar senha</label>
          <input
            className={errors?.confirmacao && "input-error"}
            type="password"
            placeholder="Confirmar senha"
            {...register("confirmacao", {
              required: true,
            })}
          />
          {errors.confirmacao && (
            <p className="error-message">{errors.confirmacao.message}</p>
          )}
        </Inputs>
        <ButtonCadastro
          onClick={() => handleSubmit(onSubmit)()}
          title="Continuar"
        />
      </LoginCadastro>
    </MainCadastro>
  );
};
