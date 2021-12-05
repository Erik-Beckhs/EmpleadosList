import { Component, OnInit } from '@angular/core';
import { EmpleadoInterface } from '../model/empleado.interface';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  generoSelected:string = "Todos";

  empleados:EmpleadoInterface[]=[
    {nombre:'Nacho', apellido:'Fernandez', genero:'masculino', salario:12000},
    {nombre:'Julian', apellido:'Alvarez', genero:'masculino', salario:5000},
    {nombre:'Fernanda', apellido:'Gutierrez', genero:'femenino', salario:2000},
    {nombre:'Hilda', apellido:'Juarez', genero:'femenino', salario:1200},
    {nombre:'Kevin', apellido:'Lomas', genero:'masculino', salario:15000}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cantidad(valor:number){
    let cantidad:number=0;
    if(valor==0){
      cantidad = this.empleados.filter(list => list.genero==='femenino').length;
    }
    else{
      cantidad = this.empleados.filter(list => list.genero==='masculino').length;
    }
    return cantidad;
  }

  funcionPadre(genero:any){
    this.generoSelected = genero;
  }
}
