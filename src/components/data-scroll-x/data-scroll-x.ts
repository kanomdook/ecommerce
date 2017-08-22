import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataListX } from "./list-x.model";
import { NavController } from "ionic-angular";
import { ProductDetailPage } from "../../pages/product-detail/product-detail";


@Component({
  selector: 'data-scroll-x',
  templateUrl: 'data-scroll-x.html'
})
export class DataScrollXComponent {

  @Input() dataListX: DataListX;
  @Output()
  productid: EventEmitter<string> = new EventEmitter<string>();

  constructor(public nav: NavController) {

  }

  openPageProductDetail(data) {
    this.productid.emit(data._id);
  }

}
