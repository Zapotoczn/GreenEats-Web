import { useForm } from "react-hook-form";
// import { isEmail } from "validator";
import { LoginCadastro } from "./styles";
import { MainCadastro } from "./styles";
import { ButtonCadastro } from "./Components/Button/ButtonCadastro";
import { NomeCompleto } from "./styles";
import { Email } from "./styles";
import { Cnpj } from "./styles";

export const CadastroLoja = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // alert(JSON.stringify(data));
  };

  return (
    <MainCadastro>
      <LoginCadastro>
        <h1>Cadastre sua loja</h1>
        <p>Entre e ganhe mensalidade grátis</p>
        <NomeCompleto>
          <label>Nome</label>
          <input
            className={errors?.name && "input-error"}
            type="text"
            placeholder="Seu nome"
            {...register("name", { required: true })}
          />
        </NomeCompleto>

        <Email>
          <label>E-mail</label>
          <input
            className={errors?.email && "input-error"}
            type="email"
            placeholder="Seu email"
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
        </Email>

        <Cnpj>
          <label>Cnpj</label>
          <input
            className={errors?.name && "input-error"}
            type="text"
            placeholder="Seu cnpj"
            {...register("Cnpj", { required: true })}
          />
        </Cnpj>
        <ButtonCadastro
          onClick={() => handleSubmit(onSubmit)()}
          title="Continuar"
        />
      </LoginCadastro>
    </MainCadastro>
  );
};

// export default CadastroLoja;
