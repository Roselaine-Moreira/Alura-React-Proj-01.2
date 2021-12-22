import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./dados/Categorias";
import ArryDeNotas from "./dados/Notas";
class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   notas: [],
    //   categorias: []
    // };

    this.categorias = new Categorias();
    this.notas = new ArryDeNotas();
  }

  // criarNota(titulo, texto, categoria) {
  //   const novaNota = { titulo, texto, categoria };
  //   const novoArrayNotas = [...this.state.notas, novaNota]
  //   const novoEstado = {
  //     notas: novoArrayNotas
  //   }
  //   this.setState(novoEstado)
  // }

  // deletarNota(index) {
  //   let arrayNotas = this.state.notas;
  //   // arrayNotas.splice(0, 1); splice vai apagar a partir do índice 0, um elemento

  //   // recebe um indice então ele  vai excluir o indice recebido, 1 elemento
  //   arrayNotas.splice(index, 1);
  //   this.setState({ nota: arrayNotas }); // setState é um novo estado
  // }

  // adicionarCategoria(nomeCategoria) {
  //   const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
  //   const novoEstado = {...this.state, categorias:novoArrayCategorias};
  //   this.setState(novoEstado)
  // }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          // categorias={this.state.categorias}
          categorias={this.categorias}
          // criarNota={this.criarNota.bind(this)}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            // categorias={this.state.categorias}
            categorias={this.categorias}
            // adicionarCategoria={this.adicionarCategoria.bind(this)} 
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            />

          {/* Seria tipo isso o que está acontecento:
        new ListaNotas ({notas:this.notas}) */}
          <ListaDeNotas
            notas={this.notas}
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            />
        </main>
      </section>
    );
  }
}

export default App;
