import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ShopList2 } from "./shop-list.model";

@Injectable()
export class ShoplistService {
  constructor(public http: Http) {}

  getData(): Promise<ShopList2> {
    return this.http.get('./assets/example_data/shoplist.json')
     .toPromise()
     .then(response => response.json() as ShopList2)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}