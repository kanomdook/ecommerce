import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartModel } from "./cart-list.model";

@Component({
  selector: 'cart-list',
  templateUrl: 'cart-list.html'
})
export class CartListComponent {
  @Input('data') dataCartList: CartModel = new CartModel();;
  @Output() favorite = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() {

  }

  favoriteItem(item) {
    this.favorite.emit(item);
  }

  deleteItem(item, i) {
    console.log(i);
    item.index = i;
    this.delete.emit(item);
  }

  addQtyItem(item) {
    this.add.emit(item);

  }

  removeQtyItem(item) {
    this.remove.emit(item);
  }

}
