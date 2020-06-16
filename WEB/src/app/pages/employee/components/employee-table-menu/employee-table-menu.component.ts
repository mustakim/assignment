import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import icViewHeadline from '@iconify/icons-ic/twotone-view-headline';
import { contactsData } from '../../../../../static-data/contacts';
import { Icon } from '@visurel/iconify-angular';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import icHistory from '@iconify/icons-ic/twotone-history';
import icStar from '@iconify/icons-ic/twotone-star';
import icLabel from '@iconify/icons-ic/twotone-label';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { EMPLOYEE } from './../../../../models/employee.model';

export interface EmployeeTableMenu {
  type: 'link' | 'subheading';
  id?: 'frequently' | 'starred' | 'all' | 'family' | 'friends' | 'colleagues' | 'business';
  icon?: Icon;
  label: string;
  classes?: {
    icon?: string;
  };
}

@Component({
  selector: 'vex-employee-table-menu',
  templateUrl: './employee-table-menu.component.html',
  animations: [fadeInRight400ms, stagger40ms]
})
export class EmployeeTableMenuComponent implements OnInit {

  @Input() items: EmployeeTableMenu[] = [
  ];

  @Output() filterChange = new EventEmitter<EMPLOYEE[]>();
  @Output() openAddNew = new EventEmitter<void>();

  activeCategory: EmployeeTableMenu['id'] = 'all';
  icPersonAdd = icPersonAdd;

  constructor() { }

  ngOnInit() {
  }

  setFilter(category: EmployeeTableMenu['id']) {
    this.activeCategory = category;

    if (category === 'starred') {
      return this.filterChange.emit(contactsData.filter(c => c.starred));
    }

    if (category === 'all') {
      return this.filterChange.emit(contactsData);
    }

    if (category === 'frequently'
      || category === 'family'
      || category === 'friends'
      || category === 'colleagues'
      || category === 'business') {
      return this.filterChange.emit([]);
    }
  }

  isActive(category: EmployeeTableMenu['id']) {
    return this.activeCategory === category;
  }
}
