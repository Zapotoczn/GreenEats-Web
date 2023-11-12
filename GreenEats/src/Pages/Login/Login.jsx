import { LoginCard } from "./styles";
import { useForm } from "react-hook-form";
import { MainLogin } from "./styles";
import { ImgFood } from "./styles";
import { ButtonText } from "./../../Components/Button/ButtonText";
import { Inputs } from "./styles";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // console.log(JSON.stringify(data));
  };

  return (
    <MainLogin>
      <LoginCard>
        <h1>Entre com sua conta</h1>
        <Inputs>
          <input
            className={errors?.email && "input-error"}
            type="text"
            placeholder="E-mail"
            {...register("email", { required: true })}
          />
          {/* {errors?.email?.type === "required" && (
            <p className="error-message">Nome Obrigatorio.</p>
          )} */}
        </Inputs>

        <Inputs>
          <input
            className={errors?.senha && "input-error"}
            type="password"
            placeholder="Senha"
            {...register("confirmacao", {
              required: true,
            })}
          />
          <span>
            <a href="">Esqueceu sua senha?</a>
          </span>
          {/* {errors?.senha?.type === "required" && (
            <p className="error-message">A senha é obrigatório.</p>
          )} */}
        </Inputs>

        <ButtonText onClick={() => handleSubmit(onSubmit)()} title="Entrar" />
        <h3>Ou</h3>
        <ButtonText
          onClick={() => handleSubmit(onSubmit)()}
          title="Cadastre-se"
        />
        <ImgFood src="https://sophiederam.com/wp-content/uploads/2022/05/comida-saudavel-e-barata.jpg" />
      </LoginCard>
    </MainLogin>
  );
}
