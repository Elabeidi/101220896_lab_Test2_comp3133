import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getApiData();
  }

}
