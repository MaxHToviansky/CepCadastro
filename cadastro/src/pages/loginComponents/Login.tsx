import React from "react";
import { Dispatch, FormEventHandler, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import Logoff from "./Logoff";


export default function () {

  let navigate = useNavigate()
  const enviarDados: FormEventHandler<HTMLFormElement> = async ev => {
    ev.preventDefault()
    const { email, password } = ev.currentTarget


    const request = await fetch(`/api/login/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })

    const responseData = await request.json()

    if (request.status >= 200 && request.status <= 299) {
      sessionStorage.setItem("token", responseData.sesid)
      alert("PARABAEINZ!")
      return
    }

    if (responseData.error) {
      alert(responseData.error)
      return
    }

    alert("Cara! deu um erro tão foda, que eu nem sei o que foi!")
  }

  return <>
    <div id="loginBox">
      <form onSubmit={enviarDados} id="loginForm">
        <h1>Login</h1>
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <div id="loginButtonDiv">
          <button type="submit" >Entrar</button>
          <button type="button" onClick={() => navigate("/cadastro")}>Cadastrar-se</button>
          <button type="button" onClick={() => navigate("/teste")}>Teste</button>
          <button type="button" onClick={() => navigate("/update")}>Alterar Dados</button>
          <button type="button" onClick={() => navigate("/")} id="buttonHome">Pagina inicial</button>
          <Logoff></Logoff>
        </div>
      </form>
    </div>
  </>
}