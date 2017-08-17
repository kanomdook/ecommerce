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

  constructor() {
    this.tab1Root = ListingPage;
    this.tab2Root = List1Page;
    this.tab3Root = NotificationsPage;
    this.tab4Root = SettingsPage;
    this.tab5Root = CartPage;
  }
}
