import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<any> {
    return this.http.post( "http://localhost:8080" + "/user/sign-in", {
      login,
      password
    }, httpOptions);
  }

}
