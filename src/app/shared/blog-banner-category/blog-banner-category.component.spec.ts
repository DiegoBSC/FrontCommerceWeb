import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBannerCategoryComponent } from './blog-banner-category.component';

describe('BlogBannerCategoryComponent', () => {
  let component: BlogBannerCategoryComponent;
  let fixture: ComponentFixture<BlogBannerCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogBannerCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBannerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
