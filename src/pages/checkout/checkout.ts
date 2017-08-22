import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { paymentModel } from './checkout.model';
import { confirmModel } from './checkout.model';
import { shippingModel } from './checkout.model';
import { saveOrder } from "./checkout.model";
import { ListingPage } from '../listing/listing';

import { CheckoutService } from './checkoutservice';


/**
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  testing: string = 'address';
  payment: paymentModel = new paymentModel();
  shipping: shippingModel = new shippingModel();
  confirm: confirmModel = new confirmModel();
  order: saveOrder = new saveOrder();
  constructor(public navCtrl: NavController, public navParams: NavParams, public checkoutservice: CheckoutService) {

    this.checkoutservice
      .getConfirm()
      .then(data => {
        this.confirm = data;
      });

    this.checkoutservice
      .getPayment()
      .then(data => {
        this.payment = data;
      });

    this.checkoutservice
      .getShipping()
      .then(data => {
        this.shipping = data;
      });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
    // this.shipping = JSON.parse(this.navParams.get('cart'));
    // console.log(JSON.parse(this.navParams.get('cart')));
  }

  gototest() {
    this.testing = 'payment';
  }

  shippingevent(event) {
    // alert(event);
    this.testing = 'payment';
    this.order.shipping = event.shipping;
    this.order.items = event.products;
    console.log(this.order);
  }

  paymentgateway(event) {
    this.testing = 'confirm';
    this.order.payment = event;
    console.log(this.order);    
  }

  save(event) {
    this.navCtrl.setRoot(ListingPage);
  }

}
