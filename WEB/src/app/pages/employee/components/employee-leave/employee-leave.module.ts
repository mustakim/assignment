import { MaterialModule } from './../../../../core/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLeaveComponent } from './employee-leave.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeeLeaveComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    IconModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  entryComponents: [EmployeeLeaveComponent]
})
export class EmployeeLeaveModule {
}
