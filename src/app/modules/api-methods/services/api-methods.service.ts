import { Injectable } from '@angular/core';
import { Method } from '@models/method';
import { GenericApiService } from '@services/api/generic-api.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiMethodsService extends GenericApiService<Method> {
  protected basePath: string = "method";
  constructor(http: HttpClient) {
    super(http);
  }
}
