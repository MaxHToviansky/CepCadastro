import { useEffect, useState } from "react"

type props = {
    uf: string
}

export default function({ uf }: props) {
    const [cidades, setCidades] = useState([])

    //     async function buscarCidades() {
    //         const requestCidades = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    //         const cidades = await requestCidades.json()
    //         setCidades(cidades)
    //     }
    
    //     buscarCidades() 

    return <>
        <select>
            {cidades.map(({ nome }) => <option>{nome}</option>)}
        </select>
    </>
}