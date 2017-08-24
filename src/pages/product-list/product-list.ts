import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductlistService } from "./product-list.service";
import { ProdLists } from "./product-list.model";
import { ProductDetailPage } from "../product-detail/product-detail";

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
  public Filterlist: any;
  prods: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public productlistService: ProductlistService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
    this.productlistService.getData().then(data => {
      this.Listprod = data;

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

  gotoproductdetail(id) {
    this.navCtrl.push(ProductDetailPage, { id: id });
  }

  SearchList(ev) {
    // Reset items back to all of the items
    // this.initializeItems();
    // set val to the value of the ev target
    var val = ev.keyword;
    // console.log(this.Listprod);

    if (!this.prods) {
      this.prods = this.Listprod.product;
    }
    // // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.Listprod.product = this.prods.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.Listprod.product = this.prods;
    }
    console.log(this.Listprod.product);
  }

}
