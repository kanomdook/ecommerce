import { NgModule } from '@angular/core';
import { DataScrollXComponent } from './data-scroll-x/data-scroll-x';
import { DataGridComponent } from './data-grid/data-grid';
import { TopbarComponent } from './topbar/topbar';
import { CartListComponent } from './cart-list/cart-list';
@NgModule({
	declarations: [DataScrollXComponent,
    DataGridComponent,
    TopbarComponent,
    CartListComponent],
	imports: [],
	exports: [DataScrollXComponent,
    DataGridComponent,
    TopbarComponent,
    CartListComponent]
})
export class ComponentsModule {}
