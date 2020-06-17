import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from '../custom-layout/custom-layout.component';
import { VexRoutes } from '../../@vex/interfaces/vex-route.interface';


const childrenRoutes: VexRoutes = [
  {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full',
  },
  {
    path: 'dashboards',
    loadChildren: () => import('../pages/dashboards/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'employee',
    loadChildren: () => import('../pages/employee/employee.module').then(m => m.EmployeeModule),
  },
  {
    path: '**',
    loadChildren: () => import('../pages/errors/error-404/error-404.module').then(m => m.Error404Module)
  }
];


const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: childrenRoutes,
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
