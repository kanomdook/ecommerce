import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { NativeStorage } from '@ionic-native/native-storage';
import { ProfileModel } from './settings-model';

@Injectable()
export class SettingsService {
    constructor(
        public http: Http,
        public nativeStorage: NativeStorage
    ) { }

    getData(): Promise<ProfileModel> {
        return this.http.get('./assets/example_data/profilesetting.json')
            .toPromise()
            .then(response => response.json() as ProfileModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getUserImage() {
        return this.nativeStorage.getItem('profileImage');
    }

    setUserImage(newImage) {
        this.nativeStorage.setItem('profileImage', newImage);
    }

}
