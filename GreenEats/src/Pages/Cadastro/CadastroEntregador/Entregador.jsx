import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { LoginCadastro } from "./styles";
import { MainCadastro } from "./styles";
import { ButtonCadastro } from "./../CadastroLoja/Components/Button/ButtonCadastro";
import { Inputs } from "./styles";

export const Entregador = () => {
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
    <MainCadastro>
      <LoginCadastro>
        <h1>Bem vindo! Entregador</h1>
        <p>Digite seus dados pessoais</p>
        <Inputs>
          <label>Nome completo</label>
          <input
            className={errors?.name && "input-error"}
            type="text"
            placeholder="Guilherme silva"
            {...register("name", { required: true })}
          />
          {errors?.name?.type === "required" && (
            <p className="error-message">Nome Obrigatorio.</p>
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
              // validate: (value) => isEmail(value),
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="error-message">O e-mail é obrigatório.</p>
          )}

          {errors?.email?.type === "validate" && (
            <p className="error-message">Email invalido.</p>
          )}
        </Inputs>

        <Inputs>
          <label htmlFor="cpfInput">CPF:</label>
          <InputMask
            className={errors?.cpf && "input-error"}
            mask="999.999.999-99"
            placeholder="000.000.000-00"
            maskChar=""
            type="text"
            id="cpfInput"
            {...register("cpf", {
              required: true,
            })}
          />
          {errors?.cpf?.type === "required" && (
            <p className="error-message">Cpf obrigatório.</p>
          )}

          {errors?.cpf?.type === "validate" && (
            <p className="error-message">Cpf invalido.</p>
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
          {errors?.senha?.type === "required" && (
            <p className="error-message">A senha é obrigatório.</p>
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
          {errors?.confirmacao?.type === "required" && (
            <p className="error-message">A senha é obrigatório.</p>
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
