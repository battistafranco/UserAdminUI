import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@pipes/translate.pipe';

export interface Applications {
  id: number;
  name: string;
  description: string;
}

const APP_DATA: Applications[] = [
  { id: 1, name: 'Risk Manager', description: 'Anywhere Portfolio 5' },
  { id: 2,name: 'Recibe LOP', description: 'Risk Manager V4' },
  { id: 3,name: 'APBSv3', description: 'APIBO' },
  { id: 4,name: 'Aprueba Recibos Mercaderia', description: 'APIGIX' },
  { id: 5,name: 'Aprueba Liquidaciones Finales', description: 'Argentina Clearing' },
  { id: 6,name: 'Permite Acceso al Web Api', description: 'AP5 Interface' } 
];


@Component({
  selector: 'app-special-permissions-list',
  templateUrl: './special-permissions-list.component.html',
  styleUrls: ['./special-permissions-list.component.scss']
})
export class SpecialPermissionsListComponent implements OnInit {

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
      }
    ];
  }

  onSelectionRowChanged(event) {
    this.selectedKeys = event;
  }


}

