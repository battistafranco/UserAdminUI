import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { SharedComponentsModule } from "src/app/shared/components/shared-components.module";
import { TranslatePipe } from "src/app/pipes/translate.pipe";

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRoutingModule, SharedComponentsModule],
  exports: [HomePageComponent],
  providers: [TranslatePipe]
})
export class HomeModule {}
