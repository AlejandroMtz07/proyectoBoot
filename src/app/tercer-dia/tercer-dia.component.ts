import { Component } from '@angular/core';
import { ExampleService } from '../services/example.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tercer-dia',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './tercer-dia.component.html',
  styleUrl: './tercer-dia.component.scss'
})
export class TercerDiaComponent {
  name ='';
  user:any=[]
  constructor(public service:ExampleService){}
  
  ngOnInit() {
    this.service.obtenerLista().subscribe(resp=>{
      console.log(resp);
      this.user=resp
    })
  }

  editarTexto(text:string){
    console.log(text)
    return text;
  }
}
