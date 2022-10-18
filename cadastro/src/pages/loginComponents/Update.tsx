import { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";

export default function () {

    let navigate = useNavigate()

    const updateUser: FormEventHandler<HTMLFormElement> = async ev => {
        ev.preventDefault()
        const { _name, email, password } = ev.currentTarget

        const sesidRequest = await fetch(`/api/logged/${sessionStorage.getItem('token')}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sesid: sessionStorage.getItem('token')
            })

        })

        if (sesidRequest.status >= 200 && sesidRequest.status <= 299) {
            const user = await sesidRequest.json()
            if (user == "nada") {
                alert("Usuário não está logado!")
                return
            }
            const updateRequest = await fetch(`/api/user/${user.id}`, {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: _name.value,
                    email: email.value,
                    password: password.value
                })
            })
            if (updateRequest.status >= 200 && updateRequest.status <= 299) {
                sessionStorage.clear()
                alert("Operação efetuada com sucesso. Faça login novamente.")
                return
            }
            const updateResponseData = await updateRequest.json()

            if (updateResponseData.error) {
                alert(updateResponseData.error)
                return
            }

            alert("Kono Dio DA!")
        } else {
            alert("Omae wa mou Error")
            return
        }
    }

    return <>
        <div id="updateBox">
            <form onSubmit={updateUser} id="updateForm">
                <h2>Alterar Dados</h2>
                <input name="_name" placeholder="Nome" />
                <input name="email" placeholder="Email" />
                <input name="password" placeholder="Senha" />
                <div id="updateButtonDiv">
                    <button type="submit" >Alterar Dados</button>
                    <button type="button" onClick={() => navigate("/login")}>Voltar</button>
                </div>
            </form>
        </div>
    </>
}