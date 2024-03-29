import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvPageComponent } from './cv-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CvPictureModule } from 'src/app/components/cv-picture/cv-picture.module';
import { ExtraActivityModule } from 'src/app/components/extra-activity/extra-activity.module';
import { CvJobsModule } from 'src/app/components/cv-jobs/cv-jobs.module';

const routes: Routes = [
  {
    path: '',
    component: CvPageComponent,
    data: { animation: 'CvPage' },
  },
];

@NgModule({
  declarations: [CvPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CvPictureModule,
    ExtraActivityModule,
    CvJobsModule,
  ],
})
export class CvPageModule {}
