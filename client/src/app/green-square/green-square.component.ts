import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-green-square',
  templateUrl: './green-square.component.html',
  styleUrls: ['./green-square.component.css']
})
export class GreenSquareComponent implements OnInit {
  public width : number = 100;
  public height : number = 100;

  private timerId : any;
  constructor() { }

  ngOnInit() {
    this.timerId = setInterval(()=>{
      this.height++; this.width++;
      // console.log(this.height, this.width)
    }, 100);
  }

  stop(){
    clearInterval(this.timerId);
  }
}
