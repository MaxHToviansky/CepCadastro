import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Bandeiras from "../../components/Bandeiras";
import InputCep from "../../components/InputCep";
import InputCidades from "../../components/InputCidades";
import InputEstados from "../../components/InputEstados";

import Endereco from "./Endereco";
import EnderecoContextdiv from "./EnderecoContext";

export default function () {
    let navigate = useNavigate()
    return <>
        <EnderecoContextdiv>
            <h1>Cadastro: Dados de Endereço</h1>
            <div id="divDados">
                <Bandeiras />
                <div id="inputUf-box">
                    <InputEstados />
                </div>
                <div id="inputCid-box">
                    <InputCidades />
                </div>
                <div id="inputCep-box">
                    <InputCep />
                </div>
                <Endereco />
                <div id="loginHome">
                    <button onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>
        </EnderecoContextdiv>
    </>
}