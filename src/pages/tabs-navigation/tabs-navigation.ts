import { Component } from '@angular/core';

import { ListingPage } from '../listing/listing';
import { ProfilePage } from '../profile/profile';
import { NotificationsPage } from '../notifications/notifications';
import { SettingsPage } from "../settings/settings";
import { List1Page } from "../list-1/list-1";
import { CartPage } from "../cart/cart";

@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;
  tab5Root: any;
  cartData: any;
  constructor() {
    this.tab1Root = ListingPage;
    this.tab2Root = List1Page;
    this.tab3Root = NotificationsPage;
    this.tab4Root = SettingsPage;
    this.tab5Root = CartPage;
  }
  countBadgeCart() {
    let cart = JSON.parse(window.localStorage.getItem('cart'));
    let cartLength = cart.products ? cart.products.length : 0;
    let length = 0;
    for (let i = 0; i < cartLength; i++) {
      length += cart.products[i].qty;
    }
    return length > 0 ? length.toString() : '';
  }
}
