import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}


export default class Clientes extends Component<props> {

    render() {
        return (
            <>
                <div className="row">
                    <h3 className="center">
                        Lista de Clientes
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Name Social</th>
                                <th>CPF</th>
                                <th>RG</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Rodrigo Ribeiro</td>
                                <td>Rodrigo</td>
                                <td>444222333-8</td>
                                <td>55.898.878/85</td>
                                <td>10-9820-2048</td>
                                <td className="espaço">
                                    <a href=""><i className="material-icons espaço1">local_grocery_store</i></a>
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