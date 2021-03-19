import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavegationComponent } from './top-navegation.component';

describe('TopNavegationComponent', () => {
  let component: TopNavegationComponent;
  let fixture: ComponentFixture<TopNavegationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavegationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
