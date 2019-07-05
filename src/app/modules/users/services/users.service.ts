import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericApiService } from '../../../services/api/generic-api.service';
import { User } from '../../../models/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '@environments/environment';
import { tap, catchError } from 'rxjs/operators';

const apiUrl = environment.apiEndpoint;

@Injectable()
export class UsersService extends GenericApiService<User> {
  basePath: string = "user";

  private selectedUserSubject: BehaviorSubject<User>;
  public selectedUser: Observable<User>;

  constructor(http: HttpClient) {
    super(http);
  }

  getByRoleID(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}/${this.basePath}/GetUsersByRoleID/${id}`).pipe(
      tap(res => console.log("fetched GetByRoleID" + this.basePath))
    )
  }


  getSelectedUser() : Observable<User> {
    if (this.selectedUser)
      return this.selectedUser;
    else return null;
  }

  setSelectedUser(id) {
    this.getByID(id).pipe(
      tap(user => {
        
        this.selectedUserSubject = new BehaviorSubject<User>(user);
        this.selectedUser = this.selectedUserSubject.asObservable();
      })
    )
  }

}