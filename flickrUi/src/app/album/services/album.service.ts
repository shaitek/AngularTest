import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AlbumService {
  results: Array<any> = [];
  constructor(private http: HttpClient) {}

  getPublicPhotos(value: any): Observable<any> {
    return this.http.get(`${environment.apiHost}/api/photos`, {
      params: new HttpParams().set("tag", value)
    });
  }
}
