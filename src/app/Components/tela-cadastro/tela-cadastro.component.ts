import { TelaListagemComponent } from './../tela-listagem/tela-listagem.component';
import { Banco } from '../../banco';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Conta } from './conta';
import { BancosService } from '../../bancos.service';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit{

  contas :Conta[];
  banco: Banco;
  formulario :any;

  code :string = localStorage.getItem('code')



  constructor(private service:BancosService){

  }

  ngOnInit(): void {

    this.verificaLocalStorage()
    this.exibirBanco()
    console.log(this.code)
    this.service.pesquisar(this.code).subscribe(dados => this.banco = dados);

    this.formulario = new FormGroup({
      code: new FormControl(),
      agencia: new FormControl(),
      conta: new FormControl(),
    })

  }

  exibirBanco(){
    if(localStorage.getItem('code')){
      this.code = localStorage.getItem('code');
    }else{
      this.code = null
    }
  }

  cadastrarConta(){
    this.formulario.value.code = localStorage.getItem('code')
    const conta : Conta = this.formulario.value
    this.contas.push(conta)
    localStorage.setItem("BD", JSON.stringify(this.contas))
    this.formulario.reset()
  }

  verificaLocalStorage(){
    if(localStorage.getItem('BD')){
      this.contas = JSON.parse(localStorage.getItem('BD'))
    }else{
      this.contas = []
    }
  }

}
