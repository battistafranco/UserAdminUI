import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MethodsSelectionPageComponent } from "./pages/methods-selection-page/methods-selection-page.component";

const routes: Routes = [
  {
    path: "",
    component: MethodsSelectionPageComponent,
    data: {
      breadcrumb: "Administración Permisos API"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiMethodsRoutingModule {}
