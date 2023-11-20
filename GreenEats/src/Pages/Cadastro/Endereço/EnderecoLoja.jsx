import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { MainCadastro } from "./styles";
import { LoginCadastro } from "./styles";
import { ButtonCadastro } from "./../../../Components/Button/ButtonCadastro";
import { Inputs } from "./styles";
import { DuoInput } from "./styles";

const schema = Yup.object().shape({
  cep: Yup.string().required("Cep obrigatório"),
  estado: Yup.string().required("Estado obrigatório"),
  cidade: Yup.string().required("Cidade obrigatório"),
  endereco: Yup.string().required("Endereço obrigatório"),
  numero: Yup.string().required("Numero obrigatório"),
  complemento: Yup.string(),
});

export const EnderecoLoja = () => {
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
        <h1>Endereço da loja</h1>
        <Inputs>
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
          {errors.cep && <p className="error-message">{errors.cep.message}</p>}
        </Inputs>

        <DuoInput>
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
          {errors.estado && (
            <p className="error-message">{errors.estado.message}</p>
          )}

          <label>Cidade</label>
          <input
            className={errors?.cidade && "input-error"}
            type="name"
            placeholder="Exemplo: São paulo"
            {...register("cidade", {
              required: true,
            })}
          />
          {errors.cidade && (
            <p className="error-message">{errors.cidade.message}</p>
          )}
        </DuoInput>

        <Inputs>
          <label>Endereço</label>
          <input
            className={errors?.endereco && "input-error"}
            placeholder="Exemplo: Avenida Brasil"
            type="name"
            {...register("endereco", { required: true })}
          />
          {errors.endereco && (
            <p className="error-message">{errors.endereco.message}</p>
          )}
        </Inputs>

        <DuoInput>
          <label>Numero</label>
          <input
            className={errors?.numero && "input-error"}
            type="name"
            placeholder="Exemplo: 123"
            {...register("numero", {
              required: true,
            })}
          />
          {errors.numero && (
            <p className="error-message">{errors.numero.message}</p>
          )}

          <label>Complemento</label>
          <input
            className={errors?.complemento && "input-error"}
            type="name"
            placeholder="Exemplo: Sala 1"
            {...register("complemento", {})}
          />
        </DuoInput>

        <ButtonCadastro
          onClick={() => handleSubmit(onSubmit)()}
          title="Continuar"
        />
      </LoginCadastro>
    </MainCadastro>
  );
};
