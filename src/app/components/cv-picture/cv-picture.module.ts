import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvPictureComponent } from './cv-picture.component';



@NgModule({
  declarations: [
    CvPictureComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CvPictureComponent
  ]
})
export class CvPictureModule { }
