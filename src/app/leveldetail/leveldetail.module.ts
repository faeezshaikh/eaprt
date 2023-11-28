import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeveldetailPageRoutingModule } from './leveldetail-routing.module';

import { LeveldetailPage } from './leveldetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeveldetailPageRoutingModule
  ],
  declarations: [LeveldetailPage]
})
export class LeveldetailPageModule {}
