import { Component } from "react";
import './listarProdutos.css'
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    tema: string
}


export default class Produtos extends Component<props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <>
                <div className="row">
                    <h3 className="center">
                        Produtos
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Preço</th>
                                <th>Descrição</th>
                                <th>Categoria</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Shampoo</td>
                                <td>10</td>
                                <td>cabelo liso</td>
                                <td>Limpeza capilar</td>
                                <td>10</td>
                                <td className="espaço">
                                    <a href=""><i className="material-icons espaço1">edit</i></a>
                                    <a href=""> <i className="material-icons espaço1 ">delete</i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Shampoo</td>
                                <td>10</td>
                                <td>cabelo liso</td>
                                <td>Limpeza capilar</td>
                                <td>10</td>
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