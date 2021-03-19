import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCartComponent } from './top-cart.component';

describe('TopCartComponent', () => {
  let component: TopCartComponent;
  let fixture: ComponentFixture<TopCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
