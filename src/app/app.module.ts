import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavegationComponent } from './shared/navegation/navegation.component';
import { BlogCategoriesComponent } from './shared/blog-categories/blog-categories.component';
import { IconSliderComponent } from './shared/icon-slider/icon-slider.component';
import { BlogBannerCategoryComponent } from './shared/blog-banner-category/blog-banner-category.component';
import { BestSellerComponent } from './shared/best-seller/best-seller.component';
import { BlogBannerProductComponent } from './shared/blog-banner-product/blog-banner-product.component';
import { WidgetProductComponent } from './shared/widget-product/widget-product.component';
import { BlogBannerShopComponent } from './shared/blog-banner-shop/blog-banner-shop.component';
import { StretcherWidgetComponent } from './shared/stretcher-widget/stretcher-widget.component';
import { CardsLandingComponent } from './shared/cards-landing/cards-landing.component';
import { BlogLandingComponent } from './shared/blog-landing/blog-landing.component';
import { BannerLandingComponent } from './shared/banner-landing/banner-landing.component';
import { InstagramLandingComponent } from './shared/instagram-landing/instagram-landing.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PreNavegationComponent } from './shared/navegation/pre-navegation/pre-navegation.component';
import { TopNavegationComponent } from './shared/navegation/top-navegation/top-navegation.component';
import { TopSearchComponent } from './shared/navegation/top-search/top-search.component';
import { TopLoginComponent } from './shared/navegation/top-login/top-login.component';
import { TopCartComponent } from './shared/navegation/top-cart/top-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavegationComponent,
    BlogCategoriesComponent,
    IconSliderComponent,
    BlogBannerCategoryComponent,
    BestSellerComponent,
    BlogBannerProductComponent,
    WidgetProductComponent,
    BlogBannerShopComponent,
    StretcherWidgetComponent,
    CardsLandingComponent,
    BlogLandingComponent,
    BannerLandingComponent,
    InstagramLandingComponent,
    FooterComponent,
    PreNavegationComponent,
    TopNavegationComponent,
    TopSearchComponent,
    TopLoginComponent,
    TopCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
