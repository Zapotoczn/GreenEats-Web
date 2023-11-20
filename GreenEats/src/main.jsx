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
import { Carrinho } from "./Pages/Carrinho/Carrinho";
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet"></link>


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
