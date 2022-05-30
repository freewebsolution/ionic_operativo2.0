import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commento } from 'src/app/models/commento';
import { CommentiService } from 'src/app/services/commenti.service';

@Component({
  selector: 'app-dettagliocommenti',
  templateUrl: './dettagliocommenti.page.html',
  styleUrls: ['./dettagliocommenti.page.scss'],
})
export class DettagliocommentiPage implements OnInit {
  commenti: Commento[];
  errMsg: string;
  starRating = 0;
  idPizza: string;
  constructor(private commentiService: CommentiService, private route: ActivatedRoute) { }

  getCommenti() {
    this.idPizza = this.route.snapshot.params.id;
    return this.commentiService.getCommentiId(this.idPizza)
      .subscribe(
        commenti => this.commenti = commenti,
        errMsg => this.errMsg = errMsg
      );
  }
  ngOnInit(): void {
    this.getCommenti();

  }

}
