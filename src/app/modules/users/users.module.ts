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
import { PesonalDataFormComponent } from './components/pesonal-data-form/pesonal-data-form.component';

@NgModule({
  declarations: [UsersPageComponent, UsersFormComponent, UsersListComponent, PesonalDataFormComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  exports: [UsersPageComponent, UsersFormComponent, UsersListComponent],  
  providers: [UsersService, TranslatePipe]
})
export class UsersModule {}
