import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './main/attendance/attendance.component';
import { AttendanceDefaultComponent } from './default/attendance-default/attendance-default.component';
import { AttendanceDashboardComponent } from './dashboard/attendance-dashboard/attendance-dashboard.component';
import { MainComponent } from './main/main.component';
import { DefaultComponent } from './default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceReadAllComponent } from './cruds/attendance/attendance-read-all/attendance-read-all.component';
import { LoginComponent } from './shared/login/login.component';
import { AdminComponent } from './main/admin/admin.component';
import { AdminDefaultComponent } from './default/admin-default/admin-default.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { UserReadAllComponent } from './cruds/user/user-read-all/user-read-all.component';
import { UserCreateComponent } from './cruds/user/user-create/user-create.component';
import { IdentityReadAllComponent } from './cruds/identity/identity-read-all/identity-read-all.component';
import { IdentityCreateComponent } from './cruds/identity/identity-create/identity-create.component';
import { EmployeeReadAllComponent } from './cruds/employee/employee-read-all/employee-read-all.component';
import { EmployeeCreateComponent } from './cruds/employee/employee-create/employee-create.component';
import { EmployeeReadOneComponent } from './cruds/employee/employee-read-one/employee-read-one.component';
import { UserReadOneComponent } from './cruds/user/user-read-one/user-read-one.component';
import { IdentityComponent } from './main/identity/identity.component';
import { IdentityDefaultComponent } from './default/identity-default/identity-default.component';
import { IdentityDashboardComponent } from './dashboard/identity-dashboard/identity-dashboard.component';
import { IdentityReadOneComponent } from './cruds/identity/identity-read-one/identity-read-one.component';
import { UserComponent } from './main/user/user.component';
import { UserDefaultComponent } from './default/user-default/user-default.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    children: [
      { path: '', component: DefaultComponent,
        children: [
          { path: '', component: DashboardComponent, },
        ],
      },
    ],
  },

  { path: 'user/:id', component: UserComponent,
    children: [
      { path: '', component: UserDefaultComponent,
        children: [
          { path: '', component: UserDashboardComponent,
            children: [
              { path: 'employees', component: EmployeeReadAllComponent, },
              { path: 'employee/:employee_id', component: EmployeeReadOneComponent,
                children: [
                  { path: 'add', component: EmployeeCreateComponent, },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  { path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: AdminDefaultComponent,
        children: [
          { path: '', component: AdminDashboardComponent,
            children: [
              { path: '', component: UserReadAllComponent, },
              { path: 'auth/add', component: UserCreateComponent, },
              { path: 'auth/:id', component: UserReadOneComponent, },
              { path: 'identities', component: IdentityReadAllComponent, },
              { path: 'identity/:employee_id', component: IdentityReadOneComponent, },
              { path: 'ids/add', component: IdentityCreateComponent, },
              { path: 'employee/:employee_id', component: EmployeeReadOneComponent, },
              { path: 'employees', component: EmployeeReadAllComponent, },
              { path: 'employees/add', component: EmployeeCreateComponent, },
              { path: 'attendances', component: AttendanceReadAllComponent, },
            ],
          },
        ],
      },
    ],
  },

  { path: 'identities', component: IdentityComponent,
    children: [
      { path: '', component: IdentityDefaultComponent,
        children: [
          { path: '', component: IdentityDashboardComponent, }
        ],
      },
    ],
  },

  { path: 'login', component: LoginComponent },

  { path: 'attendances', component: AttendanceComponent,
    children: [
      { path: '', component: AttendanceDefaultComponent,
        children: [
          { path: '', component: AttendanceDashboardComponent,
            children: [
              { path: '', component: AttendanceReadAllComponent, },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
