import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorUserComponent } from './sponsor-user.component';


const routes: Routes = [
  {path: '', component: SponsorUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorUserRoutingModule { }
