import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoplistService } from "./shop-list.service";
import { ShopList2 } from "./shop-list.model";

/**
 * Generated class for the ShopListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-list',
  templateUrl: 'shop-list.html',
})
export class ShopListPage {
  public Listshop: ShopList2 = new ShopList2;

  constructor(public navCtrl: NavController, public navParams: NavParams, public shoplistService: ShoplistService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopListPage');
    this.shoplistService.getData().then(data => {
      this.Listshop = data;
    });
  }

}
