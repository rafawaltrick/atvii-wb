import { Routes,Route, Navigate } from "react-router-dom";
import ListaCliente from "../listaCliente";
import FormularioCadastroCliente from "../formularioCadastroCliente";
import Produtos from "../listagem/Produtos/Produtos";
import Servicos from "../listagem/Servicos/Servicos";
import Clientes from "../listagem/Clientes/Clientes";
import BarraNavegacao from "../barraNavegacao";
import { Component } from "react";
import EditCliente from "../Atualizar/Clientes/editCliente";

type state = {
}

export default class AppRoutes extends Component <{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'TOP-Clientes'
        }
        
    }
    render(){

    return (
        <Routes>
            <Route path="/TOP-Clientes" element={<ListaCliente tema="purple lighten-4"/>} />
            <Route path="/" element={<ListaCliente tema="purple lighten-4"/>} />
            <Route path="/Cadastros" element={<FormularioCadastroCliente tema="purple lighten-4"/>} />
            <Route path="/Produtos" element={<Produtos tema="purple lighten-4"/>} />
            <Route path="/Servicos" element={<Servicos tema="purple lighten-4"/>} />
            <Route path="/Clientes" element={<Clientes tema="purple lighten-4"/>} />
            <Route path="/editCliente" element={<EditCliente tema="purple lighten-4"/>} />
        </Routes> 
    );
    }
}


