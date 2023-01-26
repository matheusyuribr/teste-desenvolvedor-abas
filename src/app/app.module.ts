import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TelaListagemComponent } from './Components/tela-listagem/tela-listagem.component';
import { ListaContasComponent } from './lista-contas/lista-contas.component';
import { CadastroContasComponent } from './cadastro-contas/cadastro-contas.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaListagemComponent,
    ListaContasComponent,
    CadastroContasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,TelaListagemComponent]
})
export class AppModule { }
