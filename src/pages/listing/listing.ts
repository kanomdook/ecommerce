import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, Content, App } from 'ionic-angular';

import { FeedPage } from '../feed/feed';
import 'rxjs/Rx';

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
        //jigkoh3 comment #1
        // data is same model with property., you not assign data each field.
        
        // this.listing.banner_image = data.banner_image;
        // this.listing.banner_title = data.banner_title;
        // this.listing.lastvisit = data.lastvisit;
        // this.listing.popularproducts = data.popularproducts;
        // this.listing.popularshops = data.popularshops;
        this.listing = data;
        this.loading.dismiss();
      });
  }

  //jigkoh3 comment #2
  // fuction not use 
  
  // goToFeed(category: any) {
  //   this.nav.push(FeedPage, { category: category });
  // }

  openProductDetail() {
    this.app.getRootNav().push(ProductDetailPage);
  }

  openPageShop() {
    this.nav.push(ShopPage);
  }

  openPageShopList(){
    this.nav.push(ShopListPage);    
  }

  openPageProductList(){
    this.nav.push(ProductListPage);    
  }

}
