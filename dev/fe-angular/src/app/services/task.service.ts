import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }
  
  getData() : Observable<any> {
    return this.httpClient.get('http://localhost:4200/api/task/list');
  }

  addTask(task : any) : Observable<any> {
    return this.httpClient.post('http://localhost:4200/api/task', task);
  }

  deleteTask(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:4200/api/task/${id}`, {});
  }
}
