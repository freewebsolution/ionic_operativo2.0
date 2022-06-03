import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioinsalatonePageRoutingModule } from './dettaglioinsalatone-routing.module';

import { DettaglioinsalatonePage } from './dettaglioinsalatone.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioinsalatonePageRoutingModule,
    SharedModule
  ],
  declarations: [DettaglioinsalatonePage]
})
export class DettaglioinsalatonePageModule {}
