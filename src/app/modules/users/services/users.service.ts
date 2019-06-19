import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericApiService } from '../../../services/api/generic-api.service';
import { User } from '../../../models/user';


@Injectable()
export class UsersService extends GenericApiService<User> {
  protected basePath: string = "user";
  constructor(http: HttpClient) {
    super(http);
  }
}