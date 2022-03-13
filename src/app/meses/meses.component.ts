import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent {

  heroes:string[]= ['Ironman','Hulk','Spiderman','Thor','batman'];
  heroesBorrados:string[]= [];

  heroeborrado:string = '';

BorrarHeroe():void{



  if(this.heroes[this.heroes.length-1]!=null){
    this.heroeborrado = this.heroes[this.heroes.length-1];
    this.heroesBorrados.push(this.heroes[this.heroes.length-1]);
  }

  this.heroes.splice(this.heroes.length-1);
}

BorrarHeroeArriba():void{



  if(this.heroes[0]!=null){
    this.heroeborrado = this.heroes[0];
    this.heroesBorrados.push(this.heroes[0]);
  }


  this.heroes.shift();
}
BorrarHeroeAbajo():void{



  if(this.heroes[this.heroes.length-1]!=null){
    this.heroeborrado = this.heroes[this.heroes.length-1];
    this.heroesBorrados.push(this.heroes[this.heroes.length-1]);
  }
  this.heroes.pop();
}

RecargarHeroes():void{
  this.heroes = ['Ironman','Hulk','Spiderman','Thor','batman'];
}

}
