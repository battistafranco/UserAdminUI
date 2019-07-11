import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TranslatePipe } from '@pipes/translate.pipe';

export interface Applications {
  id: number;
  name: string;
  description: string;
}

const APP_DATA: Applications[] = [
  { id: 1, name: 'AP5', description: 'Anywhere Portfolio 5' },
  { id: 2,name: 'RMv4', description: 'Risk Manager V4' },
  { id: 3,name: 'APIBO', description: 'APIBO' },
  { id: 4,name: 'APIGIX', description: 'APIGIX' },
  { id: 5,name: 'AP5ADM', description: 'Argentina Clearing' },
  { id: 6,name: 'AP5 Interface', description: 'AP5 Interface' },
  { id: 7,name: 'APBSv2', description: 'APBSv2' }
];

@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.scss']
})
export class AppsListComponent implements OnInit {
  selectedKeys: any[] = [];
  columns: any[];
  apps = APP_DATA;
  constructor(
    private _t: TranslatePipe
  ) { }

  translate(text) {
    return this._t.transform(text);
  }

  ngOnInit() {
    this.columns = [
      {
        dataField: "id",
        caption: this.translate("ID"),
        dataType: "string",
        visible: false
      },
      {
        dataField: "name",
        caption: this.translate("NOMBRE"),
        dataType: "string"
      },
      {
        dataField: "description",
        caption: this.translate("DESCRIPTION"),
        dataType: "string"
      }
    ];
  }

  onSelectionRowChanged(event) {
    this.selectedKeys = event;
    console.log(this.selectedKeys);
  }


  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //     this.selection.clear() :
  //     this.dataSource.data.forEach(row => this.selection.select(row));
  // }

  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: Applications): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }
}


