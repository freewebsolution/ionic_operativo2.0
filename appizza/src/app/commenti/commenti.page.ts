import { Component, OnInit } from '@angular/core';
import { Commento } from '../models/commento';
import { CommentiService } from './../services/commenti.service';
@Component({
  selector: 'app-commenti',
  templateUrl: './commenti.page.html',
  styleUrls: ['./commenti.page.scss'],
})
export class CommentiPage implements OnInit {
  commenti: Commento[];
  errMsg: string;
  starRating = 0;
  constructor(private commentiService: CommentiService) { }

  getCommento(){
    return this.commentiService.getCommenti()
    .subscribe(
      commenti => this.commenti = commenti,
      errMsg => this.errMsg = errMsg
    );
  }
  ngOnInit(): void {
    this.getCommento();

  }

}
