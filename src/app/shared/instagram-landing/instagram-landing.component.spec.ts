import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramLandingComponent } from './instagram-landing.component';

describe('InstagramLandingComponent', () => {
  let component: InstagramLandingComponent;
  let fixture: ComponentFixture<InstagramLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
