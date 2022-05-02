import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabnavPageRoutingModule } from './tabnav-routing.module';
import { TabnavPage } from './tabnav.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabnavPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [TabnavPage]
})
export class TabnavPageModule {}
