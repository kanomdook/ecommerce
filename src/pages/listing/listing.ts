import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, Content } from 'ionic-angular';

//jigkoh3 comment #1
// Why do you import 2 component ?
// import { FeedPage } from '../feed/feed';
// import 'rxjs/Rx';

import { ListingModel } from './listing.model';
import { ListingService } from './listing.service';
import { ProductDetailPage } from "../product-detail/product-detail";
import { ShopPage } from "../shop/shop";
import { ProductListPage } from "../product-list/product-list";
import { ShopListPage } from "../shop-list/shop-list";

@Component({
  selector: 'listing-page',
  templateUrl: 'listing.html',
})
export class ListingPage {
  @ViewChild(Content) content: Content;
  listing: ListingModel = new ListingModel();
  loading: any;

  constructor(
    //jigkoh3 comment #2
    // Why do you inject App to construct?
    //private app: App,

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
        //jigkoh3 comment #3
        // data is same model with property., you don't assign data each field.
        // this.listing.banner_image = data.banner_image;
        // this.listing.banner_title = data.banner_title;
        // this.listing.lastvisit = data.lastvisit;
        // this.listing.popularproducts = data.popularproducts;
        // this.listing.popularshops = data.popularshops;

        this.listing = data;
        this.loading.dismiss();
      });
  }

  //jigkoh3 comment #4
  // function not use 
  // goToFeed(category: any) {
  //   this.nav.push(FeedPage, { category: category });
  // }

  openProductDetail() {
    //jigkoh3 comment #5
    // Why do you use app.getRootNev() ?
    // this.app.getRootNav().push(ProductDetailPage);

    this.nav.push(ProductDetailPage);
  }

  gotoDetail(id) {
    this.nav.push(ProductDetailPage, { id: id });
  }

  gototShopDetail(id) {
    this.nav.push(ShopPage, { shopid: id });
  }

  openPageShop() {
    this.nav.push(ShopPage);
  }

  openPageShopList() {
    this.nav.push(ShopListPage);
  }

  openPageProductList() {
    this.nav.push(ProductListPage);
  }

}
