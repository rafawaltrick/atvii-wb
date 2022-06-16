/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import './cliente.css'

type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    render() {
        

        return (
            <>
            <h3 className="center">Top Clientes</h3>
            <div className='row'>
                <div className='col s12 m12 l6 estilo'>
                    <div className="box">
                        <h5>Masculino</h5>
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Julian Gomes Rodrigues</td>
                                    <td>JulianGomesRodrigues@teleworm.us</td>
                                    <td>12 13647-9601</td>
                                </tr>
                                <tr>
                                    <td>Bruno Alves Lima</td>
                                    <td>BrunoAlvesLima@dayrep.com</td>
                                    <td>12 15843-0000</td>
                                </tr>
                                <tr>
                                    <td>José Gomes Ferreira</td>
                                    <td>JoseGomesFerreira@jourrapide.com</td>
                                    <td>12 3986-14580</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='col s12 m12 l6 estilo'>
                    <div className="box">
                        <h5>Feminino</h5>
                            <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Matheus Rocha Fernandes</td>
                                    <td>MatheusRochaFernandes@rhyta.com</td>
                                    <td>12 32678-0002</td>
                                </tr>
                                <tr>
                                    <td>Livia Goncalves Fernandes</td>
                                    <td>LiviaGoncalvesFernandes@dayrep.com</td>
                                    <td>12 56789-0123</td>
                                </tr>
                                <tr>
                                    <td>Emanuel Dias Barbosa</td>
                                    <td>EmanuelDiasBarbosa@dayrep.com</td>
                                    <td>12 12354-4356</td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>


                    <div className='col s12 m12 l4 estilo'>
                        <div className="box">
                            <h5>ranking dos que mais consumiram</h5>
                            <h6>Consumo</h6>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Quantidade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                    <div className='col s12 m12 l4 estilo'>
                        <div className="box">
                        <h5>ranking dos que mais consumiram</h5>
                        <h6>Consumo</h6>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='col s12 m12 l4 estilo'>
                        <div className="box">
                        <h5>ranking que mais consumiram</h5>
                        <h6>valor</h6>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
            </>
        )
    }
}