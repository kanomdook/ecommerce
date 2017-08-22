import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ProdLists } from "./product-list.model";
import { Constants } from "../../app/app.contants";

@Injectable()
export class ProductlistService {
  constructor(public http: Http) {}

  getData(): Promise<ProdLists> {
    return this.http.get(Constants.URL + 'api/productlists')
     .toPromise()
     .then(response => response.json() as ProdLists)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
