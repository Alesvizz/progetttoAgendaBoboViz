import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  user:any;

  constructor(private httpClient: HttpClient) { }

  getTutorials() : Observable<any> {
      return this.httpClient.get('http://localhost:4200/api/tutorials/list');
  }

  createUser(user : any) : Observable<any> {
    return this.httpClient.post('http://localhost:4200/api/users/register', user);
}

  loginUsers(user : any) : Observable<any> {
     
    return this.httpClient.post('http://localhost:4200/api/users/login', user);

  }

  getUser(id: number) : Observable<any> {
    return this.httpClient.get(`http://localhost:4200/api/users/${id}`, {});
  }


  setLoggedinUser(user: any) {
    this.user = user;
  }

  getLoggedinUser(): any {
    return this.user;
  }

}
