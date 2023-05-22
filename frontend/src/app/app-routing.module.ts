import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MoviesDetailsComponent } from './components/pages/movies-details/movies-details.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'buscar/:search', component:HomeComponent},
  {path:'genero/:genero', component:HomeComponent},
  {path:'movies/:nombrePeli', component:MoviesDetailsComponent},
  {path:'login', component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
