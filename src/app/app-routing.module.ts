import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home.component';
import {ExcursionComponent} from './pages/excursion.component';
import {NotFoundComponent} from './pages/commons/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Home'}},
  {path: '404', component: NotFoundComponent},
  {path: 'excursion/:url', component: ExcursionComponent, data: {title: 'Nosy Sakatia | Akomba aventures'}},
  {path: 'home', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
