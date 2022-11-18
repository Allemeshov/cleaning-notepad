import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspacesComponent } from './components/workspaces/workspaces.component';



@NgModule({
  declarations: [
    WorkspacesComponent
  ],
  exports: [
    WorkspacesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WorkspacesModule { }
