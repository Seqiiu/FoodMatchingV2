import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/Login/signin/signin.component';
import { SignupComponent } from './components/Login/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Services/shared/authconfig.interceptor';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyListFoodComponent } from './components/ListOfProduct/my-list-food/my-list-food.component';
import { AddProductToListComponent } from './components/ListOfProduct/add-product-to-list/add-product-to-list.component';
import { AddNewProductToListComponent } from './components/ListOfProduct/add-new-product-to-list/add-new-product-to-list.component';
import { RegulaminComponent } from './regulamin/regulamin.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    MyListFoodComponent,
    AddProductToListComponent,
    AddNewProductToListComponent,
    RegulaminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
