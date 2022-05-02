import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsalatonePageRoutingModule } from './insalatone-routing.module';

import { InsalatonePage } from './insalatone.page';
import { ToolbarComponent } from './../shared/toolbar/toolbar.component';
@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    InsalatonePageRoutingModule
  ],
  declarations: [InsalatonePage, ToolbarComponent]
})
export class InsalatonePageModule {}
