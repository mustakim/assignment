import { MaterialModule } from './../../../../core/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeEditComponent } from './employee-edit.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeeEditComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    IconModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  entryComponents: [EmployeeEditComponent]
})
export class EmployeeEditModule {
}
