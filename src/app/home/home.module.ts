import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    ProductComponent,
    CarouselComponent,
    StarsComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: []
})
export class HomeModule {
}
