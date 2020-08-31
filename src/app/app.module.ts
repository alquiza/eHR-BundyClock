import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AuthInterceptor } from './shared/helpers/auth/auth.interceptor';

import { AttendanceService } from './shared/services/attendance.service';
import { UserService } from './shared/services/user/user.service';
import { ApiService } from './api.service';
import { AuthService } from './shared/services/auth/auth.service';
import { IdentityService } from './shared/services/identity/identity.service';
import { EmployeeService } from './shared/services/employee/employee.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';

import { from } from 'rxjs';
import { MaterialModule } from './shared/module/material/material.module';

import { AttendanceReadAllComponent } from './cruds/attendance/attendance-read-all/attendance-read-all.component';
import { AttendanceReadOneComponent } from './cruds/attendance/attendance-read-one/attendance-read-one.component';
import { AttendanceDashboardComponent } from './dashboard/attendance-dashboard/attendance-dashboard.component';
import { AttendanceDefaultComponent } from './default/attendance-default/attendance-default.component';
import { AttendanceSidenavComponent } from './sidenav/attendance-sidenav/attendance-sidenav.component';
import { AttendanceComponent } from './main/attendance/attendance.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { MainComponent } from './main/main.component';
import { CrudsComponent } from './cruds/cruds.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ClocksComponent } from './shared/clocks/clocks.component';
import { AnalogComponent } from './shared/clocks/analog/analog.component';
import { DigitalComponent } from './shared/clocks/digital/digital.component';
import { AttendanceCardComponent } from './shared/cards/attendance-card/attendance-card.component';
import { ShiftCardComponent } from './shared/cards/shift-card/shift-card.component';
import { GemphilComponent } from './main/gemphil/gemphil.component';
import { DailyTimeInComponent } from './shared/cards/attendance-card/daily-time-in/daily-time-in.component';
import { DailyTimeOutComponent } from './shared/cards/attendance-card/daily-time-out/daily-time-out.component';
import { UserCreateComponent } from './cruds/user/user-create/user-create.component';
import { UserReadAllComponent } from './cruds/user/user-read-all/user-read-all.component';
import { UserReadOneComponent } from './cruds/user/user-read-one/user-read-one.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { UserDefaultComponent } from './default/user-default/user-default.component';
import { UserComponent } from './main/user/user.component';
import { UserSidenavComponent } from './sidenav/user-sidenav/user-sidenav.component';
import { LoginComponent } from './shared/login/login.component';
import { AdminComponent } from './main/admin/admin.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { AdminDefaultComponent } from './default/admin-default/admin-default.component';
import { AdminSidenavComponent } from './sidenav/admin-sidenav/admin-sidenav.component';
import { IdentityComponent } from './main/identity/identity.component';
import { IdentityCreateComponent } from './cruds/identity/identity-create/identity-create.component';
import { IdentityReadAllComponent } from './cruds/identity/identity-read-all/identity-read-all.component';
import { IdentityReadOneComponent } from './cruds/identity/identity-read-one/identity-read-one.component';
import { EmployeeComponent } from './main/employee/employee.component';
import { EmployeeCreateComponent } from './cruds/employee/employee-create/employee-create.component';
import { EmployeeReadAllComponent } from './cruds/employee/employee-read-all/employee-read-all.component';
import { EmployeeReadOneComponent } from './cruds/employee/employee-read-one/employee-read-one.component';
import { IncomeCreateComponent } from './cruds/income/income-create/income-create.component';
import { IncomeReadAllComponent } from './cruds/income/income-read-all/income-read-all.component';
import { IncomeDashboardComponent } from './dashboard/income-dashboard/income-dashboard.component';
import { IncomeDefaultComponent } from './default/income-default/income-default.component';
import { IncomeComponent } from './main/income/income.component';
import { IncomeSidenavComponent } from './sidenav/income-sidenav/income-sidenav.component';
import { EmployeeSidenavComponent } from './sidenav/employee-sidenav/employee-sidenav.component';
import { IdentityDashboardComponent } from './dashboard/identity-dashboard/identity-dashboard.component';
import { IdentityDefaultComponent } from './default/identity-default/identity-default.component';
import { IdentitySidenavComponent } from './sidenav/identity-sidenav/identity-sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    AttendanceReadAllComponent,
    AttendanceReadOneComponent,
    AttendanceDashboardComponent,
    AttendanceDefaultComponent,
    AttendanceSidenavComponent,
    AttendanceComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CrudsComponent,
    DashboardComponent,
    DefaultComponent,
    SidenavComponent,
    ClocksComponent,
    AnalogComponent,
    DigitalComponent,
    AttendanceCardComponent,
    ShiftCardComponent,
    GemphilComponent,
    DailyTimeInComponent,
    DailyTimeOutComponent,
    UserCreateComponent,
    UserReadAllComponent,
    UserReadOneComponent,
    UserDashboardComponent,
    UserDefaultComponent,
    UserComponent,
    UserSidenavComponent,
    LoginComponent,
    AdminComponent,
    AdminDashboardComponent,
    AdminDefaultComponent,
    AdminSidenavComponent,
    IdentityComponent,
    IdentityCreateComponent,
    IdentityReadAllComponent,
    IdentityReadOneComponent,
    EmployeeComponent,
    EmployeeCreateComponent,
    EmployeeReadAllComponent,
    EmployeeReadOneComponent,
    IncomeCreateComponent,
    IncomeReadAllComponent,
    IncomeDashboardComponent,
    IncomeDefaultComponent,
    IncomeComponent,
    IncomeSidenavComponent,
    EmployeeSidenavComponent,
    IdentityDashboardComponent,
    IdentityDefaultComponent,
    IdentitySidenavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ MaterialModule, AttendanceService,
    UserService, ApiService, IdentityService,
    EmployeeService, AuthService,
    AuthInterceptor,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
