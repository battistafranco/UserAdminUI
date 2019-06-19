import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TranslateService {
  data: any = {};

  constructor(private http: HttpClient) {}

  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const langPath = `assets/i18n/${lang || "es"}.json`;
      const language = lang != "" ? lang : "es";
      sessionStorage.setItem("LANG", language);
      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
}
