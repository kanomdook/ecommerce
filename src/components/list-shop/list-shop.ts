import { Component, Input } from '@angular/core';
import { ShopList } from "./list-shop.model";

/**
 * Generated class for the ListShopComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-shop',
  templateUrl: 'list-shop.html'
})
export class ListShopComponent {

  @Input() inputshop: ShopList;

  constructor() {
    console.log('Hello ListShopComponent Component');
    // this.text = 'Hello World';
  }

}
