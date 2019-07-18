import { Component, OnInit } from "@angular/core";
import { OverlayContainer } from "@angular/cdk/overlay";
import { SidenavService } from "./core/layout/services/sidenav.service";
import { onMainContentChange } from "@shared/animations/animations";
import { User, UserCredentials } from '@models/user';
import { AuthService } from './core/auth/services/auth.service';
import { Observable } from 'rxjs/internal/Observable';

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
  currentUser$: Observable<UserCredentials>;
  public onSideNavChange: boolean;

  constructor(
    private overlayContainer: OverlayContainer,
    private authenticationService: AuthService,
    private _sidenavService: SidenavService
  ) {
    
   
  }

  ngOnInit() {
    this.currentUser$ = this.authenticationService.currentUser;

    this._sidenavService.sideNavState$.subscribe(res => {
      this.onSideNavChange = res;
    });
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
