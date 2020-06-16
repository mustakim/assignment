import { EMPLOYEE } from './../../../../models/employee.model';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger20ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';

@Component({
  selector: 'vex-employee-data-table',
  templateUrl: './employee-data-table.component.html',
  styleUrls: ['./employee-data-table.component.scss'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ],
  animations: [
    stagger20ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class EmployeeDataTableComponent<T> implements OnInit, OnChanges, AfterViewInit {

  @Input() data: T[];
  @Input() columns: TableColumn<T>[];
  @Input() pageSize = 20;
  @Input() pageSizeOptions = [10, 20, 50];
  @Input() searchStr: string;

  @Output() toggleStar = new EventEmitter<EMPLOYEE['id']>();
  @Output() openContact = new EventEmitter<EMPLOYEE['id']>();

  @Output() openAddNew = new EventEmitter<any>();

  @Output() openLeave = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();



  visibleColumns: Array<keyof T | string>;
  dataSource = new MatTableDataSource<T>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  icMoreVert = icMoreVert;
  icStar = icStar;
  icStarBorder = icStarBorder;
  icDeleteForever = icDeleteForever;
  icEdit = icEdit;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.columns) {
      this.visibleColumns = this.columns.map(column => column.property);
    }

    if (changes.data) {
      this.dataSource.data = this.data;
    }
  }

  emitToggleStar(event: Event, id: EMPLOYEE['id']) {
    event.stopPropagation();
    this.toggleStar.emit(id);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
