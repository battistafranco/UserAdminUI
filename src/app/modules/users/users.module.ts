import { NgModule } from "@angular/core";
import { CommonModule  } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersPageComponent } from "./pages/users-page/users-page.component";
import { UsersFormComponent } from "./components/users-form/users-form.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { SharedComponentsModule } from "src/app/shared/components/shared-components.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from "./services/users.service";
import { TranslatePipe } from "src/app/pipes/translate.pipe";
import { PersonalDataFormComponent } from './components/personal-data-form/personal-data-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserFiltersFormComponent } from './components/user-filters-form/user-filters-form.component';
import { AppsListComponent } from './components/apps-list/apps-list.component';
import { SpecialPermissionsListComponent } from './components/special-permissions-list/special-permissions-list.component';
import { MenusListComponent } from './components/menus-list/menus-list.component';
@NgModule({
  declarations: [UsersPageComponent, UsersFormComponent, UsersListComponent, PersonalDataFormComponent, UserFiltersFormComponent, AppsListComponent, SpecialPermissionsListComponent, MenusListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule  
  ],
  exports: [UsersPageComponent, UsersFormComponent, UsersListComponent],  
  providers: [UsersService, TranslatePipe]
})
export class UsersModule {}
