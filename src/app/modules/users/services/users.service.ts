import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericApiService } from '../../../services/api/generic-api.service';
import { User } from '../../../models/user';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { tap, catchError } from 'rxjs/operators';

const apiUrl = environment.apiEndpoint;

@Injectable()
export class UsersService extends GenericApiService<User> {
  basePath: string = "user";
  constructor(http: HttpClient) {
    super(http);
  }

  getByRoleID(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}/${this.basePath}/GetUsersByRoleID/${id}`).pipe(
      tap(res => console.log("fetched GetByRoleID" + this.basePath))
    )
  }

  
}