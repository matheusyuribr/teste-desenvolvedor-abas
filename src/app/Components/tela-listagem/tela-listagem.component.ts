import { Banco } from '../../banco';
import { Component, OnInit } from '@angular/core';
import { BancosService } from '../../bancos.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tela-listagem',
  templateUrl: './tela-listagem.component.html',
  styleUrls: ['./tela-listagem.component.css']
})
export class TelaListagemComponent implements OnInit{


  bancos: Banco[] = [];
  public code: string;
  public cod: string;
  formulario: any;


  pesquisarBanco(cod){
    console.log(cod)
    localStorage.setItem('code', cod);
  }



  constructor(private service:BancosService){

   }

  ngOnInit(){
    this.service.listar().subscribe(dados => this.bancos = dados);


   }

}
