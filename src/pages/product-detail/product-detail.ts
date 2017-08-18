import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductModel } from './product-detail.model';
import { ProductService } from './product-detail.service';


@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  private productData: ProductModel = new ProductModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public productService: ProductService) {
  }

  ionViewDidLoad() {
    this.productService.getData().then(data => {
      this.productData = data;
      console.log(this.productData.product.size.detail);
    });
  }

}
