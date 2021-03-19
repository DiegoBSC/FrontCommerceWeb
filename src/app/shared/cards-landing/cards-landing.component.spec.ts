import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLandingComponent } from './cards-landing.component';

describe('CardsLandingComponent', () => {
  let component: CardsLandingComponent;
  let fixture: ComponentFixture<CardsLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
