import { Injectable } from "@angular/core";
import { GenericApiService } from "@services/api/generic-api.service";
import { Method } from "@models/method";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { tap, catchError } from "rxjs/operators";

const apiUrl = environment.apiEndpoint;

@Injectable({
  providedIn: "root"
})
export class MethodsService extends GenericApiService<Method> {
  protected basePath: string = "method";

  constructor(http: HttpClient) {
    super(http);
  }

  getByRoleID(id: number): Observable<Method[]> {
    return this.http
      .get<Method[]>(`${apiUrl}/${this.basePath}/GetByRoleID/${id}`)
      .pipe(tap(res => console.log("fetched GetByRoleID" + this.basePath)));
  }
}
