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
  onClick = function () {
    this.status = false;
    this.dataTopBar.favorite.push({
      "customerid": "xxx",
      "favdate": "2017-08-05T14:05:59"
    });
    console.log(this.dataTopBar.favorite);

  }
  onClickF = function () {
    this.status = true;
    
    for (let i = 0; i < this.dataTopBar.favorite.length; i++) {
      if (this.dataTopBar.favorite[i].customerid === 'xxx') {
        this.dataTopBar.favorite.splice(i, 1);
        break;
      }
    }
    console.log(this.dataTopBar.favorite);
  }
}
