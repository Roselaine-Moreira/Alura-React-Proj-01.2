import React, { Component } from "react";
import CardNota from "../CardNota";

import "./style.css"

class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] }
    this._novasNotas = this._novasNotas.bind(this);
  }
  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas);
  }
  componentWillUnmount() {
    this.props.notas.desinscrever(this._novasNotas);
  }
  _novasNotas(notas) {
    this.setState({ ...this.state, notas })
  }


  render() {
    return (
      //Array.of criar um array e vou chamar o método of, e aqui posso colocar os itens que quero, tinha dois que eram de trabalho, 
      //vamos copiar aqui e colar, 
      //dois de trabalho e um de estudos. Esse array of está me criando um array com esses três valores aqui dentro.
      // E se quero percorrer um array posso usar um map. Vou dar um .map e vai ser um método que posso chamar.
      //map vai pegar cada um desses itens vai pegar cada um desses itens e vai chamar uma função usando o item como parâmetro. 
      //Ele vai pegar cada uma das categorias, como a gente chamou, e vai passar para uma função

      // <ul className="lista-notas">
      //   {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria,index) => {
      //       // Vou abrir o corpo da função
      //     return (// o return quer dizer retorna o elemento que eu quero que desenhe na tela
      //       //key é um identificador único, Ele quer que esse atributo seja único para cada elemento que ele está renderizando aqui
      //       // isso porque facilita o react entender quais elementos 
      //       //sofrerão alteração ou não e quais ele tem que redesenhar
      //       //o map passa o index também e esse index é usado como identificador. Minha key vai ser igual o index do array. 
      //       <li className="lista-notas_item" key={index}>
      //         {/* <div>{categoria}</div> */}
      //         <CardNota />
      //       </li>
      //     );
      //   })}
      // </ul>



      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>

              <CardNota
                indice={index}
                apagarNota={this.props.apagarNota}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;