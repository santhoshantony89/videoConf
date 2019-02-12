import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //showDisplay: boolean = false;
  flip : boolean = false;

  displayBroadcast(){
    //this.showDisplay = true;
    this.flip = true;
  }

}
