import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NavParams, PopoverController, ViewController } from "ionic-angular";

/**
 * Generated class for the SearchbarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  template: `
    <ion-list radio-group [(ngModel)]="fontFamily"  class="popover-page" (ionChange)="filterChange()">
      <ion-item class="text-athelas" *ngFor="let filter of filterData">
        <ion-label>{{filter.key}}</ion-label>
        <ion-radio [value]="filter.value"></ion-radio>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  background: string;
  contentEle: any;
  // textEle: any;
  fontFamily;

  colors = {
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };
  filterData: any;
  typeData: string;
  constructor(
    private navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    // console.log(this.navParams.get('Filters'));
    this.filterData = this.navParams.get('Filters');
  }

  ngOnInit() {
    if (this.navParams.data) {
      this.contentEle = this.navParams.data.contentEle;
      // this.textEle = this.navParams.data.textEle;

      this.background = this.getColorName(this.contentEle.style.backgroundColor);
      // this.setFontFamily();
    }
  }

  filterChange() {
    if (this.fontFamily) {
      this.viewCtrl.dismiss(this.fontFamily);
    }

  }

  getColorName(background) {
    let colorName = 'white';

    if (!background) return 'white';

    for (var key in this.colors) {
      if (this.colors[key].bg == background) {
        colorName = key;
      }
    }

    return colorName;
  }

  // setFontFamily() {
  //   if (this.textEle.style.fontFamily) {
  //     this.fontFamily = this.textEle.style.fontFamily.replace(/'/g, "");
  //   }
  // }

  changeBackground(color) {
    this.background = color;
    this.contentEle.style.backgroundColor = this.colors[color].bg;
    // this.textEle.style.color = this.colors[color].fg;
  }

  // changeFontSize(direction) {
  //   this.textEle.style.fontSize = direction;
  // }

  // changeFontFamily() {
  //   if (this.fontFamily) this.textEle.style.fontFamily = this.fontFamily;
  // }
}

@Component({
  selector: 'searchbar',
  templateUrl: 'searchbar.html',

})
export class SearchbarComponent {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
  @Input() Filters: any;
  @Output() Keywords: EventEmitter<any> = new EventEmitter<any>();
  public keyword: string;
  public selectFilter: string;
  public selectSort: string;
  // data: any = {};
  constructor(
    public popoverCtrl: PopoverController,
  ) {
    // this.data = this.Filters;
    // console.log(this.Filters);
    // console.log(JSON.stringify(this.Filters.filters));
  }

  presentPopoverFilter(ev) {

    let popover = this.popoverCtrl.create(PopoverPage, {
      contentEle: this.content.nativeElement,
      Filters: this.Filters.filters
    });

    popover.onDidDismiss(data => {
      this.selectFilter = data;
    });

    popover.present({
      ev: ev
    });
  }

  presentPopoverSort(ev) {

    let popover = this.popoverCtrl.create(PopoverPage, {
      contentEle: this.content.nativeElement,
      Filters: this.Filters.sorts
    });

    popover.onDidDismiss(data => {
      this.selectSort = data;
    });

    popover.present({
      ev: ev
    });
  }
  getItems(e) {
    this.keyword = e.target.value;

    if (this.keyword && this.keyword.trim() != '') {

      this.Keywords.emit({
        keyword: this.keyword,
        filter: this.selectFilter,
        sort: this.selectSort
      });
    }
  }

  clickFilter() {
    console.log(this.Filters);
  }

  clickSort() {

  }
}
