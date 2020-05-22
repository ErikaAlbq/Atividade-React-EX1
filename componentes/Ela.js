import React,{ Component } from "react";
import estilos from "./estilos";


export default class Ela extends Component{

render(){
  return (


  <button
    style={estilos.botao_ela}
    onClick={this.props.alterar.bind(this, "ela")}
 >
  ELA
   </button>

 
 );

 }

}