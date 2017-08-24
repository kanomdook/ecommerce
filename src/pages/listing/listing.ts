import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, Content } from 'ionic-angular';
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
        this.listing = data;
        this.loading.dismiss();
      });
  }

  openProductDetail() {
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
