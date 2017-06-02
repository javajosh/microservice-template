import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-green-square',
  templateUrl: './green-square.component.html',
  styleUrls: ['./green-square.component.css']
})
export class GreenSquareComponent implements OnInit {
  public width : number = 100;
  public height : number = 200;

  constructor() { }

  ngOnInit() {
    //TODO: make this work
    setInterval(()=>{this.height++; console.log(this.height)}, 100);
  }

}
