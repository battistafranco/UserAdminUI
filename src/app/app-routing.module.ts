import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [  
  {
    path: "home",
    loadChildren: "./modules/home/home.module#HomeModule",
    data: {
      breadcrumb: "Home"
    }
  },
  {
    path: "users",
    loadChildren: "./modules/users/users.module#UsersModule",
    data: {
      breadcrumb: "Usuarios"
    }
  },  
  {
    path: "permisos-api",
    loadChildren: "./modules/api-methods/api-methods.module#ApiMethodsModule",
    data: {
      breadcrumb: "Permisos API"
    }
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
    data: {
      breadcrumb: ""
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
