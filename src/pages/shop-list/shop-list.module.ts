import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopListPage } from './shop-list';

@NgModule({
  declarations: [
    ShopListPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopListPage),
  ],
})
export class ShopListPageModule {}
