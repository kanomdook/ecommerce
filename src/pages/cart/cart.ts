import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from "../checkout/checkout";
import { CartService } from "./cart.service";
import { CartModel } from "../../components/cart-list/cart-list.model";

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cartData: CartModel = new CartModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public cartService: CartService) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CartPage');
    this.getCartDataService();
  }

  getCartDataService() {
    this.cartService.getCartData().then((data) => {
      this.cartData = data;
    }, (error) => {
      console.error(error);
    });
  }

  onFavoriteItem(item) {
    // console.log('Favorite ', item);
  }

  onDeleteItem(item) {
    // console.log('Delete ', item);
    let index = this.cartData.products.findIndex(item => item.product._id === item.product._id);
    this.cartData.products.splice(index, 1);
    this.onCalculate(item);
  }

  onAddItem(item) {
    // console.log('Add ', item);
    item.qty++;
    this.onCalculate(item);
  }

  onRemoveItem(item) {
    // console.log('Remove ', item);
    if (item.qty > 1) {
      item.qty--;
      this.onCalculate(item);
    }
  }

  onCalculate(item) {
    item.itemamount = item.product.unitprice * item.qty;
    let length = this.cartData.products.length;
    this.cartData.amount = 0;
    for (var i = 0; i < length; i++) {
      this.cartData.amount += this.cartData.products[i].itemamount;
    }
  }

  onPayment() {
    console.log(this.cartData);
    this.navCtrl.push(CheckoutPage, { cart: JSON.stringify(this.cartData) });
  }
}
