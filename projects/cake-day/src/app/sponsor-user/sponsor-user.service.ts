import { Injectable } from '@angular/core';
import { ISponsor } from '../i-sponsor';

@Injectable({
  providedIn: 'root'
})
export class SponsorUserService {

  private nextDayToPay: Date = this.getDateToPay(new Date());

  constructor() { }

  private getDiffDays = (baseD: Date, checkDate: Date): number => {  
    // Garantir que a hora seja sempre zerada
    baseD.setHours(0, 0, 0, 0);
    checkDate.setHours(0, 0, 0, 0);
    
    const diffTime = Math.abs(checkDate.getTime() - baseD.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
  };

  private getIntervalOrder = (listPeople: ISponsor[], diff: number, intBase: number): number => {
    return Math.ceil((diff - (Math.floor(diff / (listPeople.length * intBase)) * (listPeople.length * intBase))))
  };

  private getDateToPay(checkDate: Date): Date {
    const nextDayToPay = new Date(checkDate);
    nextDayToPay.setDate(checkDate.getDate() + (5 + 7 - checkDate.getDay()) % 7);
    nextDayToPay.setHours(0, 0, 0, 0);
    return nextDayToPay;
  }

  private getColorText(checkDate: Date): string {
    let textColor = '';

    if (this.nextDayToPay.getTime() > checkDate.getTime()) {
      textColor = 'text-green';
    } else if (this.nextDayToPay.getTime() === checkDate.getTime()) {
      textColor = 'text-red';
    } else {
      textColor = 'text-orange';
    }

    return textColor;
  }

  getNextSponsor = (listPeople: ISponsor[], initialDate: Date, checkDate: Date, intervalDays: number) => {  

    const diff = this.getDiffDays(initialDate, checkDate);
    const nextOrder = this.getIntervalOrder(listPeople, diff, intervalDays);
    const nextSponsorOrder = Math.ceil(nextOrder / intervalDays);

    const nextSponsor = listPeople.find(p => p.order === nextSponsorOrder);
    nextSponsor.dateToPay = this.getDateToPay(checkDate);
    nextSponsor.textColor = this.getColorText(nextSponsor.dateToPay);
    nextSponsor.showControls = true;

    return nextSponsor;
  };
}
