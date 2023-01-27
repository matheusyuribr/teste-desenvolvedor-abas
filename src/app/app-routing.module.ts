import { TelaCadastroComponent } from './Components/tela-cadastro/tela-cadastro.component';
import { TelaListagemComponent } from './Components/tela-listagem/tela-listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPrincipalComponent } from './Components/tela-principal/tela-principal.component';

const routes: Routes = [
  {path: 'bancos', component: TelaListagemComponent},
  {path: 'cadastro', component: TelaCadastroComponent},
  {path: '', component: TelaPrincipalComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
