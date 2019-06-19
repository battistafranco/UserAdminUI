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

@NgModule({
  declarations: [HeaderComponent, SideNavListComponent, BreadcrumbComponent],
  imports: [CommonModule, MaterialModule, PipesModule, AppRoutingModule,BrowserAnimationsModule],
  exports: [HeaderComponent, SideNavListComponent, BreadcrumbComponent],
  providers: [SidenavService]
})
export class CoreModule {}
