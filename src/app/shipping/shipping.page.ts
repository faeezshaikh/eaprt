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

///


interface IrisData {
  config: {};
  Capabilities: Capability[];
 }

 interface Capability {
    Type: string;
    Name: string;
    InternalId: string;
    CreatedBy: string;
    CreatedTimestamp: string;
    ModifiedBy: string;
    ModifiedTimestamp: string;
    ProtectfromDelete: boolean;
    Filtered: boolean;
    Children: Level1sChild[]
 }

 interface Level1sChild {
    Type: string;
    Name: string;
    Description: string;
    InternalId: string;
    CreatedBy: string;
    CreatedTimestamp: string;
    ModifiedBy: string;
    ModifiedTimestamp: string;
    ProtectfromDelete: boolean;
    Filtered: boolean;
    Attributes: Attrib[],
    Children: Level2sChild[]
    Comments: Comment[]
 }

 interface Attrib {
  AttributeName: string;
  AttributeValue: string;

 }

 interface Comment {
  CommentingUser: string;
  Comment: string;
  CommentDate: string;
  CommentArchived: boolean
 }

 interface Level2sChild {
  Type: string;
  Name: string;
  Description: string;
  InternalId: string;
  CreatedBy: string;
  CreatedTimestamp: string;
  ModifiedBy: string;
  ModifiedTimestamp: string;
  Filtered: boolean;
  CapEnablesStageRelationship: any[],
  Attributes: Attrib[],
  Children: Level2sChild[]
  Comments: Comment[]

 }
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
  constructor(private dataService: MyDataService,private modalCtrl: ModalController) {}

  ngOnInit() {
    this.shipping = this.activatedRoute.snapshot.paramMap.get('id') as string;
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
