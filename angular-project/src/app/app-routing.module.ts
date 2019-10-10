import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HomeComponent } from './mentor/home/home.component';
import { ProgressComponent } from './user/progress/progress.component';
import { CompletedComponent } from './user/completed/completed.component';
import { LoginComponent } from './admin/login/login.component';
import { PermissionComponent } from './admin/permission/permission.component';
import { PaymentsComponent } from './admin/payments/payments.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { CommissionComponent } from './admin/commission/commission.component';
import { EdittechComponent } from './admin/edittech/edittech.component';
import { SearchComponent } from './search/search.component';
import { MprofileComponent } from './mentor/mprofile/mprofile.component';
import { EditskillsComponent } from './mentor/editskills/editskills.component';
import { HistoryComponent } from './mentor/history/history.component';
import { MprogressComponent } from './mentor/mprogress/mprogress.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup/mentor',
    component: MentorSignupComponent
  },
  {
    path: 'signup/user',
    component: UserSignupComponent
  },
  {
    path: 'user/profile',
    component: ProfileComponent
  },
  {
    path: 'mentor/home',
    component: HomeComponent
  },
  {
    path: 'mentor/profile',
    component: MprofileComponent
  },
  {
    path: 'mentor/editskill',
    component: EditskillsComponent
  },
  {
    path: 'mentor/viewHistory',
    component: MprogressComponent 
  },
  {
    path: 'mentor/progress',
    component: HistoryComponent
  },
  {
    path: 'trainings/browse',
    component : SearchComponent
  },
  {
    path: 'user/trainings/browse',
    component : SearchComponent
  },
  {
    path:'user/trainings/progress',
    component :ProgressComponent
  },
  {
    path:'user/trainings/completed',
    component:CompletedComponent
  },
  {
    path:'admin/signin',
    component:LoginComponent
  },
  {
    path:'admin/permission',
    component:PermissionComponent
  },
  {
    path:'admin/payments',
    component:PaymentsComponent
  },
  {
    path:'admin/reports',
    component:ReportsComponent
  },
  {
    path:'admin/commission',
    component:CommissionComponent
  },
  {
    path:'admin/technology',
    component:EdittechComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
