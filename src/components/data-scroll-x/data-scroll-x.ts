import { Component, Input } from '@angular/core';
import { DataListX } from "./list-x.model";
import { NavController } from "ionic-angular";
import { ProductDetailPage } from "../../pages/product-detail/product-detail";


@Component({
  selector: 'data-scroll-x',
  templateUrl: 'data-scroll-x.html'
})
export class DataScrollXComponent {

  @Input() dataListX: DataListX;

  constructor(public nav: NavController) {
    
  }

  openPageProductDetail(data){
    this.nav.push(ProductDetailPage);
  }

}
