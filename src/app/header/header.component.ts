import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuClicked = new EventEmitter();
  opened : Boolean = false;
  constructor() { }

  ngOnInit() {
  }
  menuClick() { // You can give any function name
    this.opened = !this.opened;
    this.menuClicked.emit(this.opened);
}
}
