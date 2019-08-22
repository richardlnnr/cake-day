import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorUserComponent } from './sponsor-user.component';
import { SponsorCardModule } from '../sponsor-card/sponsor-card.module';

describe('SponsorUserComponent', () => {
  let component: SponsorUserComponent;
  let fixture: ComponentFixture<SponsorUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorUserComponent ],
      imports: [SponsorCardModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorUserComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should get previous sponsor', () => {
    component.initialDate = new Date('2019/7/19');
    component.checkDate = new Date('2019/8/15');
    fixture.detectChanges();
    const firstOrder = component.currentSponsor.order;
    component.checkPrevious();
    fixture.detectChanges();
    expect(component.currentSponsor.order).toEqual(firstOrder - 1);
  });

  it('should get next sponsor', () => {
    component.initialDate = new Date('2019/7/19');
    component.checkDate = new Date('2019/8/15');
    fixture.detectChanges();
    const firstOrder = component.currentSponsor.order;
    component.checkNext();
    fixture.detectChanges();
    expect(component.currentSponsor.order).toEqual(firstOrder + 1);
  });
});
