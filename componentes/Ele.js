import React,{ Component } from "react";
import estilos from "./estilos";


export default class Ele extends Component{

render(){
  return (

  <button
    style={estilos.botao_ele}
    onClick={this.props.alterar.bind(this, "ele")}
 >
  ELE
   </button>
  );
  
  }

}