import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Capability, Level1sChild } from '../Capability';

@Component({
  selector: 'app-leveldetail',
  templateUrl: './leveldetail.page.html',
  styleUrls: ['./leveldetail.page.scss'],
})
export class LeveldetailPage implements OnInit {


  public name!: string;
  public type!: string;
  public item!: Capability;
  public parentName!: string;
  public children: Level1sChild[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const item = navigation?.extras.state?.['data'];
    const parentName = navigation?.extras.state?.['parentName'];
    // console.log("Accepted item", item);
    this.name = item.Name;
    this.item = item;
    this.children = item.Children;
    this.type = item.Type;
    this.parentName = parentName;
    
  }

  getColor(attributeValue: any): string {
    switch (attributeValue) {
      case 'Published':
        return 'success';
      case 'Approved':
        return 'secondary';
      case 'In Progress':
        return 'danger';
      // Add more cases as needed
      default:
        return 'medium'; // Default color if none of the conditions are met
    }
  }
  
}
