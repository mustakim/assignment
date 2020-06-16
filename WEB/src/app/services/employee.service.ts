import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  EndPoint = environment.API_ENDPOINT + `employees/`;

  constructor(private http: HttpClient) {}

  getAll(
    option: {
      name?: string;
      searchTerm?: String;
      limit?: any;
      page?: any;
    } = {}
  ) {
    return this.http.get(
      `${this.EndPoint}?search_term=${option.searchTerm ||
        ''}&limit=${option.limit || ''}&page=${option.page || ''}`
    );
  }

  getById(id: Number) {
    return this.http.get(`${this.EndPoint}${id}`);
  }

  create(payload: any): Observable<any> {
    return this.http.post(this.EndPoint, payload);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(this.EndPoint + id);
  }
  update(id: Number, payload): Observable<any> {
    return this.http.put(this.EndPoint + id, payload);
  }
}
