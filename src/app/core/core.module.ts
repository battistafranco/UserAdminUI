import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./layout/header/header.component";
import { SideNavListComponent } from "./layout/side-nav-list/side-nav-list.component";
import { MaterialModule } from "../shared/material/material.module";
import { PipesModule } from "../pipes/pipes.module";
import { AppRoutingModule } from "../app-routing.module";
import { BreadcrumbComponent } from "./layout/breadcrumbs/breadcrumb/breadcrumb.component";
import { SidenavService } from "./layout/services/sidenav.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth/services/auth.service';
import { LoginComponent } from './auth/components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './helpers/httpconfig.interceptor';

@NgModule({
  declarations: [HeaderComponent, SideNavListComponent, BreadcrumbComponent, LoginComponent],
  imports: [CommonModule, MaterialModule, PipesModule, AppRoutingModule, BrowserAnimationsModule, ReactiveFormsModule, FormsModule, ToastrModule.forRoot() ],
  exports: [HeaderComponent, SideNavListComponent, BreadcrumbComponent],
  providers: [SidenavService, AuthService, { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }]
})
export class CoreModule { }
