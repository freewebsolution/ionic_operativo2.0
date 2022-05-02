import { Component, OnInit } from '@angular/core';
import { Pizza } from './../models/pizza';
import { Insalatona } from './../models/insalatona';
import { PizzaService } from '../services/pizza.service';
import { InsalatonaService } from './../services/insalatona.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pizze: Pizza[];
  insalatone: Insalatona[];
  piattiErrMsg: string;
  constructor(private pizzaService: PizzaService , private insalatoneService: InsalatonaService) { }

  getPizza(){
    this.pizzaService.getPizze().subscribe(
      pizze => this.pizze = pizze,
      errMsg => this.piattiErrMsg = errMsg
    );
  }

  getInsalatone() {
    this.insalatoneService.getInsalatone().subscribe(
      insalatone => this.insalatone= insalatone,
      errMsg => this.piattiErrMsg = errMsg
    );
  }
  ngOnInit(): void {
    this.getPizza();
    this.getInsalatone();
  }

}
