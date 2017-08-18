import { Component } from '@angular/core';

/**
 * Generated class for the ListProductComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-product',
  templateUrl: 'list-product.html'
})
export class ListProductComponent {

  text: string;

  constructor() {
    console.log('Hello ListProductComponent Component');
    this.text = 'Hello World';
  }

}
