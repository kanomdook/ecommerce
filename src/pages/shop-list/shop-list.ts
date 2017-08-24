import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoplistService } from "./shop-list.service";
import { ShopList2 } from "./shop-list.model";
import { ShopPage } from "../shop/shop";

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
  public Filterlist: any;
  shops: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public shoplistService: ShoplistService) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ShopListPage');
    this.shoplistService.getData().then(data => {
      this.Listshop = data;
    });

    this.Filterlist = {
      filters: [{
        key: 'ค้นหาจากชื่อร้าน',
        value: 'ค้นหาจากชื่อร้าน'
      }, {
        key: 'ค้นหาจากชื่อสินค้า',
        value: 'ค้นหาจากชื่อสินค้า'
      }],
      sorts: [{
        key: 'ราคามากไปน้อย',
        value: 'ราคามากไปน้อย'
      }, {
        key: 'ราคาน้อยไปมาก',
        value: 'ราคาน้อยไปมาก'
      }]
    };
  }



  gotoshopdetail(id) {
    this.navCtrl.push(ShopPage, { shopid: id });
  };

  SearchList(ev) {
    console.log(ev);
    // Reset items back to all of the items
    // this.initializeItems();
    // set val to the value of the ev target
    var val = ev.keyword;
    // console.log(this.Listprod);

    if (!this.shops) {
      this.shops = this.Listshop.shop;
    }
    // // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.Listshop.shop = this.shops.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.Listshop.shop = this.shops;
    }
    console.log(this.Listshop.shop);
  }
}
