import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { LoginPage } from 'src/app/login/login.page';
import { Commento } from 'src/app/models/commento';
import { Pizza } from 'src/app/models/pizza';
import { AuthStateService } from 'src/app/services/auth-state.service';
import { PizzaService } from 'src/app/services/pizza.service';
import { CommentiformPage } from './../../commenti/commentiform/commentiform.page';
@Component({
  selector: 'app-dettagliopizze',
  templateUrl: './dettagliopizze.page.html',
  styleUrls: ['./dettagliopizze.page.scss'],
})
export class DettagliopizzePage implements OnInit {
  @Input() titolo: string;
  pizza: Pizza;
  errMsg: string;
  starRating = 0;
  idPizza: number;
  piattiErrMsg: string;
  url = `http://foodapi.test`;
  commenti: Commento[];
  isSignedIn!: boolean;
  constructor(
    private pizzaService: PizzaService,
    private route: ActivatedRoute,
    private asc: ActionSheetController,
    private modalController: ModalController,
    private auth: AuthStateService,
    private alertController: AlertController,
    private router: Router
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
    if (this.auth.userAuthState) {
      this.auth.userAuthState.subscribe((val) => {
        this.isSignedIn = val;
      });
    }

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
    const { data } = await modal.onDidDismiss();
    console.log('Dati passati in fase di chiusura ' + JSON.stringify(data));

  }
  async alertLogin() {
    const alert = await this.alertController.create({
      header: 'Non sei loggato?',
      message: 'devi loggarti o registrarti per poter proseguire?',
      buttons: [
        {
          text: 'Login',
          role:'login',
          handler: () => {
            console.log('login clicked');
            this.router.navigate(['login']);
          }
        },
        {
          text: 'Registrati',
          role: 'registrati',
          handler: () => {
            console.log('register clicked');
            this.router.navigate(['signup']);
          }
        },
      ],
    });

    await alert.present();
  }
}
