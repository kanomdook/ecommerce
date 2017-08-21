import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() confirm: any;
  @Output()
  confirmOrder: EventEmitter<string> = new EventEmitter<string>();
  text: string;

  constructor() {
    console.log('Hello ConfirmComponent Component');
    this.text = 'Hello World';
  }

  placeorder() {
    this.confirmOrder.emit('success');
  }

}
