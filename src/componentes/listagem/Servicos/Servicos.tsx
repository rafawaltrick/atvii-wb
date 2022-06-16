import { Component } from "react";

import 'materialize-css/dist/css/materialize.min.css'

type props = {
    tema: string
}


export default class Servicos extends Component<props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <>
                <div className="row">
                    <h3 className="center">
                        Lista de Serviços Cadastrados
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <th>NomeServiço</th>
                                <th>preço</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>corte de cabelo</td>
                                <td>10</td>
                                <td>tesoura e maquina</td>
                                <td className="espaço">
                                    <a href=""><i className="material-icons espaço1">edit</i></a>
                                    <a href=""> <i className="material-icons espaço1 ">delete</i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>corte de cabelo</td>
                                <td>10</td>
                                <td>tesoura e maquina</td>
                                <td className="espaço">
                                    <a href=""><i className="material-icons espaço1">edit</i></a>
                                    <a href=""> <i className="material-icons espaço1 ">delete</i></a>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </>

        )
    }
}