import './App.css'
import TabDadosDeEndereco from './pages/EnderecoComponents/TabDadosDeEndereco'
import Login from "./pages/loginComponents/Login"
import Cadastro from "./pages/loginComponents/Cadastro"
import Teste from "./pages/loginComponents/Teste"
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Update from './pages/loginComponents/Update'


export default function () {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TabDadosDeEndereco/>}/>
        <Route path='/Login' element={<Login/>}/> 
        <Route path='/Cadastro' element={<Cadastro/>}/>
        <Route path='/teste' element={<Teste/>}/>
        <Route path='/Update' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  </>
}