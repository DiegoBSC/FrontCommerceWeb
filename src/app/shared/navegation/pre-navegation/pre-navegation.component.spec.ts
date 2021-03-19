import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreNavegationComponent } from './pre-navegation.component';

describe('PreNavegationComponent', () => {
  let component: PreNavegationComponent;
  let fixture: ComponentFixture<PreNavegationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreNavegationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreNavegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
