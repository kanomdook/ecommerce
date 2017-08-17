import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, Content, App } from 'ionic-angular';

import { FeedPage } from '../feed/feed';
import 'rxjs/Rx';

import { ListingModel } from './listing.model';
import { ListingService } from './listing.service';
import { ProductDetailPage } from "../product-detail/product-detail";
import { ShopPage } from "../shop/shop";

@Component({
  selector: 'listing-page',
  templateUrl: 'listing.html',
})
export class ListingPage {
  @ViewChild(Content) content: Content;
  listing: ListingModel = new ListingModel();
  loading: any;

  constructor(
    private app: App,
    public nav: NavController,
    public listingService: ListingService,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
  }


  ionViewDidLoad() {
    this.loading.present();
    this.listingService
      .getData()
      .then(data => {
        this.listing.banner_image = data.banner_image;
        this.listing.banner_title = data.banner_title;
        this.listing.populars = data.populars;
        this.listing.categories = data.categories;
        this.listing.popularshops = data.popularshops;
        this.loading.dismiss();
      });
  }

  goToFeed(category: any) {
    console.log("Clicked goToFeed", category);
    this.nav.push(FeedPage, { category: category });
  }

  openProductDetail() {
    this.app.getRootNav().push(ProductDetailPage);
  }

  openPageShop() {
    this.nav.push(ShopPage);
  }

}
