import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { paymentModel } from './checkout.model';
import { confirmModel } from './checkout.model';
import { shippingModel } from './checkout.model';
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
  }

  gototest() {
    this.testing = 'payment';
  }

  shippingevent(event) {
    // alert(event);
    this.testing = event;
  }

  paymentgateway(event) {
    this.testing = event;
  }

  save(event) {
    this.navCtrl.setRoot(ListingPage);
  }

}
