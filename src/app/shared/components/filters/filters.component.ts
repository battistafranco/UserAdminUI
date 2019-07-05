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
  }

  reset() {
    this.form.reset();
    this.filtersService.resetFilters();
  }
}
