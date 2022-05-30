import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliocommentiPageRoutingModule } from './dettagliocommenti-routing.module';

import { DettagliocommentiPage } from './dettagliocommenti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettagliocommentiPageRoutingModule
  ],
  declarations: [DettagliocommentiPage]
})
export class DettagliocommentiPageModule {}
