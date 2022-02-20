import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import {map, mapTo} from 'rxjs/operators';
import { User } from '../_models/user';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl ='https://localhost:5001/api/';
  
  constructor( private http: HttpClient) { }
  
 
  register(model:any)
  {
    return this.http.post(this.baseUrl + 'account/register',model).pipe(
      map((user: User) => {
        if(user)
        {
          localStorage.setItem('user',JSON.stringify(user));

        }
      })
    )
  }
}
