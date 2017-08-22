import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Constants } from "../../app/app.contants";

import { ProductItemsModel } from './product-detail.model';

@Injectable()
export class ProductService {
  constructor(public http: Http) { }

  getData(id): Promise<ProductItemsModel> {
    return this.http.get(Constants.URL + 'api/productdetail/' + id)
      .toPromise()
      .then(response => response.json() as ProductItemsModel)
      .catch(this.handleError);
  }

  addToCart(product): Promise<ProductItemsModel> {
    product.selecteduser = JSON.parse(window.localStorage.getItem('user'));
    return this.http.post(Constants.URL + 'api/manage-carts/add', product)
      .toPromise()
      .then(response => response.json() as ProductItemsModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
