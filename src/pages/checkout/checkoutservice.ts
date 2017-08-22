import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { paymentModel } from './checkout.model';
import { confirmModel } from './checkout.model';
import { shippingModel } from './checkout.model';
import { Constants } from "../../app/app.contants";

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
        let user = JSON.parse(window.localStorage.getItem('user'));
        return this.http.get(Constants.URL + 'api/manage-carts/get-by-user/' + user._id)
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