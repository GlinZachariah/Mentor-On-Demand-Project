import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { SigninComponent } from './signin/signin.component';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MentorModule } from './mentor/mentor.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { MainService } from './main.service';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MentorModule,
    UserModule,
    AdminModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    ResultComponent,
    SearchComponent,
    SigninComponent,
    MentorSignupComponent,
    UserSignupComponent,
    HomepageComponent,
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
