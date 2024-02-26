import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeProjectsComponent } from './home-projects.component';



@NgModule({
  declarations: [
    HomeProjectsComponent
  ],
  imports: [
    CommonModule
  ], exports:[
    HomeProjectsComponent
  ]
})
export class HomeProjectsModule { }
