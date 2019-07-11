import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {TvshowpageComponent} from './tvshowpage/tvshowpage.component';
import {AlltvshowspageComponent} from './alltvshowspage/alltvshowspage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'tvshow/:id', component: TvshowpageComponent},
  {path: 'alltvshows', component: AlltvshowspageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
