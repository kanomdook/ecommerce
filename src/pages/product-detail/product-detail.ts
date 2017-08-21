import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductItemsModel } from './product-detail.model';
import { ProductService } from './product-detail.service';
import { CartPage } from "../cart/cart";


@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  private productData: ProductItemsModel = new ProductItemsModel();
  constructor(
    public nav: NavController,
    //public navCtrl: NavController,
    public navParams: NavParams,
    public productService: ProductService) {
  }

  ionViewDidLoad() {
    this.productService.getData().then(data => {
      this.productData = data;
      //console.log(this.productData);
    });
  }
  goToSchedulePage() {
    this.nav.push(CartPage)
  }

}
