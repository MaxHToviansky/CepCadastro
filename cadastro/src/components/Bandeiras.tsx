import React from "react"
import { EnderecoContext } from "../pages/EnderecoComponents/EnderecoContext"
import BR from "../assets/Bandeiras/BR.png"

export default function() {
    const { uf } = React.useContext(EnderecoContext)
    if (uf == "") return <div id="imgBandeira"><img src={BR}/></div>
    
    if(uf == undefined) return <div id="imgBandeira"><img src={BR}/></div>

    return <div id="imgBandeira"><img src={`https://raw.githubusercontent.com/bgeneto/bandeiras-br/master/imagens/${uf}.png`}/></div>
}