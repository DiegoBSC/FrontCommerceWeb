import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StretcherWidgetComponent } from './stretcher-widget.component';

describe('StretcherWidgetComponent', () => {
  let component: StretcherWidgetComponent;
  let fixture: ComponentFixture<StretcherWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StretcherWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StretcherWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
