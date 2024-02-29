import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})
export class PrimerDiaComponent {
    @Input()ejemplo:string=''
    @Input()usuario:number=0

    title = 'Tarjeta de valores';
    description = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500';
    card = {
      title:'Tarjeta de valores',
      description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      aviso:'Debes de ingresar datos',
      contenido:'Este es un modal lanzado por un boton'
    }
    
}
  

