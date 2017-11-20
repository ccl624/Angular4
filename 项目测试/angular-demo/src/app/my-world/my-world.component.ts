import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-my-world',
  templateUrl: './my-world.component.html',
  styleUrls: ['./my-world.component.css']
})
export class MyWorldComponent implements OnInit , OnChanges{
  username:string = 'zhangwuji';
  fullName:string = 'zhaomin';
  constructor() { }

  ngOnInit() {
    
  }
  changeName(){
    this.username = 'zhouzhiruo';
  }
  ngOnChanges(){
    console.log(this.fullName);
  }
}
