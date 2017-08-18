import { Component, Input } from '@angular/core';
import { DataCartList } from "./cart-list.model";

@Component({
  selector: 'cart-list',
  templateUrl: 'cart-list.html'
})
export class CartListComponent {
  @Input() dataCartList: DataCartList;  

  constructor() {
    
  }

  decrease(){

  }

  increase(){

  }

  deleteItem(){
    
  }

}
