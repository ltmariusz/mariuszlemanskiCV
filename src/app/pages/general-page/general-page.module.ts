import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralPageComponent } from './general-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { MenuNavigationModule } from 'src/app/components/menu-navigation/menu-navigation.module';
import { TitleWithPictureModule } from 'src/app/components/title-with-picture/title-with-picture.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    component: GeneralPageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./../home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'cv',
        loadChildren: () => import('./../cv-page/cv-page.module').then(m=>m.CvPageModule)
      }
    ]
  },

]



@NgModule({
  declarations: [
    GeneralPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FooterModule,
    MenuNavigationModule,
    TitleWithPictureModule,
    // BrowserAnimationsModule
  ],
  exports: [
    GeneralPageComponent
  ]
})
export class GeneralPageModule { }
