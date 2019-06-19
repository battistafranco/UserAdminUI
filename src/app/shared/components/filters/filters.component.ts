import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Rol } from "@models/rol";
import { FiltersService } from "./services/filters.service";
import { Observable } from "rxjs";
import { RolesService } from "@shared/services/roles.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnInit {
  @Input() roles: Rol[] = [];
  selectedRol$: Observable<Rol>;

  form: FormGroup = new FormGroup({
    rol: new FormControl(""),
    selectedFilterValue: new FormControl("")
  });

  constructor(
    private filtersService: FiltersService,
    private rolesServices: RolesService
  ) {}

  ngOnInit() {
    this.getAllRoles();
  }

  submit() {
    this.filtersService.selectRol(this.form.value.rol);
    this.filtersService.selectMethods(this.form.value.rol.id);
  }

  getAllRoles() {
    this.rolesServices.getAll().subscribe(
      res => {
        this.roles = res;
      },
      err => {
        console.log(err);
      }
    );

    // var rol1 = {
    //   id: "1",
    //   name: "Administrador",
    //   value: "1",
    //   filter: "_*%",
    //   enabled: true,
    //   description: "Desc. Admin"
    // };
    // var rol2 = {
    //   id: "2",
    //   name: "MC",
    //   value: "2",
    //   filter: "89",
    //   enabled: true,
    //   description: "Desc. MC"
    // };
    // var rol3 = {
    //   id: "3",
    //   name: "CIM",
    //   value: "3",
    //   filter: "1089",
    //   enabled: true,
    //   description: "Desc. CIM"
    // };
    // this.roles.push(rol1, rol2, rol3);
  }

  reset() {
    this.form.reset();
    this.filtersService.resetFilters();
  }
}
