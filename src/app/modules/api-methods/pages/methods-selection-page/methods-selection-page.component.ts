import { Component, OnInit } from "@angular/core";
import { Method } from "@models/method";
import { ApiMethodsService } from "../../services/api-methods.service";
import { BehaviorSubject, Observable } from "rxjs";
import { TranslatePipe } from "@pipes/translate.pipe";
import { Rol } from "@models/rol";
import { FiltersService } from "@shared/components/filters/services/filters.service";

@Component({
  selector: "app-methods-selection-page",
  templateUrl: "./methods-selection-page.component.html",
  styleUrls: ["./methods-selection-page.component.scss"]
})
export class MethodsSelectionPageComponent implements OnInit {
  Methods$: Observable<Method[]>;

  isLoadingDataResults = false;
  selectedKeys: any[] = [];
  columns: any[];
  filename = "Methods";

  selectedMethods$: Observable<any[]>;
  selectedRol$: Observable<Rol>;
  isRolSelected$: Observable<boolean>;

  constructor(
    private _t: TranslatePipe,
    private _ms: ApiMethodsService,
    private filtersService: FiltersService
  ) {}
  translate(text) {
    return this._t.transform(text);
  }

  ngOnInit() {
    this.filtersService.resetFilters();
    this.selectedRol$ = this.filtersService.selectedRol$;
    this.selectedMethods$ = this.filtersService.selectedMethodsByRol$;
    this.isRolSelected$ = this.filtersService.isRolSelected$;

    this.columns = [
      {
        dataField: "id",
        caption: this.translate("ID"),
        dataType: "string",
        visible: false
      },
      {
        dataField: "appID",
        caption: this.translate("appID"),
        dataType: "number",
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
      },
      {
        dataField: "httpVerb",
        caption: this.translate("HTTP_VERB"),
        dataType: "string"
      }
    ];

    this.getAllMethods();
  }

  reloadTable(event) {
    this.getAllMethods();
  }

  submit() {
    console.log(this.selectedKeys);
  }

  onSelectionRowChanged(event) {
    this.selectedKeys = event;
  }

  getAllMethods() {    
    this.Methods$ = this._ms.getAll();
    // this.Methods = [
    //   {
    //     name: "GetAllUsers",
    //     description: "Trae todos los usuarios",
    //     id: 1,
    //     verb: "GET"
    //   },
    //   {
    //     name: "GetAllMethods",
    //     description: "Trae todos los metodos",
    //     id: 2,
    //     verb: "GET"
    //   },
    //   {
    //     name: "SaveUsers",
    //     description: "guarda todos los usuarios",
    //     id: 3,
    //     verb: "POST"
    //   },
    //   {
    //     name: "SaveMethods",
    //     description: "Guarda todos los metpdos",
    //     id: 4,
    //     verb: "POST"
    //   }
    // ];

   
  }
}
