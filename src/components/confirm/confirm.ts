import { Component, Output, EventEmitter } from '@angular/core';
import { CheckoutService } from "../../pages/checkout/checkoutservice";

/**
 * Generated class for the ConfirmComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'confirm',
  templateUrl: 'confirm.html'
})
export class ConfirmComponent {
  confirm: any;
  @Output()
  confirmOrder: EventEmitter<any> = new EventEmitter<any>();
  text: string;

  constructor(public checkoutservice: CheckoutService) {
    this.confirm = checkoutservice.getOrder();
    console.log('Hello ConfirmComponent Component');
    this.text = 'Hello World';
  }

  placeorder() {
    this.confirmOrder.emit(this.confirm);
  }

}
