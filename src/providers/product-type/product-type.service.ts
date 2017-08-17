import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ProductTypesModel } from './product-type.model';

@Injectable()
export class ProductTypeService {
  constructor(public http: Http) {}

  getData(): Promise<ProductTypesModel> {
    return this.http.get('../../assets/example_data/product_types.json')
     .toPromise()
     .then(response => response.json() as ProductTypesModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
