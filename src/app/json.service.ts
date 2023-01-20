import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(public http: HttpClient) {
    this.loadpost();
   }


   loadpost(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
   }

   post(value:any){
    console.log(value)
    return this.http.get('https://jsonplaceholder.typicode.com/users'+'/'+value)
   }

}
