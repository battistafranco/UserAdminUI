import { Component, OnInit } from "@angular/core";
import { User } from "../../../../models/user";
import { UsersService } from "../../services/users.service";
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: "app-users-page",
  templateUrl: "./users-page.component.html",
  styleUrls: ["./users-page.component.scss"]
})
export class UsersPageComponent implements OnInit {
  Users: User[] = [];
  isLoadingDataResults = false;
  constructor(private _us: UsersService, private authService: AuthService) {}

  ngOnInit() {
    //get Users
    this.getAllUsers();
  }

  reloadTable(event) {
    this.getAllUsers();
  }

  onRowDeleted(event) {
    this._us.delete(event.UserID).subscribe(res => {
      console.log(res);
    });
  }

  onSelectedRol(event) {
    console.log(event);
  }

  getAllUsers() {
    this.isLoadingDataResults = true;
    let id = this.authService.currentUserValue.id;
    this._us.getExceptID(id).subscribe(
      res => {
        this.Users = res;
        this.isLoadingDataResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingDataResults = false;
      }
    );
  }

  
}
