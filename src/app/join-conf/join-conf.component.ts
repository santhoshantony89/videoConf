import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-join-conf',
  templateUrl: './join-conf.component.html',
  styleUrls: ['./join-conf.component.css']
})
export class JoinConfComponent implements OnInit {
  title = 'cloudline';

  @Output() callingBroadCast = new EventEmitter<any>();

  cardTitle: string = "JOIN CONFERENCE";
  constructor() { }

  ngOnInit() {
  }

  showBroadCast(){
    this.callingBroadCast.emit(true);
  }

}
