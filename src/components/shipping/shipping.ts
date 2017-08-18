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
  @Output()
  clickp: EventEmitter<string> = new EventEmitter<string>();
  text: string;

  constructor() {
    console.log('Hello ShippingComponent Component');
    this.text = 'Hello World';
  }

  gotopayment(){
    // window.event.stopPropagation();
    this.clickp.emit('payment');
  }


}
