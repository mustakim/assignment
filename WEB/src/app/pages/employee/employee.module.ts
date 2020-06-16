import { MaterialModule } from '../../core/material.module';
import { EmployeeEditModule } from './components/employee-edit/employee-edit.module';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeDataTableComponent } from './components/employee-data-table/employee-data-table.component';
import { EmployeeTableMenuComponent } from './components/employee-table-menu/employee-table-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';



import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { ScrollbarModule } from '../../../@vex/components/scrollbar/scrollbar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../@vex/directives/container/container.module';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [EmployeeComponent, EmployeeDataTableComponent, EmployeeTableMenuComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FlexLayoutModule,
    IconModule,
    ScrollbarModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSidenavModule,
    EmployeeEditModule,
    MaterialModule
  ]
})
export class EmployeeModule {
}
