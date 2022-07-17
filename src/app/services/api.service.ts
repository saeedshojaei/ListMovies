import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public get<T>(option: any = {}): Observable<T> {
    let httpParams: HttpParams = new HttpParams();
    if (option) {
      Object.keys(option).map((x: string) => {
        httpParams = httpParams.set(x, option[x]);
      });
    }
    return this.http.get<T>(`${this.baseUrl}`, { params: option })
  }
}
