import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TitleWithPictureModule } from 'src/app/components/title-with-picture/title-with-picture.module';
import { TechnologyBarModule } from 'src/app/components/technology-bar/technology-bar.module';
import { HomeProjectsModule } from 'src/app/components/home-projects/home-projects.module';

const routes: Routes =[
  {
  path:'',
  component:HomePageComponent,
  data: { animation: 'HomePage' }
  }
]

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TitleWithPictureModule,
    TechnologyBarModule,
    HomeProjectsModule
  ]
})
export class HomePageModule { }
