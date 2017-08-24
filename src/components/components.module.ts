import { NgModule } from '@angular/core';
import { DataScrollXComponent } from './data-scroll-x/data-scroll-x';
import { DataGridComponent } from './data-grid/data-grid';
import { TopbarComponent } from './topbar/topbar';
import { CartListComponent } from './cart-list/cart-list';
import { ShippingComponent } from './shipping/shipping';
import { PaymentComponent } from './payment/payment';
import { ConfirmComponent } from './confirm/confirm';
import { ListShopComponent } from './list-shop/list-shop';
import { ListProductComponent } from './list-product/list-product';
import { SearchbarComponent } from './searchbar/searchbar';
@NgModule({
	declarations: [DataScrollXComponent,
    DataGridComponent,
    TopbarComponent,
    CartListComponent,
    ShippingComponent,
    PaymentComponent,
    ConfirmComponent,
    ListShopComponent,
    ListProductComponent,
    SearchbarComponent],
	imports: [],
	exports: [DataScrollXComponent,
    DataGridComponent,
    TopbarComponent,
    CartListComponent,
    ShippingComponent,
    PaymentComponent,
    ConfirmComponent,
    ListShopComponent,
    ListProductComponent,
    SearchbarComponent]
})
export class ComponentsModule {}
