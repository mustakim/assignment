import { EmployeeLeaveComponent } from './components/employee-leave/employee-leave.component';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icMenu from '@iconify/icons-ic/twotone-menu';
import icSearch from '@iconify/icons-ic/twotone-search';
import icStar from '@iconify/icons-ic/twotone-star';
import { debounceTime } from 'rxjs/operators';
import { fadeInRight400ms } from '../../../@vex/animations/fade-in-right.animation';
import { scaleIn400ms } from '../../../@vex/animations/scale-in.animation';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import { EmployeeService } from '../../services/employee.service';
import { EMPLOYEE } from './../../models/employee.model';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';


@Component({
  selector: 'vex-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
export class EmployeeComponent implements OnInit {
  searchCtrl = new FormControl();

  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)
  );

  menuOpen = false;

  activeCategory: 'frequently' | 'starred' | 'all' | 'family' | 'friends' | 'colleagues' | 'business' = 'all';
  tableData: any;
  tableColumns: TableColumn<EMPLOYEE>[] = [
    {
      label: 'ID',
      property: 'id',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'NAME',
      property: 'first_name',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'DATE IF BIRTH',
      property: 'date_of_birth',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    {
      label: 'JOINING DATE',
      property: 'joining_date',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    {
      label: 'DESIGNATION',
      property: 'designation',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    {
      label: 'DEPARTMENT',
      property: 'department',
      type: 'text',
      cssClasses: ['text-secondary']
    },
    {
      label: 'Action',
      property: 'menu',
      type: 'button',
      cssClasses: ['text-secondary', 'w-10']
    },
  ];

  icStar = icStar;
  icSearch = icSearch;
  icContacts = icContacts;
  icMenu = icMenu;

  constructor(private dialog: MatDialog,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAll({limit: 'all'}).subscribe((result: any) => {
      this.tableData = result.data;
    });
  }

  openContact(id?: EMPLOYEE['id']) {
    console.log('fff', id);
    this.dialog.open(EmployeeEditComponent, {
      data: id || null,
      width: '600px'
    });
  }

  deleteEmployee(id?: EMPLOYEE['id']) {
    console.log('fff 2', id);
  }

  setLeave(id?: EMPLOYEE['id']) {
    this.dialog.open(EmployeeLeaveComponent, {
      data: id || null,
      width: '600px'
    });
  }

  openEditContact(event) {
    console.log('khela', event);
  }


  toggleStar(id: EMPLOYEE['id']) {
    const contact = this.tableData.find(c => c.id === id);

    if (contact) {
      contact.starred = !contact.starred;
    }
  }

  setData(data: EMPLOYEE[]) {
    this.tableData = data;
    this.menuOpen = false;
  }

  openMenu() {
    this.menuOpen = true;
  }
}
