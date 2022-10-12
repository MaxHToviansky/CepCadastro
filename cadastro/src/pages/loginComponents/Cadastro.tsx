import React from "react";
import { Dispatch, FormEventHandler, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

export default function () {
  let navigate = useNavigate()
  const enviarDados: FormEventHandler<HTMLFormElement> = async ev => {
    ev.preventDefault()
    const { _name, email, password } = ev.currentTarget

    const request = await fetch(`/api/user/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: _name.value,
        email: email.value,
        password: password.value
      })
    })

    if (request.status >= 200 && request.status <= 299) {
      alert("PARABAEINZ!")
      return
    }

    const responseData = await request.json()

    if (responseData.error) {
      alert(responseData.error)
      return
    }

    alert("Cara! deu um erro tão foda, que eu nem sei o que foi!")
  }

  return <>
    <div id="cadastroBox">
      <form onSubmit={enviarDados} id="cadastroForm">
        <h1>Cadastro</h1>
        <input name="_name" placeholder="name" />
        <input name="email" placeholder="email" />
        <input name="password" type="password" placeholder="password" />
        <div id="cadastroButtonDiv">
          <button>cadastrar-se</button>
          <button onClick={() => navigate("/login")}>Voltar</button>
        </div>
      </form>
    </div>
  </>
}
