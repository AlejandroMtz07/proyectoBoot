import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { text } from 'stream/consumers';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  var_service ='';
  api_url='https://jsonplaceholder.typicode.com/'
  newRecord: any={}
  constructor(private http:HttpClient){}


  obtenerLista(){
    return this.http.get(this.api_url+'posts')
  }
  MetodoPost(): Observable<any> {
    return this.http.post((this.api_url+'posts'),{
      Headers:{
        'content-type':'aplication/json;'
      },
      id: 1,
      title:'foo',
      body:'bar',
      userId:1,
    })
  }
  editarElemento(){

  }
  eliminarElemento(){
    
  }
  onClickButton(text:string){
    console.log(text)
    this.var_service=text
  }
}
