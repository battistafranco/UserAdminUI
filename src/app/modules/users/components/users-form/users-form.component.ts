import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Input
} from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormBuilder
} from "@angular/forms";

import { UsersService } from "../../services/users.service";
import { User } from "@models/user"
import { ValidateUrl } from "../../../../shared/validators/validators";
import { RolesService } from '@shared/services/roles.service';
import { Observable } from 'rxjs';
import { Rol } from '@models/rol';



@Component({
  selector: "app-users-form",
  templateUrl: "./users-form.component.html",
  styleUrls: ["./users-form.component.scss"]
})
export class UsersFormComponent implements OnInit {
  @ViewChild("stepper", { static: true }) stepper;
  @Output() reloadTable = new EventEmitter();
  @Input() user: User;
  formGroup: FormGroup;
  personalFormGroup: FormGroup;
  filtersFormGroup: FormGroup;  
  appsFormGroup: FormGroup;  
  specialPermissionsFormGroup: FormGroup;  
  isLinear = true;
  usr: User;
  roles$ : Observable<Rol[]>;

  get formArray(): AbstractControl | null {
    return this.formGroup.get("formArray");
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _usrService: UsersService,
    private _rolesService: RolesService,
  ) { }

  ngOnInit() {
    this.buildForm();
    this.fillRoles();
  }
  buildForm() {

    this.personalFormGroup = this._formBuilder.group({
      name: [this.user.name, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      username: [this.user.username, Validators.required],
      email: [this.user.email, [Validators.email, Validators.required]],
      dni: [this.user.identification, Validators.required],
      telefono: [this.user.phone],
      rol: [this.user.role, Validators.required]
    });

    this.filtersFormGroup = this._formBuilder.group({
      
    });
  }

  fillRoles() {
    this.roles$ = this._rolesService.getAll();
  }

  rolesChanged(role) {
   console.log("Roles changed: " + role)
  }

  submit() {
    // const nombre = this.personalFormGroup.value.name;
    // const email = this.personalFormGroup.value.email;
    // const mc = this.accountFormGroup.value.mc;
    // const cim = this.accountFormGroup.value.cim;

    // this.usr = { username: username, email: email, name: name, lastName: lastName };

    // this._usrService.create(this.usr).subscribe(res => {
    //   this.resetControls();
    //   this.reloadTable.emit(true);
    // });
  }

  resetControls() {    
    this.personalFormGroup.reset();
    this.stepper.reset();
  }
}
