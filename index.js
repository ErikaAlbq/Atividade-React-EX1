import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Ela from './componentes/Ela';
import Ele from './componentes/Ele';
import estilos from "./componentes/estilos";


class App extends Component {
  constructor() {
    super();
    this.state = {
      q_clicou: 'Ninguem'
    };
  }

 alterar = (origem)=>{
   this.setState({
     q_clicou:origem
   });
 }




  render() {
    return (
   <div style={estilos.container}>
         <p style={estilos.titulo}>Quem clicou? {this.state.q_clicou}</p>
         <div style={estilos.linha}>
            <Ela alterar={this.alterar} />
            <Ele alterar={this.alterar} />
       </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
