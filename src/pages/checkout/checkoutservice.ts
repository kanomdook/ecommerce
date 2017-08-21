import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { paymentModel } from './checkout.model';
import { confirmModel } from './checkout.model';
import { shippingModel } from './checkout.model';

@Injectable()
export class CheckoutService {
    constructor(public http: Http) { }

    getPayment(): Promise<paymentModel> {
        return this.http.get('./assets/example_data/payments.json')
            .toPromise()
            .then(response => response.json() as paymentModel)
            .catch(this.handleError);
    }  
    getShipping(): Promise<shippingModel> {
        return this.http.get('./assets/example_data/shipping.json')
            .toPromise()
            .then(response => response.json() as shippingModel)
            .catch(this.handleError);
    }
    getConfirm(): Promise<confirmModel> {
        return this.http.get('./assets/example_data/confirm.json')
            .toPromise()
            .then(response => response.json() as confirmModel)
            .catch(this.handleError);
    } 

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}