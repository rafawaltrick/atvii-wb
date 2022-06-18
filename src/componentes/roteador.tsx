import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import Produtos from "./listagem/Produtos/Produtos";
import Servicos from "./listagem/Servicos/Servicos";
import Clientes from "./listagem/Clientes/Clientes";



type state = {
    tela: string
}



export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'TOP-Clientes'
        }
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems)
        });
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao tema="purple lighten-4" botoes={['TOP-Clientes', 'Cadastros','Produtos','Servicos','Clientes']}/>
        
        if (this.state.tela === 'TOP-Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-4" />
                </>
            )
        } if (this.state.tela === 'Cadastros') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            ) 
        }
        if (this.state.tela === 'Produtos') {
            return (
                <>
                {barraNavegacao}
                    <Produtos tema="purple lighten-4" />
                </>
            )
        }
        if (this.state.tela === 'Servicos') {
            return (
                <>
                {barraNavegacao}
                <Servicos tema="purple lighten-4" />
                </>
            )
        }
        if (this.state.tela === 'Clientes') {
            return (
                <>
                {barraNavegacao}
                <Clientes tema="purple lighten-4" />
                </>
            )
        }
        
    }
}