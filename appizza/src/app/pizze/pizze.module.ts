import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PizzePageRoutingModule } from './pizze-routing.module';
import { PizzePage } from './pizze.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    PizzePageRoutingModule,
    SharedModule
  ],
  declarations: [PizzePage],

})
export class PizzePageModule {}
