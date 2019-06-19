import { Component, OnInit } from "@angular/core";
import { OverlayContainer } from "@angular/cdk/overlay";
import { SidenavService } from "./core/layout/services/sidenav.service";
import { onMainContentChange } from "@shared/animations/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [onMainContentChange]
})
export class AppComponent implements OnInit {
  title = "Bienvenido a User Admin";
  subtitle = "Anywhere Portforlio";
  themeClass: string;
  public onSideNavChange: boolean;

  constructor(
    private overlayContainer: OverlayContainer,
    private _sidenavService: SidenavService
  ) {
    this._sidenavService.sideNavState$.subscribe(res => {
      this.onSideNavChange = res;
    });
  }

  ngOnInit() {
    // this.themeClass = newThemeClass;
    // // remove old theme class and add new theme class
    // // we're removing any css class that contains '-theme' string but your theme classes can follow any pattern
    // const overlayContainerClasses = this.overlayContainer.getContainerElement()
    //   .classList;
    // const themeClassesToRemove = Array.from(classList).filter((item: string) =>
    //   item.includes("-theme")
    // );
    // if (themeClassesToRemove.length) {
    //   overlayContainerClasses.remove(...themeClassesToRemove);
    // }
    // overlayContainerClasses.add(newThemeClass);
  }
}
