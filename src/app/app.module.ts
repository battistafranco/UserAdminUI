import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID, APP_INITIALIZER } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";

registerLocaleData(localeEs, "es");

import { AppComponent } from "./app.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { MaterialModule } from "./shared/material/material.module";
import { TranslateService } from "./services/translate/translate.service";

import { CoreModule } from "./core/core.module";
import { PipesModule } from "./pipes/pipes.module";

import { SharedComponentsModule } from './shared/components/shared-components.module';



export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use("es");
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PipesModule,
    MaterialModule,
    SharedComponentsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es-AR" },
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
