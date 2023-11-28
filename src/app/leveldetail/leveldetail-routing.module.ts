import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeveldetailPage } from './leveldetail.page';

const routes: Routes = [
  {
    path: '',
    component: LeveldetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeveldetailPageRoutingModule {}
