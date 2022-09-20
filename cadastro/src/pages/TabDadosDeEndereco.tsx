import React from "react";
import { useState } from "react";

import Bandeiras from "../components/Bandeiras";
import InputCep from "../components/InputCep";
import InputCidades from "../components/InputCidades";
import InputEstados from "../components/InputEstados";

import Endereco from "./Endereco";
import EnderecoContextdiv from "./EnderecoContext";

export default function () {   
    return <>
        <EnderecoContextdiv>
            <h1>Cadastro: Dados de Endereço</h1>
            <Bandeiras />
            <div className="UfMuniInput">
                <InputEstados />
                <InputCidades />
            </div>
            <div className="CepInput">
                <InputCep />
            </div>
            <Endereco/>
        </EnderecoContextdiv>
    </>
}