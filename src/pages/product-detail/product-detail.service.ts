import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ProductModel } from './product-detail.model';

@Injectable()
export class ProductService {
  constructor(public http: Http) {}

  getData(): Promise<ProductModel> {
    return this.http.get('../../assets/example_data/product.json')
     .toPromise()
     .then(response => response.json() as ProductModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
