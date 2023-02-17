import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoGraphComponent } from './crypto-graph/crypto-graph.component';
import { LandingComponent } from './landing/landing.component';
import { PlaceBidComponent } from './place-bid/place-bid.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'bid/:photo',
    component: PlaceBidComponent
  },
  {
    path: 'crypto-trends/:crypto',
    component: CryptoGraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
