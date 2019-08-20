import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISponsor } from '../i-sponsor';

@Component({
  selector: 'app-sponsor-card',
  templateUrl: './sponsor-card.component.html',
  styleUrls: ['./sponsor-card.component.scss']
})
export class SponsorCardComponent implements OnInit {
  @Input()
  sponsor: ISponsor;

  @Output()
  checkPrevious = new EventEmitter<any>();

  @Output()
  checkNext = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  checkPreviousSponsor() {
    this.checkPrevious.emit();
  }

  checkNextSponsor() {
    this.checkNext.emit();
  }
}
