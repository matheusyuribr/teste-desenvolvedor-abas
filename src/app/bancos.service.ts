import { Banco } from './banco';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BancosService {

  private readonly API = 'https://brasilapi.com.br/api/banks/v1'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Banco[]>(this.API)
  }

  pesquisar(input: string){
    return this.http.get<Banco>(this.API+"/"+input)
  }

}
