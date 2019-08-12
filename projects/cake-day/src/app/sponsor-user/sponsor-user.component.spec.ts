import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorUserComponent } from './sponsor-user.component';

describe('SponsorUserComponent', () => {
  let component: SponsorUserComponent;
  let fixture: ComponentFixture<SponsorUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
