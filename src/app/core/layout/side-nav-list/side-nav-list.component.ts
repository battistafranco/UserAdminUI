import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Menu } from "../../../models/menu";
import { animateText, onSideNavChange } from "@shared/animations/animations";
import { SidenavService } from "../services/sidenav.service";
@Component({
  selector: "app-side-nav-list",
  templateUrl: "./side-nav-list.component.html",
  styleUrls: ["./side-nav-list.component.scss"],
  animations: [onSideNavChange, animateText]
})
export class SideNavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  menues: Menu[] = [];
  public sideNavState: boolean = true;
  public linkText: boolean = true;
  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe(res => {      
      this.sideNavState = res;
      setTimeout(() => {
        this.linkText = this.sideNavState;
      }, this.sideNavState ? 700 : 100);
    });
  }

  ngOnInit() {
    this.getMenues();    
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };

  public getMenues() {
    var menu1 = { title: "HOME", routerLink: "home", icon: "home" };

    var menu2 = { title: "USUARIOS", routerLink: "users", icon: "person" };

    var menu3 = {
      title: "PERMISOS_API",
      routerLink: "permisos-api",
      icon: "http"
    };

    this.menues.push(menu1, menu2, menu3);
  }
}
