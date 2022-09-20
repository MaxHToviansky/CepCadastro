import React from "react"
import { EnderecoContext } from "../pages/EnderecoContext"

export default function() {
    const { uf } = React.useContext(EnderecoContext)

    return <img src={`https://raw.githubusercontent.com/bgeneto/bandeiras-br/master/imagens/${uf}.png`} />
}