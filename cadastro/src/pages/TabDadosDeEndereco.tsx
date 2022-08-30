import { useState } from "react";
import InputCidades from "../components/InputCidades";
import InputEstados from "../components/InputEstados";

export default function() {
    const [uf, setUf] = useState("")

    return <>
        <h1>Cadastro: Dados ed Endereço</h1>
        <InputEstados setUf={setUf} />
        <InputCidades uf={uf} />
    </>
}