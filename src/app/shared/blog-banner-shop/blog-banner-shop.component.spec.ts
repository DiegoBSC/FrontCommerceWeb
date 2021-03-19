import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBannerShopComponent } from './blog-banner-shop.component';

describe('BlogBannerShopComponent', () => {
  let component: BlogBannerShopComponent;
  let fixture: ComponentFixture<BlogBannerShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogBannerShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBannerShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
