import React from "react";
import { EnderecoContext } from "./EnderecoContext";

export default function () {
    const { uf, cidade, rua} = React.useContext(EnderecoContext)
    
    
    
    return <>
        <div>
            <h2>Seus dados de Endereço:</h2>
            <div>Estado: {uf} Cidade: {cidade} </div>
            <div>Rua: {rua}</div>
        </div>
    </>
}