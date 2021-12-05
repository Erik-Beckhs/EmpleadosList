import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
  @Input() masculino!:number;
  @Input() femenino!:number;
  @Output() radioButton:EventEmitter<string> = new EventEmitter<string>();

  checkRadio:string="Todos"
  ngOnInit(): void {
  }

  valueRadio(valor:any){
    //console.log(valor.value);
    this.radioButton.emit(valor.value);
  }

}
