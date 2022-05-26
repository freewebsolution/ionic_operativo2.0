import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import { Pizza } from './../models/pizza';
import { Insalatona } from './../models/insalatona';
import { PizzaService } from '../services/pizza.service';
import { InsalatonaService } from './../services/insalatona.service';
import { SwiperComponent } from 'swiper/angular';
import { ViewEncapsulation } from '@angular/core';
import Swiper, { Autoplay, SwiperOptions } from 'swiper';
import SwiperCore, { Pagination, EffectCube} from 'swiper';
import { Voto } from '../models/voto';
SwiperCore.use([Pagination, EffectCube, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit, AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent;
  config: SwiperOptions = {
    slidesPerView: 'auto',
    pagination: true,
    effect: 'cube',
    autoplay: {
      delay:4000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true
    },
  };

  pizze: Pizza[];
  voti: Voto[]=[];
  insalatone: Insalatona[];
  piattiErrMsg: string;
  url = `http://foodapi.test`;
  constructor(private pizzaService: PizzaService, private insalatoneService: InsalatonaService) { }

  getPizza() {
    this.pizzaService.getPizze().subscribe(
      pizze => this.pizze = pizze,
      errMsg => this.piattiErrMsg = errMsg
    );
  }

  getInsalatone() {
    this.insalatoneService.getInsalatone().subscribe(
      insalatone => this.insalatone = insalatone,
      errMsg => this.piattiErrMsg = errMsg
    );
  }
  ngOnInit(): void {
    this.getPizza();
    this.getInsalatone();
  }
  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
  swiperSlideChanged(e) {
    console.log('canged: ', e);
  }

}
