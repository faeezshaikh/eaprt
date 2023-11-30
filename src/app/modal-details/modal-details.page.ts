import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.page.html',
  styleUrls: ['./modal-details.page.scss'],
})
export class ModalDetailsPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  @Input() value: any;

  ngOnInit() {
    console.log("Received:",this.value);
    
  }

  cancel(){
    this.modalCtrl.dismiss();

  }
  confirm(){
    this.modalCtrl.dismiss();
  }
}
