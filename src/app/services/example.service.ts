import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { text } from 'stream/consumers';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  var_service ="estoy en el bootcamp";
  api_url='https://jsonplaceholder.typicode.com/'
  constructor(private http:HttpClient){}


  obtenerLista(){
    return this.http.get(this.api_url+'posts')
  }
  agregarElemento(){

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
