import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../../../models/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RolesService } from '@shared/services/roles.service';
import { Rol } from '@models/rol';

@Component({
  selector: 'app-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.scss']
})
export class PersonalDataFormComponent implements OnInit, AfterViewInit {
  personalFormGroup: FormGroup;
  @Input() user: User;
  roles$: Observable<Rol[]>;
  constructor(private _formBuilder: FormBuilder, private _rolesService: RolesService) { }

  ngOnInit() {
    this.buildForm();
    this.getAllRoles();
  }

  ngAfterViewInit() {
    if (this.user)
      this.personalFormGroup.patchValue(this.user);
  }

  buildForm() {
    this.personalFormGroup = this._formBuilder.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      dni: [null, Validators.required],
      telefono: [null],
      rol: [null, Validators.required]
    });
  }

  getAllRoles() {
    this.roles$ = this._rolesService.getAll();
    
  }

}
