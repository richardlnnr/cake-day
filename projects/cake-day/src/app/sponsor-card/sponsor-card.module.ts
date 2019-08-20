import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorCardComponent } from './sponsor-card.component';



@NgModule({
  declarations: [SponsorCardComponent],
  exports: [
    SponsorCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SponsorCardModule { }
