import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
    { path:'', redirectTo:'inicio', pathMatch:'full'},
    { path:'inicio', component: InicioComponent },
    { path:'login', component: LoginComponent },
    { path:'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


