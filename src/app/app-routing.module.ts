import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { GeneralPageModule } from './pages/general-page/general-page.module';

const routes: Routes = [
  {
    path:'', 
    loadChildren:( ) => import('./pages/general-page/general-page.module').then(m => m.GeneralPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
