import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Commento } from 'src/app/models/commento';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';
import { CommentiformPage } from './../../commenti/commentiform/commentiform.page';
@Component({
  selector: 'app-dettagliopizze',
  templateUrl: './dettagliopizze.page.html',
  styleUrls: ['./dettagliopizze.page.scss'],
})
export class DettagliopizzePage implements OnInit {
  @Input()titolo: string;
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
    private asc: ActionSheetController,
    private modalController: ModalController
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
          this.showModal();
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
  async showModal() {
    const modal = await this.modalController.create({
    component: CommentiformPage,
    componentProps: { titolo: this.pizza.titolo }
    });

    await modal.present();
    const {data}= await modal.onDidDismiss();
    console.log('Dati passati in fase di chiusura '+ JSON.stringify(data));

  }
}
