import { Component,inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDataService } from '../data.service';


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
  constructor(private dataService: MyDataService) {}

  ngOnInit() {
    this.shipping = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.dataService.getData().subscribe(
      (results: CardData[]) => {
        this.data = results;
        console.log(this.data);
        
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  
  }

}
