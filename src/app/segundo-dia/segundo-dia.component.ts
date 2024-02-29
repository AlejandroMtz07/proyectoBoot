import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-segundo-dia',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './segundo-dia.component.html',
  styleUrl: './segundo-dia.component.scss'
})
export class SegundoDiaComponent {
  variable=''
  btn_class="btn btn-success"
  name=''
  description=''
  
  formularioUser:FormGroup = new FormGroup({
    name:new FormControl(''),
    description: new FormControl('')
  })

  user =[
    {
    name:'luis',
    descripcion:'Esta es la descripcion'
    },
    {
      name:'angel',
      descripcion:'Esta es la descripcion 2'
    },
    {
      name:'fernando',
      descripcion:'Esta es la descripcion 3'
    }
  ]
  constructor(){
    console.log("Se ejecutó el constructor")
  }
  ngOnInit() {
    console.log("Se ejecutó el componente")
  }
  ngDoCheck(): void {
    console.log("se ejecutó el docheck")
  }
  clickButton(text:string){
    console.log(text);
    this.variable= text
  }
  submitForm(){
    console.log(this.formularioUser.value);
    // console.log("el nombre es--->",this.name,"la descripcion es-->",this.description)
  }
}
