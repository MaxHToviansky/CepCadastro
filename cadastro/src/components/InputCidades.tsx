import React from "react"
import { useEffect, useState } from "react"
import { EnderecoContext } from "../pages/EnderecoContext"



export default function () {
    const {uf, cidade, setCidade} = React.useContext(EnderecoContext)
    const [cidades, setCidades] = useState([])
    const [loading, setLoading] = useState(true)

    async function buscarCidades() {
        setLoading(true)
        if (!uf) return
        const requestCidades = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        const cidades = await requestCidades.json()
        setLoading(false)
        setCidades(cidades)
    }

    useEffect(() => {
        buscarCidades()
    }, [uf])

    return <>
        {loading
            ? "loading cidades"
            : <select>{cidades.map(({ nome }, idx) => <option key={idx}>{nome}</option>)}</select>
        }
    </>
}