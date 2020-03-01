import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodosComponent } from './todos/todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardServiceService } from './service/route-guard-service.service';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:"" , component : LoginComponent},
  {path:"login" , component : LoginComponent},
  {path:"welcome/:name" , component : WelcomeComponent , canActivate :[RouteGuardServiceService]},
  {path:"todos", component:TodosComponent , canActivate :[RouteGuardServiceService]},
  {path:"todos/:id", component:TodoComponent , canActivate :[RouteGuardServiceService]},
  //{path:"menu", component:MenuComponent},
  //{path:"footer", component:FooterComponent},
  {path:"logout", component:LogoutComponent , canActivate :[RouteGuardServiceService]}, 
  {path:"**", component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
