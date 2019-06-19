import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { User } from "../../../../models/user";
import { TranslatePipe } from "../../../../pipes/translate.pipe";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  @Input() usuarios: User[];
  @Output() rowDeleted = new EventEmitter();
  columns: any[];
  filename = "Usuarios";

  constructor(private _t: TranslatePipe) {}

  translate(text) {
    return this._t.transform(text);
  }

  onRowDeleted(event) {
    this.rowDeleted.emit(event);
  }

  ngOnInit() {
    this.columns = [
      {
        dataField: "username",
        caption: this.translate("USERNAME"),
        dataType: "string"
      },
      {
        dataField: "name",
        caption: this.translate("NOMBRE"),
        dataType: "string"
      },

      {
        dataField: "lastName",
        caption: this.translate("APELLIDO"),
        dataType: "string"
      },
      {
        dataField: "email",
        caption: this.translate("EMAIL"),
        dataType: "string"
      }
    ];
  }
}
