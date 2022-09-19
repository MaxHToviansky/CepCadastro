import { useState } from "react";
import InputCep from "../components/InputCep";
import InputCidades from "../components/InputCidades";
import InputEstados from "../components/InputEstados";
import EnderecoContext from "./EnderecoContext";

export default function() {
    const [uf, setUf] = useState("")

    return <>
        <EnderecoContext>
        <h1>Cadastro: Dados de Endereço</h1>
        <InputEstados setUf={setUf} />
        <InputCidades uf={uf} />
        <InputCep/>
        </EnderecoContext>
    </>
}