import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliopizzePageRoutingModule } from './dettagliopizze-routing.module';

import { DettagliopizzePage } from './dettagliopizze.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettagliopizzePageRoutingModule
  ],
  declarations: [DettagliopizzePage]
})
export class DettagliopizzePageModule {}
