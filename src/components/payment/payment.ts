import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the PaymentComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'payment',
  templateUrl: 'payment.html'
})
export class PaymentComponent {
  @Input() paymentgateway: any;
  @Output()
  paygateway: EventEmitter<any> = new EventEmitter<any>();
  text: string;
  data: any = {};
  constructor() {
    console.log('Hello PaymentComponent Component');
    this.text = 'Hello World';
  }

  paymenttype(type) {
    this.data.paymenttype = type;
  }

  countername(name) {
    this.data.counterservice = name;
  }

  gotoStep3() {
    this.paygateway.emit(this.data);
  }

}
