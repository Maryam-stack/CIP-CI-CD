import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ToteBagsComponent } from './tote-bags/tote-bags.component';
import { ToteBagDetailComponent } from './tote-bag-detail/tote-bag-detail.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './/user-profile/user-profile.component';
import { AuthGuard } from "./shared/auth.guard";

const routes: Routes = [
  //{ path: '', redirectTo: '/log-in', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent},
  // { path: 'details/:id', component: ToteBagDetailComponent, canActivate: [AuthGuard] },
  // { path: 'toteBags', component: ToteBagsComponent, canActivate: [AuthGuard] },
  // { path: 'log-in', component: SigninComponent },
  // { path: 'sign-up', component: SignupComponent },
  // { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'details/:id', component: ToteBagDetailComponent },
  { path: 'toteBags', component: ToteBagsComponent },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'user-profile/:id', component: UserProfileComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
