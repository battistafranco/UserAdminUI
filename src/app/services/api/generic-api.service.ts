import { Observable, of } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiEndpoint; 

@Injectable({
  providedIn: "root"
})
export abstract class GenericApiService<T> {
  protected abstract basePath: string;
  constructor(public http: HttpClient) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${apiUrl}/${this.basePath}`).pipe(
      tap(res => console.log("fetched GetAll" + this.basePath)),
      catchError(this.handleError("GetAll", []))
    );
  }

  getByID(id: string): Observable<T> {
    return this.http.get<T>(`${apiUrl}/${this.basePath}/GetByID/${id}`).pipe(
      tap(res => console.log("fetched GetByID" + this.basePath)),
      catchError(this.handleError("GetByID", null))
    );
  }

  getExceptID(id: string): Observable<T[]> {
    return this.http.get<T[]>(`${apiUrl}/${this.basePath}/getExceptID/${id}`).pipe(
      tap(res => console.log("fetched GetExceptID" + this.basePath)),
      catchError(this.handleError("GetExceptID", []))
    );
  }

  public create(item: T): Observable<T> {
    return this.http.post<T>(`${apiUrl}/${this.basePath}/Create`, item).pipe(
      tap(data => {
        console.log(data);
        data as T;
      }),
      catchError(this.handleError("Create", null))
    );
  }

  delete(id: number) {
    
    return this.http.delete(`${apiUrl}/${this.basePath}/Delete/${id}`).pipe(
      tap(data => {
        console.log(data);       
      }),
      catchError(this.handleError("Delete", null))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
