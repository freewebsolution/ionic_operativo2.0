import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferitiPageRoutingModule } from './preferiti-routing.module';

import { PreferitiPage } from './preferiti.page';
import { ToolbarComponent } from './../shared/toolbar/toolbar.component';
@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    PreferitiPageRoutingModule
  ],
  declarations: [PreferitiPage, ToolbarComponent]
})
export class PreferitiPageModule {}
