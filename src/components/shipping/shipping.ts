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
  @Input() listdataaddress: Array<any>;
  data: any = {
    shipping: {

    },
    products: [],
    amount: 0
  };
  @Output()
  clickp: EventEmitter<any> = new EventEmitter<any>();
  text: string;

  constructor() {
    console.log('Hello ShippingComponent Component');
    this.text = 'Hello World';
  }
  selectaddress(data) {
    console.log(data);
    this.data.shipping = data;
    this.data.amount = this.datapayment.amount;
    // this.data.shipping.address = data.displayName;
    // this.data.shipping.subdistrict = 'subdistrict';
    // this.data.shipping.district = 'district';
    // this.data.shipping.province = 'province';
    // this.data.shipping.postcode = 'postcode';
  }

  setproduct(product, shipping) {
    var checkProduct = false;
    if (this.data.products && this.data.products.length > 0) {
      this.data.products.forEach(itm => {
        if (itm.product === product.product) {
          checkProduct = true;
        }
      });
    }
    if (!checkProduct) {
      this.data.products.push({
        product: product.product,
        qty: product.qty,
        amount: product.itemamount,
        delivery: {
          description: shipping.shippingstartdate.substr(0, 10) + ' to ' + shipping.shippingenddate.substr(0, 10),
          deliverytype: shipping.shipping ? shipping.shipping.name : 'free'
        }
      });
    }

  }

  gotopayment() {
    if (this.data.products.length === this.datapayment.products.length) {
      this.clickp.emit(this.data);
    } else {
      console.log(this.listdataaddress);
      alert('Please select products');
    }
  }




}
