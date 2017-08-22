import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataGrids } from "./data-grid.model";
import { NavController } from "ionic-angular";
import { ShopPage } from "../../pages/shop/shop";


@Component({
  selector: 'data-grid',
  templateUrl: 'data-grid.html'
})
export class DataGridComponent {
  @Input() dataGrids: DataGrids;
  @Output()
  shopid: EventEmitter<string> = new EventEmitter<string>();

  constructor(public nav: NavController) {

  }

  openPageShop(data) {
    this.shopid.emit(data._id);
  }

}
