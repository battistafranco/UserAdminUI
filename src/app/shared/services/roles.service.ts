import { Injectable } from '@angular/core';
import { Rol } from '@models/rol';
import { GenericApiService } from '@services/api/generic-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RolesService extends GenericApiService<Rol> {
  protected basePath: string = "role";
  constructor(http: HttpClient) {
    super(http);
  }
}