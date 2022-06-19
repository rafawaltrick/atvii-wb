import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    tema: string
}


export default class Consumos extends Component<props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <>
            
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Consumo Cliente</h2>
                            <div className="input-field col s12">
                                <input id="first_name" type="text" />
                                <label htmlFor="first_name">CPF-Cliente</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="telefone" type="text" className="validate" />
                                <label htmlFor="telefone">Nome Servico</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">Nome Produto</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className={estiloBotao}  type="submit" name="action">Enviar
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