import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-conf',
  templateUrl: './join-conf.component.html',
  styleUrls: ['./join-conf.component.css']
})
export class JoinConfComponent implements OnInit {
  title = 'cloudline';

  @Output() callingBroadCast = new EventEmitter<any>();

  cardTitle: string = "JOIN CONFERENCE";
  constructor(private router:Router) { }

  ngOnInit() {
  }

  showBroadCast(){
    this.callingBroadCast.emit(true);
  }
  gotoHome(){
    this.router.navigate(['/home']);
  }
}
