import { Component,inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyDataService } from '../data.service';
import { CardDetailsPage } from '../card-details/card-details.page';
import { ModalController, NavController } from '@ionic/angular';
import { LeveldetailPage } from '../leveldetail/leveldetail.page';
import { Capability, Level1sChild } from '../Capability';


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

///


///

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.page.html',
  styleUrls: ['./shipping.page.scss'],
})
export class ShippingPage implements OnInit {

  public shipping!: string;
  private activatedRoute = inject(ActivatedRoute);

  data: Capability[] = [];
  filteredData: Capability[] = [];
  searchTerm: string = '';
  message = 'This modal example uses the modalController to present and dismiss modals.';
  constructor(private dataService: MyDataService,private modalCtrl: ModalController,private route: Router) {}

  ngOnInit() {
    // this.shipping = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.shipping = this.activatedRoute.snapshot.component?.name as string;
    this.dataService.getData().subscribe(
      (results: Capability[]) => {
        this.data = results;
        this.filteredData= results; 
        console.log('Caps' + this.data);
        
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

    // this.filteredData = this.data.filter(card => 
    //   card.Name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    //   card.Type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    //   card.InternalId.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    //   card.Children.some(child => 
    //     child.Name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    //     child.Type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    //     child.Description.toLowerCase().includes(this.searchTerm.toLowerCase())
    //   )
    // );

 
    this.filteredData = this.data.filter(card => 
      card.Name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      card.Children.some(child => 
        child.Name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      )
    ;
  }

  navigateToPage(item: Capability ) {

  
    this.route.navigate(['/leveldetail'], {
      state: { data: item }
    });
  }

  navigateToPage2(item: Level1sChild) {
    this.route.navigate(['/leveldetail'], {
      state: { data: item }
    });
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
