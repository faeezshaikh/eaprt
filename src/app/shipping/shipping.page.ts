import { Component,inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDataService } from '../data.service';
import { CardDetailsPage } from '../card-details/card-details.page';
import { ModalController } from '@ionic/angular';


interface CardData {
  id: number;
  type: string;
  title: string;
  content: string;
  color: string;
  elements: ElementData[]; // Assuming each element has the same structure
}

interface ElementData {
  id: number;
  type: string;
  title: string;
  content: string;
  color: string;
}

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.page.html',
  styleUrls: ['./shipping.page.scss'],
})
export class ShippingPage implements OnInit {

  public shipping!: string;
  private activatedRoute = inject(ActivatedRoute);
  data: CardData[] = [];
  filteredData: CardData[] = [];
  searchTerm: string = '';
  message = 'This modal example uses the modalController to present and dismiss modals.';
  constructor(private dataService: MyDataService,private modalCtrl: ModalController) {}

  ngOnInit() {
    this.shipping = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.dataService.getData().subscribe(
      (results: CardData[]) => {
        this.data = results;
        this.filteredData = results; 
        console.log(this.data);
        
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  
  }

  filterData() {
    if (!this.searchTerm) {
      this.filteredData = this.data;
      return;
    }

    this.filteredData = this.data.filter(card => 
      card.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      card.content.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      card.color.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      card.elements.some(element => 
        element.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        element.content.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        element.color.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CardDetailsPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }

}
