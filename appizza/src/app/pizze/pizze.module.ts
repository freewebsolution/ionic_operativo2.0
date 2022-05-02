import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PizzePageRoutingModule } from './pizze-routing.module';
import { PizzePage } from './pizze.page';
import { ToolbarComponent } from './../shared/toolbar/toolbar.component';
@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    PizzePageRoutingModule
  ],
  declarations: [PizzePage, ToolbarComponent]
})
export class PizzePageModule {}
