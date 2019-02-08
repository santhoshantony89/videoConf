import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-conf',
  templateUrl: './join-conf.component.html',
  styleUrls: ['./join-conf.component.css']
})
export class JoinConfComponent implements OnInit {
  title = 'cloudline';

  cardTitle: string = "JOIN CONFERENCE";
  constructor() { }

  ngOnInit() {
  }

}
