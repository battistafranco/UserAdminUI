import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TranslateService } from "../../../services/translate/translate.service";
import { Router } from "@angular/router";
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  public sideNavState: boolean = true;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private _sidenavService: SidenavService
  ) {}

  ngOnInit() {
    console.log(sessionStorage.getItem("LANG"));    
  }

  onSideNaveToggle() {
    
    this.sideNavState = !this.sideNavState;  
    this._sidenavService.sideNavState$.next(this.sideNavState);
  }

  setLang(lang: string) {
    this.translate.use(lang);
    this.router.navigate(["/home"]);
  }
}
