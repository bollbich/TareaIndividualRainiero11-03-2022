import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent {

  dias:string[]= ['Lunes','Martes','Miercoles','Jueves','Viernes', 'Sabado', 'Domingo'];

BorrarDia(diaSelecionado:string):void{
  this.dias = this.dias.filter(dia => dia != diaSelecionado);
}
}
