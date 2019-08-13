import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SponsorUserService {

  constructor() { }

  private getDiffDays = (baseD, checkDate) => {  
    // Garantir que a hora seja sempre zerada
    baseD.setHours(0, 0, 0, 0);
    checkDate.setHours(0, 0, 0, 0);
    
    const diffTime = Math.abs(checkDate.getTime() - baseD.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
  };

  private getIntervalOrder = (listPeople, diff, intBase) => {
    return Math.ceil((diff - (Math.floor(diff / (listPeople.length * intBase)) * (listPeople.length * intBase))))
  };

  getNextPerson = (listPeople, initialDate, checkDate, intervalDays) => {  
    const diff = this.getDiffDays(initialDate, checkDate);
    const nextOrder = this.getIntervalOrder(listPeople, diff, intervalDays);
    const nextPeopleOrder = Math.ceil(nextOrder / intervalDays);
    
    return listPeople.find(p => p.order === nextPeopleOrder);
  };
}
