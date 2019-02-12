import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened: boolean = false;
  displaySideBar(isOpened){
    console.log(isOpened);
    this.opened = isOpened;
  }
}
