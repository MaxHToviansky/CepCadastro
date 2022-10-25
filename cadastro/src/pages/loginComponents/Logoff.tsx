import { MouseEventHandler } from "react";

export default function () {

    const logoff: MouseEventHandler<HTMLButtonElement> = async ev => {
        ev.preventDefault()
        if (!sessionStorage.getItem('token')) {
            alert("Usuário não está logado!")
            return
        }
        const request = await fetch(`/api/logoff/${sessionStorage.getItem('token')}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sesid: sessionStorage.getItem('token')
            })
        })
        if (request.status >= 200 && request.status <= 299) {
            sessionStorage.clear()
            alert("Usuário deslogado")
            return
        }
        alert("ono")
    }
    return <>
        <button onClick={logoff} type="button">Logoff</button>
    </>
}