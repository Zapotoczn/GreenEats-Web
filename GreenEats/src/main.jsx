import React from "react";
import ReactDOM from "react-dom/client";
// import { Home } from "./Pages/Home/Home";
// import { Login } from "./Pages/Login/Login";
// import { Cadastro } from "./Pages/Cadastro/Cadastro/CadastrTipo";
// import { CadastroLoja } from "./Pages/Cadastro/CadastroLoja/CadastroLoja";
import { EnderecoLoja } from "./Pages/Cadastro/Endereço/EnderecoLoja";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EnderecoLoja />
  </React.StrictMode>
);
