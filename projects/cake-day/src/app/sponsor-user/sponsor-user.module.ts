import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorUserRoutingModule } from './sponsor-user-routing.module';
import { SponsorUserComponent } from './sponsor-user.component';
import { SponsorUserService } from './sponsor-user.service';
import { SponsorCardModule } from '../sponsor-card/sponsor-card.module';


@NgModule({
  declarations: [SponsorUserComponent],
  imports: [
    CommonModule,
    SponsorUserRoutingModule,
    SponsorCardModule
  ],
  providers: [
    SponsorUserService
  ]
})
export class SponsorUserModule { }
