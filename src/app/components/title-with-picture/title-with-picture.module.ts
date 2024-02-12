import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleWithPictureComponent } from './title-with-picture.component';



@NgModule({
  declarations: [
    TitleWithPictureComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    TitleWithPictureComponent
  ]
})
export class TitleWithPictureModule { }
