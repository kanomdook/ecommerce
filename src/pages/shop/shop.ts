import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopModel } from './shop.model';
import { ShopService } from './shop.service';

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  private shopDetail: ShopModel = new ShopModel();
  private shop: any = {}; 
  private map: any = {}; 
  private shopCover: any = {}; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private shopService: ShopService) {
  }

  ionViewDidLoad() {
    this.shopService.getData().then(data =>{
      this.shopDetail = data;
      this.shop = this.shopDetail.shop;
      this.shopCover = this.shop.coverimg;
      this.map = this.shop.map;
    });
  }

}
