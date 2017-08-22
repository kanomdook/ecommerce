import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ShippingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shipping',
  templateUrl: 'shipping.html'
})
export class ShippingComponent {
  @Input() datapayment: any;
  data: any = {
    shipping: {

    },
    products: []
  };
  @Output()
  clickp: EventEmitter<any> = new EventEmitter<any>();
  text: string;

  constructor() {
    console.log('Hello ShippingComponent Component');
    this.text = 'Hello World';
  }
  address(data) {
    this.data.shipping.address = data.displayName;
  }

  setproduct(product, shipping) {
    this.data.products.push({
      product: product.product,
      qty: product.qty,
      amount: product.itemamount,
      delivery: {
        description: shipping.shippingstartdate.substr(0,10) + ' to ' + shipping.shippingenddate.substr(0,10),
        deliverytype: shipping.shipping.name ? shipping.shipping.name : 'free'
      }
    });
  }

  gotopayment() {
    this.clickp.emit(this.data);
  }




}
