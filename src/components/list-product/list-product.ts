import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProdList } from "./list-product.model";
import { ProductDetailPage } from "../../pages/product-detail/product-detail";
import { NavController } from "ionic-angular";

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

  @Input() productList: ProdList;
  @Output()
  id: EventEmitter<string> = new EventEmitter<string>();


  constructor(
    public nav: NavController
  ) {
    console.log('Hello ListProductComponent Component');
    // this.text = 'Hello World';
  }

  gotoProductDetail(prod) {
    // this.nav.push(ProductDetailPage);
    this.id.emit(prod._id);

  }

}
