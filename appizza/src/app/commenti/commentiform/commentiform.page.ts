import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-commentiform',
  templateUrl: './commentiform.page.html',
  styleUrls: ['./commentiform.page.scss'],
})
export class CommentiformPage implements OnInit {
  titolo: string;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  onClick() {
    this.modalController.dismiss({nome:'Lucio'});
  }
  onSubmit(form) {
    this.modalController.dismiss(form.value);
  }
}
