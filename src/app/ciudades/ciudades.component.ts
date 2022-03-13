import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent {

  ciudades:string[]= ['Murcia','Gijón','Oviedo','Madrid','Barcelona', 'Rota'];
  ciudadesBorradas:string[]= [];

  ciudadBorrada:string = '';

BorrarCiudad():void{
  if(this.ciudades[this.ciudades.length-1]!=null){
    this.ciudadBorrada = this.ciudades[this.ciudades.length-1];
    this.ciudadesBorradas.push(this.ciudades[this.ciudades.length-1]);
  }

  this.ciudades.splice(this.ciudades.length-1);
}

BorrarCiudadArriba():void{
  if(this.ciudades[0]!=null){
    this.ciudadBorrada = this.ciudades[0];
    this.ciudadesBorradas.push(this.ciudades[0]);
  }
  this.ciudades.shift();
}
BorrarCiudadAbajo():void{
  if(this.ciudades[this.ciudades.length-1]!=null){
    this.ciudadBorrada = this.ciudades[this.ciudades.length-1];
    this.ciudadesBorradas.push(this.ciudades[this.ciudades.length-1]);
  }
  this.ciudades.pop();
}

RecargarCiudades():void{
  this.ciudades = ['Murcia','Gijón','Oviedo','Madrid','Barcelona', 'Rota'];
}

}

