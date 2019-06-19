import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxTableComponent } from "./dx-table/dx-table.component";
import { DxDataGridModule } from "devextreme-angular";
import { MaterialModule } from "../material/material.module";
import { PipesModule } from "../../pipes/pipes.module";
import { FiltersComponent } from "./filters/filters.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RolesService } from "@shared/services/roles.service";

@NgModule({
  declarations: [DxTableComponent, FiltersComponent],
  imports: [
    CommonModule,
    DxDataGridModule,
    MaterialModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DxTableComponent,
    DxDataGridModule,
    MaterialModule,
    PipesModule,
    FiltersComponent
  ],
  providers: [RolesService]
})
export class SharedComponentsModule {}
