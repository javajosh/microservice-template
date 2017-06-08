import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';

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
  data: any[] = [
    { sku: '1452-2', item: 'Pork Chops', price: 32.11 },
    { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
    { sku: '1424-0', item: 'Prime Rib', price: 41.15 },
    { sku: '1423-0', item: 'Prime Rib', price: 41.15 },
  ];
  columns: ITdDataTableColumn[] = [
    { name: 'sku', label: 'SKU #', tooltip: 'Stock Keeping Unit' },
    { name: 'item', label: 'Item name', sortable:true },
    { name: 'price', label: 'Price (US$)', numeric: true, format: v => v.toFixed(2) },
  ];

  openPrompt(row: any, name: string): void {
    // this._dialogService.openPrompt({
    //   message: 'Enter comment?',
    //   value: row[name],
    // }).afterClosed().subscribe((value: any) => {
    //   if (value !== undefined) {
    //     row[name] = value;
    //   }
    // });
  }

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;

  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 5;
  sortBy: string = 'sku';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;



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
