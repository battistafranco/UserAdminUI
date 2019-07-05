import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './core/auth/components/login/login.component';

const routes: Routes = [
  {
    path: "home",
    loadChildren: "./modules/home/home.module#HomeModule",
    //loadChildren : () => import('./modules/home/home.module#HomeModule').then(m => m.HomeModule),
    data: {
      breadcrumb: "Home"
    },
    canActivate: [AuthGuard]
  },
  {
    path: "users",
    loadChildren: "./modules/users/users.module#UsersModule",
    data: {
      breadcrumb: "Usuarios"
    },
    canActivate: [AuthGuard]
  },
  {
    path: "permisos-api",
    loadChildren: "./modules/api-methods/api-methods.module#ApiMethodsModule",
    data: {
      breadcrumb: "Permisos API"
    },
    canActivate: [AuthGuard]
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
    data: {
      breadcrumb: ""
    },
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
