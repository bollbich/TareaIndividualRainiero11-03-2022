import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent {

  comidas:string[]= ['Paella','Cerdo al ajillo','Fabada','Tortilla','Chuletas'];

BorrarComidas():void{
  this.comidas = [];
}

}
