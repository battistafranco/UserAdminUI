import { Injectable } from "@angular/core";
import { GenericRxjsService } from "@shared/services/generic-rxjs.service";
import { Rol } from "@models/rol";
import { map } from "rxjs/operators";
import { MethodsService } from "@shared/services/methods.service";
import { Method } from "@models/method";

export type FilterModel = {
  selectedRol: Rol;
  selectedMethods: string[];
};

@Injectable({
  providedIn: "root"
})
export class FiltersService extends GenericRxjsService<FilterModel> {
  protected store: string = "filters-service";

  get selectedRol$() {
    return this.state$.pipe(map(state => state.selectedRol));
  }

  get isRolSelected$() {
    return this.state$.pipe(
      map(state => {
        return state.selectedRol && state.selectedRol.id != "";
      })
    );
  }

  get selectedMethodsByRol$() {
    return this.state$.pipe(map(state => state.selectedMethods));
  }
  constructor(private methodServices: MethodsService) {
    super({
      selectedRol: {
        id: "",
        name: "",
        discriminator: "",
        creationUserID: "",
        modificationUserID: "",
        description: "",
        enable: false,
        creationDate: new Date(),
        modificationDate: new Date()
      },
      selectedMethods: []
    });
  }

  selectRol({
    id,
    name,
    discriminator,
    description,
    enable,
    modificationDate,
    creationDate,
    modificationUserID,
    creationUserID
  }: Rol) {
    this.patch(
      {
        selectedRol: {
          id,
          name,
          discriminator,
          description,
          enable,
          modificationDate,
          creationDate,
          modificationUserID,
          creationUserID
        }
      },
      "select rol"
    );
  }

  selectMethods(value) {
    this.methodServices.getByRoleID(value).subscribe(res => {
      this.patch({ selectedMethods: res.map(a => a.id) }, "select methods");
    });  
  }

  resetFilters() {
    let selectedRol: {
      id: "";
      name: "";
      discriminator: "";
      creationUserID: "";
      modificationUserID: "";
      description: "";
      enable: false;
      creationDate: Date;
      modificationDate: Date;
    };

    let selectedMethods: [];

    this.patch({ selectedRol: selectedRol }, "reset selected rol");
    this.patch({ selectedMethods: selectedMethods }, "reset selected methods");
  }
}
