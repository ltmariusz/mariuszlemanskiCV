import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { MenuNavigationModule } from 'src/app/components/menu-navigation/menu-navigation.module';

const routes: Routes =[
  {
    path:'',
    component: HomePageComponent
  }
]



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FooterModule,
    MenuNavigationModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class HomePageModule { }
