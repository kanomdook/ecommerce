import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ShopModel } from './shop.model';

@Injectable()
export class ShopService {
  constructor(public http: Http) {}

  getData(): Promise<ShopModel> {
    return this.http.get('../../assets/example_data/shopdetail.json')
     .toPromise()
     .then(response => response.json() as ShopModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}