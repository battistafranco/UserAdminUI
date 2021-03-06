import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  AfterViewInit
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
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: "app-users-form",
  templateUrl: "./users-form.component.html",
  styleUrls: ["./users-form.component.scss"]
})
export class UsersFormComponent implements OnInit, AfterViewInit {
  @ViewChild("stepper", { static: false }) stepper;
  @Output() reloadTable = new EventEmitter();
  formGroup: FormGroup;
  personalFormGroup: FormGroup;
  filtersFormGroup: FormGroup;
  appsFormGroup: FormGroup;
  menusFormGroup: FormGroup;
  specialAccessFormGroup: FormGroup;
  isLinear = true;
  user$: Observable<User>;
  roles$: Observable<Rol[]>;

  get formArray(): AbstractControl | null {
    return this.formGroup.get("formArray");
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _usrService: UsersService,
    private _rolesService: RolesService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService : ToastrService
  ) {

  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      let id = params.id;
      
      if (id && id != "") {
        this.editUser(id);
      }
      else {
        this.newUser();
      }
    });

    this.buildForm();

    this.fillRoles();
  }
  buildForm() {

    this.filtersFormGroup = this._formBuilder.group({

    });
  }

  ngAfterViewInit() {

  }

  editUser(id) {
    this._usrService.setSelectedUser(id);
    this.user$ = this._usrService.getSelectedUser();
  }

  newUser() {

  }

  fillRoles() {
    this.roles$ = this._rolesService.getAll();
  }

  rolesChanged(role) {
    console.log("Roles changed: " + role)
  }

  submit() {
    this.toastrService.success("Usuario dado de alta correctamente. ", "OK!");
    this.router.navigate(['/users']);    
    
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
