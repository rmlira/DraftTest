import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Lanche } from '../models/lanche';

@Injectable({
  providedIn: 'root',
})
export class LancheService {
  private readonly serviceBaseRoute: string;
  constructor(protected readonly httpClient: HttpClient) {
    this.serviceBaseRoute = environment.routes.lanche.base;
  }

  public getAll(): Observable<Lanche[]> {
    return this.httpClient.get<Lanche[]>(this.serviceBaseRoute);
  }

  public add(entity: Lanche): Observable<Lanche> {
    return this.httpClient.post<Lanche>(this.serviceBaseRoute, entity);
  }

  // tslint:disable-next-line: no-any
  public put(id: string, entity: Partial<Lanche>): Observable<any> {
    return this.httpClient.put(`${this.serviceBaseRoute}/${id}`, entity);
  }

  public delete(id: string): Observable<Lanche> {
    return this.httpClient.delete<Lanche>(`${this.serviceBaseRoute}/${id}`);
  }
}
