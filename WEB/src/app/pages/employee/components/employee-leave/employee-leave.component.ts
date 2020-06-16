
import icMap from '@iconify/icons-ic/twotone-map';
import iccreate from '@iconify/icons-ic/twotone-create';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { contactsData } from '../../../../../static-data/contacts';
import icStar from '@iconify/icons-ic/twotone-star';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icEmail from '@iconify/icons-ic/twotone-mail';
import icPerson from '@iconify/icons-ic/twotone-person';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import { FormBuilder, Validators } from '@angular/forms';
import { EMPLOYEE } from './../../../../models/employee.model';

import { EmployeeService } from './../../../../services/employee.service';

export let contactIdCounter = 50;

@Component({
  selector: 'vex-employee-leave',
  templateUrl: './employee-leave.component.html',
  styleUrls: ['./employee-leave.component.scss'],
})
export class EmployeeLeaveComponent implements OnInit {
  form = this.fb.group({
    firstName: ['', Validators.required],
    middleName: ['', []],
    lastName: ['', [Validators.required]],
    dateOfBirth: ['', Validators.required],
    joiningDate: ['', []],
    designation: ['', Validators.required],
    department: ['', Validators.required]
  });

  contact: EMPLOYEE;

  icClose = icClose;

  icBusiness = icBusiness;
  icPerson = icPerson;
  icEmail = icEmail;
  icPhone = icPhone;

  iccreate = iccreate;
  icMap = icMap;

  // change
  employeeTypeData: any;
  staffCategoryData: any;

  newEmployeeTypeFlag = false;
  newStaffCategoryFlag = false;


  gender: any[] = [
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'},
    {id: 3, name: 'Other'},
  ];

  image = null;


  constructor(
    @Inject(MAT_DIALOG_DATA) private contactId: EMPLOYEE['id'],
    private dialogRef: MatDialogRef<EmployeeLeaveComponent>,
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // this.getEmployeeTypes();
    // this.getStaffCategories();
    if (this.contactId) {
      console.log('id', this.contactId);
      this.form.patchValue(this.contact);
    }
  }


  save() {

    const form = this.form.value;
    const payload = {
      first_name: form.firstName,
      middle_name: form.middleName,
      last_name: form.lastName,
      date_of_birth: form.dateOfBirth,
      joining_date: form.joiningDate,
      designation: form.designation,
      department: form.department,
    };
    this.employeeService.create(payload).subscribe((result: any) => {
        this.dialogRef.close();
      });
  }

  openNewEmployeeType() {
    this.newEmployeeTypeFlag = true;
  }

  onImageUpload(e) {
    this.image = e;
  }

}
