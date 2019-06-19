import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ApiMethodsRoutingModule } from "./api-methods-routing.module";
import { MethodsSelectionPageComponent } from "./pages/methods-selection-page/methods-selection-page.component";

import { TranslatePipe } from "src/app/pipes/translate.pipe";

import { SharedComponentsModule } from "src/app/shared/components/shared-components.module";
import { ApiMethodsService } from "./services/api-methods.service";

@NgModule({
  declarations: [MethodsSelectionPageComponent],
  imports: [CommonModule, ApiMethodsRoutingModule, SharedComponentsModule],
  providers: [TranslatePipe, ApiMethodsService]
})
export class ApiMethodsModule {}
