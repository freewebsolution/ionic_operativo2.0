import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { InsalatonaService } from 'src/app/services/insalatona.service';
import { Insalatona } from './../../models/insalatona';

@Component({
  selector: 'app-dettaglioinsalatone',
  templateUrl: './dettaglioinsalatone.page.html',
  styleUrls: ['./dettaglioinsalatone.page.scss'],
})
export class DettaglioinsalatonePage implements OnInit {
  insalata: Insalatona;
  errMsg: string;
  starRating = 0;
  idInsalata: number;
  piattiErrMsg: string;
  url = `http://foodapi.test`;
  constructor(private insalataService: InsalatonaService,
    private route: ActivatedRoute,
    private asc: ActionSheetController
  ) { }

  getInsalatona() {
    this.idInsalata = this.route.snapshot.params.id;
    return this.insalataService.getInsalataId(this.idInsalata)
      .subscribe(
        insalata => this.insalata = insalata,
        errMsg => this.errMsg = errMsg
      );

  }
  ngOnInit(): void {
    this.getInsalatona();

  }
  async showActionSheet() {
    const actionSheet = await this.asc.create({
      header: 'Seleziona...',
      buttons: [{
        text: 'Commenta',
        icon: 'send',
        handler: () => {
          console.log('Comment clicked');
        }
      }, {
        text: 'Imposta preferito',
        icon: 'heart',
        handler: () => {
          console.log('preferito clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
