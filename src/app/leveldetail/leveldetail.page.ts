import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Capability } from '../Capability';

@Component({
  selector: 'app-leveldetail',
  templateUrl: './leveldetail.page.html',
  styleUrls: ['./leveldetail.page.scss'],
})
export class LeveldetailPage implements OnInit {


  public name!: string;
  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const item = navigation?.extras.state?.['data'];
    console.log("Accepted item", item);
    this.name = item.Name;
    
  }

}