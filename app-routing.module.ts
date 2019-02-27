import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';

const app_routes: Routes = [
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    { path: 'app', component: HomeComponent },
      { path: 'home', component: HomepageComponent }
      
  ];
  @NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }
  