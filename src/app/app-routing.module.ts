import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MissionlistComponent} from '../app/missionlist/missionlist.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '' , component: AppComponent},
  {path:'missionlist' , component:MissionlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
