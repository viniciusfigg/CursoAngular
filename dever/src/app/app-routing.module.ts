import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistirComponent } from './componentes/assistir/assistir.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"cursos", component:CursosComponent},
  {path:"assistir", component:AssistirComponent},
    
  

  {path:"", redirectTo:"/main",pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
