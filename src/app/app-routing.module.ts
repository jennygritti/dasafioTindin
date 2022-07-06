import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
    { path:'', redirectTo:'inicio', pathMatch:'full'},
    { path:'inicio', component: InicioComponent },
    { path:'login', component: LoginComponent },
    { path:'footer', component: FooterComponent },
    { path: 'detalhe-produto', component: DetalheProdutoComponent},
    { path: 'cadastro-produto', component: CadastroProdutoComponent},
    { path: 'carrinho', component: CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


