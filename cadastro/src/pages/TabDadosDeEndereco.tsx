import { useState } from "react";
import Banderias from "../components/Banderias";
import InputCep from "../components/InputCep";
import InputCidades from "../components/InputCidades";
import InputEstados from "../components/InputEstados";
import EnderecoContext from "./EnderecoContext";


export default function () {   
    return <>
        <EnderecoContext>
            <h1>Cadastro: Dados de Endereço</h1>
            <div className="UfMuniInput">
                <InputEstados />
                <InputCidades />
            </div>
            <Banderias />
            <div className="CepInput">
                <InputCep />
            </div>
        </EnderecoContext>
    </>
}