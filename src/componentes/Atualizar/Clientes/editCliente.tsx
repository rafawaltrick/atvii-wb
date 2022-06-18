import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    tema: string
}


export default class EditCliente extends Component<props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <>
            <div className="row">
                <form className="col s12 box1">
                    <div className="row">
                        <h2 className="center">Editar Cliente</h2>
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Nome Social</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="RG" type="text" className="validate" />
                            <label htmlFor="RG">RG</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">CPF</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="telefone" type="text" className="validate" />
                            <label htmlFor="telefone">telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">E-mail</label>
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