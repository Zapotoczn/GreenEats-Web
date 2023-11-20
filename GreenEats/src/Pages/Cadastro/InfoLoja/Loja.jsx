import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { LoginCadastro } from "./styles";
import { MainCadastro } from "./styles";
import { ButtonCadastro } from "../../../Components/Button/ButtonCadastro";
import { Inputs } from "./styles";

export const Loja = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MainCadastro>
      <LoginCadastro>
        <h1>Informaçoes da loja</h1>
        <p>Prenche abaixo as informaçoes sobre a sua futura loja</p>
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
          {errors?.cnpj?.type === "required" && (
            <p className="error-message">Cnpj obrigatório.</p>
          )}
        </Inputs>

        <Inputs>
          <label>Razão Social</label>
          <input
            className={errors?.social && "input-error"}
            type="text"
            placeholder="Razão social"
            {...register("social", {
              required: true,
            })}
          />
          {errors?.social?.type === "required" && (
            <p className="error-message">A razão social é obrigatório.</p>
          )}
        </Inputs>

        <Inputs>
          <label>Nome da loja</label>
          <input
            className={errors?.nomeLoja && "input-error"}
            type="text"
            placeholder="Exemplo: Loja do Marcio"
            {...register("nomeLoja", {
              required: true,
            })}
          />
          {errors?.nomeLoja?.type === "required" && (
            <p className="error-message">O Nome da loja é obrigatório.</p>
          )}
        </Inputs>

        <Inputs>
          <label>Telefone ou celular</label>
          <InputMask
            className={errors?.telefone && "input-error"}
            mask="(99) 99999-9999"
            maskChar=""
            type="text"
            placeholder="(11) 99999-9999"
            {...register("telefone", {
              required: true,
            })}
          />
          {errors?.telefone?.type === "required" && (
            <p className="error-message">O Telefone da loja é obrigatório.</p>
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
