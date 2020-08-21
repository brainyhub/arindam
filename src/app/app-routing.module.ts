import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggingComponent } from './logging/logging.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'Logging',
    component:LoggingComponent
  },
  {
  path:'Registration',
    component:RegistrationComponent
  },
  {
  path:'home',
    component:HomeComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
