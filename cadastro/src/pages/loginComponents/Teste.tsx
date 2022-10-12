import { MouseEventHandler, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function () {
  const [name, setName] = useState("___")
  const [email, setEmail] = useState("___")
  let navigate = useNavigate()

  const buscarDados: MouseEventHandler<HTMLButtonElement> = async ev => {
    ev.preventDefault()
    const request = await fetch(`/api/logged/${localStorage.getItem('token')}`)

    if (request.status >= 200 && request.status <= 299) {
      const user = await request.json()
      setName(user.name)
      setEmail(user.email)
      return
    }

    alert("Deu ruim!")
  }

  return <>
    <div id="testeBox">
      <div id="tituloTeste">
        <h1 className="textoTeste">Teste</h1>
        <h2 className="textoTeste">Busca de dados do Usuário Logado</h2>
      </div>
      <div>
        <label>Nome: </label>{name}
      </div>
      <div>
        <label>Email: </label>{email}
      </div>
      <div id="testeButtonDiv">
        <button onClick={buscarDados}>Buscar</button>
        <button onClick={() => navigate("/login")}>Sair</button>
      </div>
    </div>
  </>
}