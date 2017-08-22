import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Constants } from "../../app/app.contants";


@Injectable()
export class signupService {
    apiUrl: string = 'http://localhost:3000/';
    headers = new Headers({
        'Content-Type': 'application/json'
    });

    optionsURL = new RequestOptions({
        headers: this.headers
    });

    constructor(public http: Http) { }

    signup(signupdata): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(Constants.URL + 'api/auth/signup', signupdata, this.optionsURL).map(res => {
                return res.json();
            }).subscribe(data => {
                resolve(data);
            }, (error) => {
                reject(error);
            });
        })
    }
}