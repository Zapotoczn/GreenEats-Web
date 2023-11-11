import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { MainCadastro } from "./styles";
import { LoginCadastro } from "./styles";
import { ButtonCadastro } from "../CadastroLoja/Components/Button/ButtonCadastro";
import { Inputs } from "./styles";
import { InputEstado } from "./styles";
import { InputCidade } from "./styles";
import { InputCep } from "./styles";
import { InputNumero } from "./styles";
import { InputComplemento } from "./styles";

export const EnderecoLoja = () => {
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
        <h1>Endereço da loja</h1>
        <InputCep>
          <label htmlFor="cepInput">Cep</label>
          <InputMask
            className={errors?.cep && "input-error"}
            mask="99999-999"
            placeholder="00000-000"
            maskChar=""
            type="text"
            id="cepInput"
            {...register("cep", {
              required: true,
            })}
          />
          {errors?.cep?.type === "required" && (
            <p className="error-message">Cep Obrigatorio.</p>
          )}
          {errors?.cep?.type === "validate" && (
            <p className="error-message">Cep invalido.</p>
          )}
        </InputCep>

        <InputEstado>
          <label>Estado</label>
          <select
            className={errors?.estado && "input-error"}
            {...register("estado", {
              required: true,
            })}
          >
            <option value="">Selecione...</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="MG">Minas Gerais</option>
          </select>

          {errors?.estado?.type === "required" && (
            <p className="error-message">O Estado é obrigatória.</p>
          )}
        </InputEstado>

        <InputCidade>
          <label>Cidade</label>
          <input
            className={errors?.cidade && "input-error"}
            type="name"
            placeholder="Exemplo: São paulo"
            {...register("cidade", {
              required: true,
              // validate: (value) => isEmail(value),
            })}
          />
          {errors?.cidade?.type === "required" && (
            <p className="error-message">A Cidade é obrigatória.</p>
          )}
        </InputCidade>

        <Inputs>
          <label>Endereço</label>
          <input
            className={errors?.endereco && "input-error"}
            placeholder="Exemplo: Avenida Brasil"
            type="name"
            {...register("endereco", { required: true })}
          />
          {errors?.endereco?.type === "required" && (
            <p className="error-message">Endereço obrigatório.</p>
          )}
        </Inputs>

        <InputNumero>
          <label>Numero</label>
          <input
            className={errors?.numero && "input-error"}
            type="name"
            placeholder="Exemplo: 123"
            {...register("numero", {
              required: true,
              // validate: (value) => isEmail(value),
            })}
          />
          {errors?.numero?.type === "required" && (
            <p id="idNumero" className="error-message">
              O Numero é obrigatória.
            </p>
          )}
        </InputNumero>

        <InputComplemento>
          <label>Complemento</label>
          <input
            className={errors?.complemento && "input-error"}
            type="name"
            placeholder="Exemplo: Sala 1"
            {...register("complemento", {})}
          />
        </InputComplemento>

        <ButtonCadastro
          onClick={() => handleSubmit(onSubmit)()}
          title="Continuar"
        />
      </LoginCadastro>
    </MainCadastro>
  );
};
