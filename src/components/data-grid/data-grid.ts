import { Component, Input } from '@angular/core';
import { DataGrids } from "./data-grid.model";
import { NavController } from "ionic-angular";
import { ShopPage } from "../../pages/shop/shop";


@Component({
  selector: 'data-grid',
  templateUrl: 'data-grid.html'
})
export class DataGridComponent {
  @Input() dataGrids: DataGrids;
  
  constructor(public nav: NavController) {
    
  }

  openPageShop(data){
    this.nav.push(ShopPage);
  }

}
