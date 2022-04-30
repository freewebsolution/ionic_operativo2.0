import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsalatonePageRoutingModule } from './insalatone-routing.module';

import { InsalatonePage } from './insalatone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsalatonePageRoutingModule
  ],
  declarations: [InsalatonePage]
})
export class InsalatonePageModule {}
