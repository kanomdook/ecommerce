import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello ConfirmComponent Component');
    this.text = 'Confirm';
  }

}
