import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { CartModel } from "../../components/cart-list/cart-list.model";

@Injectable()
export class CartService {
    constructor(public http: Http) { }

    getCartData(): Promise<CartModel> {
        return this.http.get('./assets/example_data/cart.json')
            .toPromise()
            .then(response => response.json() as CartModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
