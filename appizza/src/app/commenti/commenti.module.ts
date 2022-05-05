import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentiPageRoutingModule } from './commenti-routing.module';

import { CommentiPage } from './commenti.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentiPageRoutingModule
  ],
  declarations: [CommentiPage]
})
export class CommentiPageModule {}
