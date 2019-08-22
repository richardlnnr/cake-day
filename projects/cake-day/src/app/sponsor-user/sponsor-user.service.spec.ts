import { TestBed } from '@angular/core/testing';

import { SponsorUserService } from './sponsor-user.service';

describe('SponsorUserService', () => {
  let service: SponsorUserService;
  const intervalDays = 7;
  const peopleList = [
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

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(SponsorUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should bring the first person', () => {
    const initialDate = new Date('2019/7/19');
    const checkDate = new Date('2019/7/20');
    const nextPerson = service.getNextSponsor(peopleList, initialDate, checkDate, intervalDays);
    expect(nextPerson.name).toEqual('Jeferson');
  });

  it('should continuous bringing the first person', () => {
    const initialDate = new Date('2019/7/19');
    const checkDate = new Date('2019/7/26');
    const nextPerson = service.getNextSponsor(peopleList, initialDate, checkDate, intervalDays);
    expect(nextPerson.name).toEqual('Jeferson');
  });

  it('should bring the fourth person', () => {
    const initialDate = new Date('2019/7/19');
    const checkDate = new Date('2019/8/15');
    const nextPerson = service.getNextSponsor(peopleList, initialDate, checkDate, intervalDays);
    expect(nextPerson.name).toEqual('Richard');
  });

  it('should bring the fourth person', () => {
    const initialDate = new Date('2019/7/19');
    const checkDate = new Date('2019/8/19');
    const nextPerson = service.getNextSponsor(peopleList, initialDate, checkDate, intervalDays);
    expect(nextPerson.name).toEqual('Ivan');
  });

  it('should bring a past person', () => {
    const initialDate = new Date('2019/7/19');
    const checkDate = new Date();
    checkDate.setMonth(checkDate.getMonth() - 1);
    const nextPerson = service.getNextSponsor(peopleList, initialDate, checkDate, intervalDays);
    expect(nextPerson.textColor).toEqual('text-green');
    expect(nextPerson.dateToPay).toEqual(service.getDateToPay(checkDate));
  });

  it('should bring the current person', () => {
    const initialDate = new Date('2019/7/19');
    const checkDate = new Date();
    const nextPerson = service.getNextSponsor(peopleList, initialDate, checkDate, intervalDays);
    expect(nextPerson.textColor).toEqual('text-red');
    expect(nextPerson.dateToPay).toEqual(service.getDateToPay(checkDate));
  });

  it('should bring a future person', () => {
    const initialDate = new Date('2019/7/19');
    const checkDate = new Date();
    checkDate.setMonth(checkDate.getMonth() + 1);
    const nextPerson = service.getNextSponsor(peopleList, initialDate, checkDate, intervalDays);
    expect(nextPerson.textColor).toEqual('text-orange');
    expect(nextPerson.dateToPay).toEqual(service.getDateToPay(checkDate));
  });

  it('should format the pay date to friday', () => {
    const dateCheck = new Date('2019/7/15');
    const dateCheckFriday = new Date('2019/7/19');
    expect(dateCheckFriday).toEqual(service.getDateToPay(dateCheck));
  });

});
