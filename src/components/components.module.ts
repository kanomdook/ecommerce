import { NgModule } from '@angular/core';
import { DataScrollXComponent } from './data-scroll-x/data-scroll-x';
import { DataGridComponent } from './data-grid/data-grid';
import { TopbarComponent } from './topbar/topbar';
@NgModule({
	declarations: [DataScrollXComponent,
    DataGridComponent,
    TopbarComponent],
	imports: [],
	exports: [DataScrollXComponent,
    DataGridComponent,
    TopbarComponent]
})
export class ComponentsModule {}
