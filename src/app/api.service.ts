import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  jsonurl:string= "http://localhost:3000/users";

  Observable$= new BehaviorSubject("This is Observable concept");

  constructor(private http:HttpClient) { }

  getusers(){
    return this.http.get(this.jsonurl);
  }

  postusers(data:any){
    return this.http.post(this.jsonurl,data);
  }

  putusers(id: any, data: { name: string }): Observable<any> {
    return this.http.put(`${this.jsonurl}/${id}`, data);
  }
  deleteusers(id:any){
    return this.http.delete(`${this.jsonurl}/${id}`);
  }
}
