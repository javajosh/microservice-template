import { Component, OnInit } from '@angular/core';
import {
  TdDataTableService,
  TdDataTableSortingOrder,
  ITdDataTableSortChangeEvent,
  ITdDataTableColumn,
  IPageChangeEvent
}from '@covalent/core';
import {User} from "../user/user";

@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.scss']
})
export class MyTableComponent implements OnInit {

  constructor(private dataTableService: TdDataTableService) {}
  // constructor(private _dialogService: TdDialogService) {}

  ngOnInit() {
  }



  data: User[] = [
    new User(1,'smith', 'alice', new Date('1991')),
    new User(2,'smith', 'bob', new Date('1992')),
    new User(3,'smith', 'charlie', new Date('1993')),
    new User(4,'smith', 'dave', new Date('1994')),
    new User(5,'smith', 'eric', new Date('1995')),
    new User(6,'smith', 'frank', new Date('1996')),
  ];

  columns: ITdDataTableColumn[] = [
    { name: 'id', label: 'ID', tooltip: 'User Identification' },
    { name: 'first_name', label: 'First Name' },
    { name: 'last_name', label: 'Last Name' },
    { name: 'dob', label: 'Date of Birth', numeric: true, format: v => v.toString(), filter: true },
  ];

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;

  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 5;
  sortBy: string = 'id';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  selectable : boolean = true;
  selectedRows : any[] = [];
  clickable : boolean = true;
  multiple : boolean = true;


  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.data;
    let excludedColumns: string[] = this.columns
      .filter((column: ITdDataTableColumn) => {
        return ((column.filter === undefined && column.hidden === true) ||
        (column.filter !== undefined && column.filter === false));
      }).map((column: ITdDataTableColumn) => {
        return column.name;
      });
    newData = this.dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
    this.filteredTotal = newData.length;
    newData = this.dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this.dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }
}
