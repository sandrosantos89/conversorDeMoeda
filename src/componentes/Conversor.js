import React, { Component } from 'react'
import './Conversor.css'

export default class Conversor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }
        this.converter = this.converter.bind(this);

    }

    converter() {
        let de_para = `${this.props.moedaA}-${this.props.moedaB}`;
        let url = `https://economia.awesomeapi.com.br/last/${de_para}`

        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[de_para = `${this.props.moedaA}${this.props.moedaB}`].bid;
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(3)
                this.setState({ moedaB_valor })
            })

    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event) => { this.setState({ moedaA_valor: event.target.value }) }}></input>
                <input type="button" value="Conversor" onClick={this.converter}></input>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )
    }
}
