import './App.css'
import TabDadosDeEndereco from './pages/EnderecoComponents/TabDadosDeEndereco'
import Login from "./pages/loginComponents/Login"
import Cadastro from "./pages/loginComponents/Cadastro"
import Teste from "./pages/loginComponents/Teste"
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


export default function () {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TabDadosDeEndereco/>}/>
        <Route path='/Login' element={<Login/>}/> 
        <Route path='/Cadastro' element={<Cadastro/>}/>
        <Route path='/teste' element={<Teste/>}/>
      </Routes>
      <Link to="/Login">Eita caraio esse é o link</Link>
    </BrowserRouter>
  </>
}