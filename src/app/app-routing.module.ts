import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/Login/signin/signin.component';
import { SignupComponent } from './components/Login/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MyListFoodComponent } from './components/ListOfProduct/my-list-food/my-list-food.component';

import { AuthGuard } from './Services/shared/auth.guard';
import { RegulaminComponent } from './regulamin/regulamin.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  {
    path: 'user-profile/:id',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {path: "regulamin", component: RegulaminComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}