import { LightningElement } from "lwc";

export default class App extends LightningElement {

//criar variaveis, atributos.

Nome = "Gleiser Tarine";
Telefone = '99999-99999';
CPF='888.888.888-88';
Idade = 23;

Email = 'gleiser@gmail.com';
instagram = 'https://www.instagram.com/gleiser_tarine/';
linkedin = 'https://www.linkedin.com/in/gleiser-tarine-junker-a24736221/';

//comando padrão de visibilidade de modelo boleano
visible = true;

//uso da variavel da classe dentro do metodo
//trocarDiv(){}
//this.variavel
trocarDiv(){
  //metodo trocarDiv
//this.visible = false; //!this.visible

if(this.visible ==false){
  this.visible = true;

}else{
  this.visible= false;
  }
}

alterarValores(){
  this.Nome="Tarine Gleiser";
  this.Telefone="11111-11111";
  this.CPF="111.111.111-44";
  this.Idade= 32;
  this.Email="tarine@gmail.com"
 
}

}