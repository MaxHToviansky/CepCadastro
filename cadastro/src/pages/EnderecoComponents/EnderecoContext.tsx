import React, { useState } from "react";

interface Endereco{
    uf: string,
    setUf: React.Dispatch<React.SetStateAction<string>>,
    cidade: string,
    setCidade: React.Dispatch<React.SetStateAction<string>>,
    cep: string,
    setCep: React.Dispatch<React.SetStateAction<string>>,
    rua: string,
    setRua: React.Dispatch<React.SetStateAction<string>>,
}

export const EnderecoContext = React.createContext({} as Endereco)

export default function EnderecoContextProvider(props: React.PropsWithChildren) {
    const [uf, setUf] = useState("")
    const [cidade, setCidade] = useState("")
    const [rua, setRua] = useState("")
    const [cep, setCep] = useState("")

    return <>
        <EnderecoContext.Provider value= 
        {{uf, setUf, cidade, setCidade, cep, setCep, rua, setRua}}>
        {props.children}
        </EnderecoContext.Provider>
    </>
}