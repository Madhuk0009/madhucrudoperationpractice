import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  jsonurl:string= "http://localhost:3000/users";

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
  
  // putusers(updatedItem:any,id:number){
  //   return this.http.put(`${this.jsonurl}${id}`,updatedItem);
  // }

  deleteusers(id:any){
    return this.http.delete(`${this.jsonurl}/${id}`);
  }
}
