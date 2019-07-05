import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '@models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pesonal-data-form',
  templateUrl: './pesonal-data-form.component.html',
  styleUrls: ['./pesonal-data-form.component.scss']
})
export class PesonalDataFormComponent implements OnInit, AfterViewInit {
  personalFormGroup: FormGroup;
  user$: Observable<User>;
  constructor(private _formBuilder: FormBuilder, private _usrService: UsersService) { }

  ngOnInit() {
    this.buildForm();
  }

  ngAfterViewInit(){
    
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

}
