import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminService } from './service/admin.service';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SignupComponent } from './signup/signup.component';

const appRoute: Routes = [
  {path: '', redirectTo: 'Login', pathMatch: 'full'},
  {path: 'Login', component: LoginComponent},
  {path: 'Signup', component: SignupComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Admin', component: AdminComponent, canActivate:[AuthGuard], data:{role:"ROLE_ADMIN"}},
  {path: 'User', component: UserComponent, canActivate:[AuthGuard], data:{role:"ROLE_USER"}},
  {path: 'Forbidden', component: ForbiddenComponent}
  ]
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AboutComponent,
    ForbiddenComponent,
    SignupComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi: true
    },
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
