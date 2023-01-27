import { Conta } from './../tela-cadastro/conta';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit{

  contas :Conta[]

  constructor(){

  }

  ngOnInit(){
    this.exibirContas()
  }



  exibirContas(){
    if(localStorage.getItem('BD')){
      this.contas = JSON.parse(localStorage.getItem('BD'))
    }else{
      this.contas = []
    }
  }

}
