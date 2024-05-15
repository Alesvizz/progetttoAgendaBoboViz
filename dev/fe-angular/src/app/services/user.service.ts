import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getTutorials() : Observable<any> {
      return this.httpClient.get('http://localhost:4200/api/tutorials/list');
  }

  createUser(user : any) : Observable<any> {
    return this.httpClient.post('http://localhost:4200/api/users/register', user);
}
}
