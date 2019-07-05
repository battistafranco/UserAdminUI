import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Output,
  EventEmitter
} from "@angular/core";
import { DxDataGridComponent } from "devextreme-angular";
import { locale, loadMessages } from "devextreme/localization";

import * as esMessages from "../../../../assets/i18n/devexpress/es";
import { Observable } from "rxjs";
import { FiltersService } from "../filters/services/filters.service";

@Component({
  selector: "app-dx-table",
  templateUrl: "./dx-table.component.html",
  styleUrls: ["./dx-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DxTableComponent implements OnInit {
  @ViewChild("grid", { static: false }) dataGrid: DxDataGridComponent;
  @Input() columns: any;
  @Input() datasource: any;
  @Input() filename: any;

  //Paging Options
  @Input() allowPaging: boolean;

  //Row Selection
  @Input() key: any;
  @Input() columnSelectionMode;
  // @Input() initialSelectedRows: Observable<any>;
  // _initialSelectedRows;
  _initialSelectedRows: Observable<any>;
  initialSelectedRows$: Observable<string[]>;
  //CRUD Operations
  @Input() allowUpdating: boolean;
  @Input() allowDeleting: boolean;
  @Input() allowAdding: boolean;

  @Output() rowDeleted = new EventEmitter();
  @Output() selectionRowChanged = new EventEmitter();

  events: Array<string> = [];
  constructor(
    private cd: ChangeDetectorRef,
    private filtersService: FiltersService
  ) {
    const lang = sessionStorage.getItem("LANG");
    if (lang != "en") loadMessages(esMessages);
    locale(lang);
  }

  ngOnInit() {
    this.initialSelectedRows$ = this.filtersService.selectedMethodsByRol$;
  }

  ngAfterViewInit() { }

  onRowRemoving(event) {
    console.log(event);
  }

  onRowRemoved(event) {
    this.rowDeleted.emit(event.data);
  }

  onSelectionChanged(e) {
    let currentSelectedRowKeys = e.currentSelectedRowKeys;
    let currentDeselectedRowKeys = e.currentDeselectedRowKeys;
    let allSelectedRowKeys = e.selectedRowKeys;
    let allSelectedRowsData = e.selectedRowsData;

    this.selectionRowChanged.emit(allSelectedRowKeys);
  }

  clearEvents() {
    this.events = [];
  }

}
