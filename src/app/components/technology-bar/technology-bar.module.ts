import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyBarComponent } from './technology-bar.component';



@NgModule({
  declarations: [
    TechnologyBarComponent
  ],
  imports: [
    CommonModule,
  ], exports:[
    TechnologyBarComponent
  ]
})
export class TechnologyBarModule { }
