import { Component, OnInit } from '@angular/core';
import { Insalatona } from '../models/insalatona';
import { InsalatonaService } from './../services/insalatona.service';

@Component({
  selector: 'app-insalatone',
  templateUrl: './insalatone.page.html',
  styleUrls: ['./insalatone.page.scss'],
})
export class InsalatonePage implements OnInit {
  insalatone: Insalatona[];
  piattiErrMsg: string;
  url = `http://foodapi.test`;
  constructor(private insalatoneService: InsalatonaService) { }
  getInsalatone() {
    this.insalatoneService.getInsalatone().subscribe(
      insalatone => this.insalatone = insalatone,
      errMsg => this.piattiErrMsg = errMsg
    );
  }
  ngOnInit() {
    this.getInsalatone();
  }

}
