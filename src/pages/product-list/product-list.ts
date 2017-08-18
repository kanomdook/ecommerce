import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductlistService } from "./product-list.service";
import { ProdLists } from "./product-list.model";

/**
 * Generated class for the ProductListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  public Listprod: ProdLists = new ProdLists;

  constructor(public navCtrl: NavController, public navParams: NavParams, public productlistService: ProductlistService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
    this.productlistService.getData().then(data => {
      this.Listprod = data;
    });
  }

}
