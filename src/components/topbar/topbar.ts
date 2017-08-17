import { Component, Input } from '@angular/core';
import { DataTopBar } from "./topbar.model";

@Component({
  selector: 'topbar',
  templateUrl: 'topbar.html'
})
export class TopbarComponent {

  @Input() dataTopBar: DataTopBar;  

  constructor() {
    
  }

}
