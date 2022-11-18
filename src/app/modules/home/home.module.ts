import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {WorkspacesModule} from "../workspaces/workspaces.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      }
    ]),
    WorkspacesModule
  ]
})
export class HomeModule {
}
