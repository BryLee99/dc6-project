import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'incre-decre',
  templateUrl: './incre-decre.component.html',
  styleUrls: ['./incre-decre.component.css']
})
export class IncreDecreComponent{

  constructor() { }

  ngOnInit(): void {
  }
  FinalRes = 0;
  rndNumber = (Math.random() * 10).toFixed(0);

  Increment(){
    this.FinalRes =  this.FinalRes += Math.floor(Math.random( ) * 10);
    
  }
  Decrement(){
    this.FinalRes =  this.FinalRes -= Math.floor(Math.random( ) * 10);
  }
}
