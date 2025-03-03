import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
 isQBConnected=new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient) { }

  postData(endPoint:string,data:{})
  {
    return this.http.post(`${environment.apiUrl}/${endPoint}` ,data)
  }

  getData(endPoint:string)
  {
    return this.http.get(`${environment.apiUrl}/${endPoint}`)
  }
}
