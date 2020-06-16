import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient, private router: Router) {}

  set(key: string, value: any): any {
    localStorage.setItem(key, value);
  }

  get(key: string): any {
    return localStorage.getItem(key);
  }

  remove(key: string): any {
    return localStorage.removeItem(key);
  }

  getAccessControlList() {
    const data = localStorage.getItem('token');
    if (!data) {
      return [];
    } else {
      return data;
    }
  }

  getCurrentUserId() {
    const token = localStorage.getItem('token');
    if (token) {
      const jwtPayload = this.jwtHelper.decodeToken(token);
      return jwtPayload.uuid;
    } else {
      return false;
    }
  }

  getCurrentUserInfoId() {
    const token = localStorage.getItem('token');
    if (token) {
      const jwtPayload = this.jwtHelper.decodeToken(token);
      // console.log(jwtPayload);
      return jwtPayload.user_info_id;
    } else {
      return false;
    }
  }

  getCurrentUser() {
    const token = localStorage.getItem('token');
    if (token) {
      const jwtPayload = this.jwtHelper.decodeToken(token);
      return jwtPayload;
    } else {
      return false;
    }
  }

  
}
