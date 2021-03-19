import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBannerProductComponent } from './blog-banner-product.component';

describe('BlogBannerProductComponent', () => {
  let component: BlogBannerProductComponent;
  let fixture: ComponentFixture<BlogBannerProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogBannerProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBannerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
