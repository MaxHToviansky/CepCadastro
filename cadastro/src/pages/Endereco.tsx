import React from "react";
import { EnderecoContext } from "./EnderecoContext";

export default function () {
    const { uf, cidade, rua} = React.useContext(EnderecoContext)
    
    
    
    return <>
        <div id="endereco-box">
            <h2 id="legendaEnd">Seus dados de Endereço:</h2>
            <div id="ufCidEnd"><span className="boldFont">Estado:</span> {uf} <span className="boldFont">Cidade:</span> {cidade} </div>
            <div id="ruaEnd"><span className="boldFont">Rua:</span> {rua}</div>
        </div>
    </>
}