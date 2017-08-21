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
  paygateway: EventEmitter<string> = new EventEmitter<string>();
  text: string;

  constructor() {
    console.log('Hello PaymentComponent Component');
    this.text = 'Hello World';
  }

  gotoStep3() {
    this.paygateway.emit('confirm');
  }

}
