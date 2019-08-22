import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorCardComponent } from './sponsor-card.component';
import { ISponsor } from '../i-sponsor';

describe('SponsorCardComponent', () => {
  let component: SponsorCardComponent;
  let fixture: ComponentFixture<SponsorCardComponent>;
  const sponsor: ISponsor = {
    name: 'Test',
    order: 1,
    dateToPay: new Date(),
    textColor: 'text-red',
    showControls: true,
}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.sponsor = sponsor;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
