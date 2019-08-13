import { Component, OnInit } from '@angular/core';
import { SponsorUserService } from './sponsor-user.service';
import { IPerson } from './domain/i-person';

@Component({
  selector: 'app-sponsor-user',
  templateUrl: './sponsor-user.component.html',
  styleUrls: ['./sponsor-user.component.scss']
})
export class SponsorUserComponent implements OnInit {

  intervalDays = 7;
  peopleList: IPerson[] = [
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
  currentSponsor: IPerson;
  nextDayToPay: Date;

  constructor(private userService: SponsorUserService) { }

  ngOnInit() {
    this.nextDayToPay = new Date();
    this.nextDayToPay.setDate(this.nextDayToPay.getDate() + (5 + 7 - this.nextDayToPay.getDay()) % 7);

    const initialDate = new Date('Fri Jul 19 2019'); // Sexta-feira anterior ao primeiro dia
    this.currentSponsor = this.userService.getNextPerson(this.peopleList, initialDate, new Date(), this.intervalDays);
  }

}
