import { Component, OnInit } from '@angular/core';
import { SponsorUserService } from './sponsor-user.service';
import { ISponsor } from '../i-sponsor';

@Component({
  selector: 'app-sponsor-user',
  templateUrl: './sponsor-user.component.html',
  styleUrls: ['./sponsor-user.component.scss']
})
export class SponsorUserComponent implements OnInit {

  private initialDate = new Date('Fri Jul 19 2019'); // Sexta-feira anterior ao primeiro dia
  private checkDate: Date;
  intervalDays = 7;
  peopleList: ISponsor[] = [
    {
      name: 'Jeferson',
      order: 1 // 1 - 7
    }, {
      name: 'Quadrotti',
      order: 2 // 8 - 14
    }, {
      name: 'Rafão',
      order: 3 // 15 - 21
    }, {
      name: 'Richard',
      order: 4 // 22 - 28
    }, {
      name: 'Ivan',
      order: 5 // 29 - 35
    }, {
      name: 'Erick',
      order: 6 // 36 - 42
    }, {
      name: 'Larissa',
      order: 7 // 43 - 49
    }, {
      name: 'João',
      order: 8 // 50 - 56
    }, {
      name: 'Guilherme',
      order: 9 // 57 - 63
    }, {
      name: 'Nayara',
      order: 10 // 64 - 70
    }, {
      name: 'Anderson',
      order: 11 // 71 - 77
    }, {
      name: 'Gustavo',
      order: 12 // 78 - 84
    }
  ];

  currentSponsor: ISponsor;

  constructor(private userService: SponsorUserService) { }

  ngOnInit() {
    this.checkDate = new Date();
    this.getSponsor();
  }

  private getSponsor() {
    this.currentSponsor = this.userService.getNextSponsor(this.peopleList, this.initialDate, this.checkDate, this.intervalDays);
  }

  private getDays(): number {
    return 1000 * 60 * 60 * 24 * 7;
  }

  checkPrevious() {
    this.checkDate = new Date(this.checkDate.getTime() - this.getDays());
    this.getSponsor();
  }

  checkNext() {
    this.checkDate = new Date(this.checkDate.getTime() + this.getDays());
    this.getSponsor();
  }

}
