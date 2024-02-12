import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TitleWithPictureModule } from 'src/app/components/title-with-picture/title-with-picture.module';

const routes: Routes =[
  {
  path:'',
  component:HomePageComponent
  }
]

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TitleWithPictureModule
  ]
})
export class HomePageModule { }
