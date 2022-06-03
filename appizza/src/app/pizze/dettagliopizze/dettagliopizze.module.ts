import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliopizzePageRoutingModule } from './dettagliopizze-routing.module';

import { DettagliopizzePage } from './dettagliopizze.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettagliopizzePageRoutingModule,
    SharedModule
  ],
  declarations: [DettagliopizzePage]
})
export class DettagliopizzePageModule {}
