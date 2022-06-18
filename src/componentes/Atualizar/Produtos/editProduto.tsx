import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    tema: string
}


export default class EditProduto extends Component<props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <>
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Editar Produto</h2>
                            <div className="input-field col s6">
                                <input id="first_name" type="text" />
                                <label htmlFor="first_name">Nome Produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" />
                                <label htmlFor="last_name">Preço</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="telefone" type="text" className="validate" />
                                <label htmlFor="telefone">Codigo do Produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">Descrição do produto</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">Categoria</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="telefone" type="text" className="validate" />
                                <label htmlFor="telefone">Quantidade</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className={estiloBotao} type="submit" name="action">Enviar
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </>

        )
    }
}