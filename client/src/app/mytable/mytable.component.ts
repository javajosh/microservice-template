import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';
import { TdDialogService } from '@covalent/core';

@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.scss']
})
export class MyTableComponent implements OnInit {

  constructor(){}
  // constructor(private _dialogService: TdDialogService) {}

  ngOnInit() {
  }
  basicData: any[] = [
    { sku: '1452-2', item: 'Pork Chops', price: 32.11 },
    { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
  ];
  columns: ITdDataTableColumn[] = [
    { name: 'sku', label: 'SKU #', tooltip: 'Stock Keeping Unit' },
    { name: 'item', label: 'Item name' },
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
}
