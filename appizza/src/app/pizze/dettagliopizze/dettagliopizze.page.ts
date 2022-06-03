import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Commento } from 'src/app/models/commento';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';
@Component({
  selector: 'app-dettagliopizze',
  templateUrl: './dettagliopizze.page.html',
  styleUrls: ['./dettagliopizze.page.scss'],
})
export class DettagliopizzePage implements OnInit {
  pizza: Pizza;
  errMsg: string;
  starRating = 0;
  idPizza: number;
  piattiErrMsg: string;
  url = `http://foodapi.test`;
  commenti: Commento[];
  constructor(
    private pizzaService: PizzaService,
    private route: ActivatedRoute,
    private asc: ActionSheetController
  ) { }

  getPizza() {
    this.idPizza = this.route.snapshot.params.id;
    return this.pizzaService.getPizzaId(this.idPizza)
      .subscribe(
        pizza => this.pizza = pizza,
        errMsg => this.errMsg = errMsg
      );

  }
  ngOnInit(): void {
    this.getPizza();

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
