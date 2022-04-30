import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from './../services/pizza.service';

@Component({
  selector: 'app-pizze',
  templateUrl: './pizze.page.html',
  styleUrls: ['./pizze.page.scss'],
})
export class PizzePage implements OnInit {
  pizze: Pizza[];
  piattiErrMsg: string;
  constructor(private pizzaService: PizzaService) { }
  getPizza() {
    this.pizzaService.getPizze().subscribe(
      pizze => this.pizze = pizze,
      errMsg => this.piattiErrMsg = errMsg
    );
  }
  ngOnInit() {
    this.getPizza();
  }

}
