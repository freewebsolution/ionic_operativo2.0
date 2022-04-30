import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzePageRoutingModule } from './pizze-routing.module';

import { PizzePage } from './pizze.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzePageRoutingModule
  ],
  declarations: [PizzePage]
})
export class PizzePageModule {}
