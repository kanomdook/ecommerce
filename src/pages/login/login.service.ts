import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { UserModel } from "../login/login.model";
import { Constants } from "../../app/app.contants";

@Injectable()
export class LoginService {
    // apiUrl: string = 'https://ecomm.herokuapp.com/';
    apiUrl: string = 'http://localhost:3000/';
    headers = new Headers({
        'Content-Type': 'application/json'
    });

    optionsURL = new RequestOptions({
        headers: this.headers
    });
    constructor(public http: Http) { }

    // LOGIN to SERVER
    logingin(logindata): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(Constants.URL + 'api/auth/signin', logindata, this.optionsURL).map(res => {
                return res.json();
            }).subscribe(data => {
                resolve(data);
            }, (error) => {
                reject(error);
            });
        })
    }

    //LOGIN check with local JSON 
    // logingin(logindata): Promise<UserModel> {
    //     return this.http.get('./assets/example_data/users.json')
    //         .toPromise()
    //         .then(response => response.json() as UserModel)
    //         .catch();
    // }
}