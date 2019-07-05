import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User, UserCredentials } from '@models/user';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class AuthService {
  private currentUserSubject: BehaviorSubject<UserCredentials>;
  public currentUser: Observable<UserCredentials>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<UserCredentials>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserCredentials {
    if (this.isInToday())
      return this.currentUserSubject.value;
    else return null;
  }

  getCurrentUser() {
    if (this.isInToday())
      return this.currentUser;
    else return null;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiEndpoint}/token/UserAdminLogin`, { "username": username, "password": password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  isInToday() {
    if(this.currentUserSubject.value)
    {
      let inputDate = new Date(this.currentUserSubject.value.timestamp);
      const today = new Date();
      return inputDate.getDate() == today.getDate() &&
        inputDate.getMonth() == today.getMonth() &&
        inputDate.getFullYear() == today.getFullYear()
    }
    else{
      this.logout();
    }
 
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(["/login"]);
  }
}