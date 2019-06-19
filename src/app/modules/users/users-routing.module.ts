import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersPageComponent } from "./pages/users-page/users-page.component";

const routes: Routes = [
  {
    path: "",
    component: UsersPageComponent,
    data: {
      breadcrumb: "Lista Usuarios"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
