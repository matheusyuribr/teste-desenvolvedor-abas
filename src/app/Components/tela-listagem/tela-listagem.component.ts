import { Banco } from './banco';
import { Component, OnInit } from '@angular/core';
import { BancosService } from '../../bancos.service';

@Component({
  selector: 'app-tela-listagem',
  templateUrl: './tela-listagem.component.html',
  styleUrls: ['./tela-listagem.component.css']
})
export class TelaListagemComponent implements OnInit{


  bancos: Banco[] = [];


  constructor(private service:BancosService){
   }

  ngOnInit(){
    this.service.listar().subscribe(dados => this.bancos = dados);
   }

}
