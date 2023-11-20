import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from "./Pages/Home/Home";
import { TipoLogin } from "./Pages/LoginCadastro/TipoLogin";
import { Cadastro } from "./Pages/Cadastro/Cadastro/CadastrTipo";
import { CadastroLoja } from "./Pages/Cadastro/CadastroLoja/CadastroLoja";
import { EnderecoLoja } from "./Pages/Cadastro/Endereço/EnderecoLoja";
import { Loja } from "./Pages/Cadastro/InfoLoja/loja";
import { Entregador } from "./Pages/Cadastro/CadastroEntregador/Entregador";
import { CadastroCliente } from "./Pages/Cadastro/Cliente/CadastroCliente";
import { Login } from "./Pages/Login/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/TipoLogin" element={<TipoLogin />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/CadastroLoja" element={<CadastroLoja />} />
        <Route path="/EnderecoLoja" element={<EnderecoLoja />} />
        <Route path="/Loja" element={<Loja />} />
        <Route path="/Entregador" element={<Entregador />} />
        <Route path="/CadastroCliente" element={<CadastroCliente />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
