import React from "react";
import { useState } from "react";
import { EnderecoContext } from "../pages/EnderecoComponents/EnderecoContext";

export default function () {
    const { cep, setCep, setRua, setCidade, uf, setUf } = React.useContext(EnderecoContext)
    const [error, setError] = React.useState(false)

    const updateCep = async (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.currentTarget.value.length < 9) return
        setCep(ev.currentTarget.value)
        BuscarCep(ev.currentTarget.value)

    }

    const BuscarCep = async (cep: string) => {
        const getCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const responseCep = await getCep.json()
        if (responseCep.erro) {
            setError(responseCep.erro)
            console.log(`Cep Invalido. Error = ${error}`)
            return
            // Por algum motivo o codigo diz que o erro não ocorreu na primeira tentativa
        }
        setError(false)
        setUf(responseCep.uf)
        setCidade(responseCep.localidade)
        setRua(responseCep.logradouro)
    }

    const CepMask = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        ev.currentTarget.value = ev.currentTarget.value.replace(/\D/g, "")
        ev.currentTarget.value = ev.currentTarget.value.replace(/^(\d{5})(\d{3})/, "$1-$2")
    }

    return <>

        <input id="inputCep" maxLength={8} type="text" placeholder="Insira CEP" onKeyUp={
            (ev) => {
                CepMask(ev)
                updateCep(ev)
            }
        }
        />
    </>
}