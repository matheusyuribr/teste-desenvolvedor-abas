import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TelaListagemComponent } from './Components/tela-listagem/tela-listagem.component';
import { TelaCadastroComponent } from './Components/tela-cadastro/tela-cadastro.component';
import { TelaPrincipalComponent } from './Components/tela-principal/tela-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaListagemComponent,
    TelaCadastroComponent,
    TelaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,TelaListagemComponent, TelaCadastroComponent, TelaPrincipalComponent]
})
export class AppModule { }
