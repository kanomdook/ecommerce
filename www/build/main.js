webpackJsonp([3],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__followers_followers__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_model__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfilePage = (function () {
    function ProfilePage(menu, app, navParams, profileService, loadingCtrl, socialSharing) {
        this.menu = menu;
        this.app = app;
        this.navParams = navParams;
        this.profileService = profileService;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.profile = new __WEBPACK_IMPORTED_MODULE_4__profile_model__["a" /* ProfileModel */]();
        this.display = "list";
        this.loading = this.loadingCtrl.create();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.profileService.getData()
            .then(function (data) {
            _this.profile.user = data.user;
            _this.profile.following = data.following;
            _this.profile.followers = data.followers;
            _this.profile.posts = data.posts;
            _this.loading.dismiss();
        });
    };
    ProfilePage.prototype.goToFollowersList = function () {
        // close the menu when clicking a link from the menu
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__followers_followers__["a" /* FollowersPage */], {
            list: this.profile.followers
        });
    };
    ProfilePage.prototype.goToFollowingList = function () {
        // close the menu when clicking a link from the menu
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__followers_followers__["a" /* FollowersPage */], {
            list: this.profile.following
        });
    };
    ProfilePage.prototype.goToSettings = function () {
        // close the menu when clicking a link from the menu
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
    };
    ProfilePage.prototype.onSegmentChanged = function (segmentButton) {
        // console.log('Segment changed to', segmentButton.value);
    };
    ProfilePage.prototype.onSegmentSelected = function (segmentButton) {
        // console.log('Segment selected', segmentButton.value);
    };
    ProfilePage.prototype.sharePost = function (post) {
        //this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share(post.description, post.title, post.image)
            .then(function () {
            console.log('Success!');
        })
            .catch(function () {
            console.log('Error');
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'profile-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'PROFILE\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="profile-content">\n\n  <div class="user-details">\n\n    <ion-row class="user-main-data-row">\n\n      <ion-col no-padding width-33>\n\n        <preload-image class="user-image" [ratio]="{w:1, h:1}" [(src)]="profile.user.image" alt="profile.user.name" title="profile.user.name"></preload-image>\n\n      </ion-col>\n\n      <ion-col no-padding>\n\n        <ion-row class="social-presence-row">\n\n          <ion-col width-50 class="social-presence-item">\n\n            <a (click)="goToFollowersList()">\n\n              <h2 class="social-presence-value">{{profile.followers.length}}</h2>\n\n              <h4 class="social-presence-title">{{\'FOLLOWERS\' | translate }}</h4>\n\n            </a>\n\n          </ion-col>\n\n          <ion-col width-50 class="social-presence-item">\n\n            <a (click)="goToFollowingList()">\n\n              <h2 class="social-presence-value">{{profile.following.length}}</h2>\n\n              <h4 class="social-presence-title">{{\'FOLLOWING\' | translate }}</h4>\n\n            </a>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="profile-action-row">\n\n          <ion-col no-padding>\n\n            <button ion-button block small (click)="goToSettings()">\n\n              {{\'EDIT_PROFILE\' | translate}}\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row wrap class="user-bio-row">\n\n      <ion-col no-padding width-50>\n\n        <h2 class="user-name">{{profile.user.name}}</h2>\n\n      </ion-col>\n\n      <ion-col no-padding width-50>\n\n        <span class="user-location">{{profile.user.location}}</span>\n\n      </ion-col>\n\n      <ion-col no-padding width-100>\n\n        <p class="user-description">\n\n          {{profile.user.about}}\n\n        </p>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-segment class="user-content-segment" [(ngModel)]="display" (ionChange)="onSegmentChanged($event)">\n\n      <ion-segment-button value="grid" (ionSelect)="onSegmentSelected($event)">\n\n        {{\'GRID\' | translate}}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="list" (ionSelect)="onSegmentSelected($event)">\n\n        {{\'LIST\' | translate}}\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n  <div [ngSwitch]="display" class="user-content">\n\n    <div *ngSwitchCase="\'list\'" class="list-view">\n\n      <div class="list-item" *ngFor="let post of profile.posts">\n\n        <span class="item-date">{{post.date}}</span>\n\n        <ion-card>\n\n          <preload-image [ratio]="{w:1, h:1}" [src]="post.image" title=""></preload-image>\n\n          <ion-card-content>\n\n            <p class="item-text">\n\n              {{post.description}}\n\n            </p>\n\n          </ion-card-content>\n\n          <ion-row no-padding class="actions-row">\n\n            <ion-col no-padding width-30 text-left>\n\n              <button class="action-button" ion-button clear small color="danger" icon-left>\n\n                <ion-icon isActive="{{post.liked}}" name=\'heart\'></ion-icon>\n\n                  {{post.likes}} {{\'LIKES\' | translate}}\n\n              </button>\n\n            </ion-col>\n\n            <ion-col no-padding width-45 text-center>\n\n              <button class="action-button" ion-button clear small color="danger" icon-left>\n\n                <ion-icon name=\'chatbubbles\'></ion-icon>\n\n                  {{post.comments}} {{\'COMMENTS\' | translate}}\n\n              </button>\n\n            </ion-col>\n\n            <ion-col no-padding width-25 text-right>\n\n              <button class="action-button" ion-button clear small color="danger" icon-left (click)="sharePost(post)">\n\n                <ion-icon name=\'share-alt\'></ion-icon>\n\n                {{\'SHARE\' | translate}}\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-card>\n\n      </div>\n\n    </div>\n\n    <div *ngSwitchCase="\'grid\'" class="grid-view">\n\n      <ion-row wrap class="grid-row">\n\n        <ion-col width-33 class="grid-item" *ngFor="let post of profile.posts">\n\n          <preload-image [ratio]="{w:1, h:1}" [src]="post.image" title="ion2FullApp"></preload-image>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__profile_service__["a" /* ProfileService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsOfServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsOfServicePage = (function () {
    function TermsOfServicePage(view) {
        this.view = view;
    }
    TermsOfServicePage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    return TermsOfServicePage;
}());
TermsOfServicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'terms-of-service-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\terms-of-service\terms-of-service.html"*/'<ion-header class="terms-header legal-header">\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span showWhen="ios">{{\'CANCEL\' | translate }}</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Terms of Service\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="terms-content legal-content">\n\n  <p>{{\'LAST_MODIFIED\' | translate }}: Nov 14, 2016</p>\n\n  <h4 class="legal-title">{{\'WELCOME_TO\' | translate}} ion2FullApp!</h4>\n\n  <p>Thanks for using our products and services (“Services”). Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\n  <h4 class="legal-title">{{\'USING_OUR_SERVICES\' | translate}}</h4>\n\n  <p>You must follow any policies made available to you within the Services.</p>\n\n  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n  <h4 class="legal-title">{{\'ABOUT_THIS_TERMS\' | translate}}</h4>\n\n  <p>We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. We’ll post notice of modifications to these terms on this page. We’ll post notice of modified additional terms in the applicable Service. Changes will not apply retroactively and will become effective no sooner than fourteen days after they are posted. However, changes addressing new functions for a Service or changes made for legal reasons will be effective immediately. If you do not agree to the modified terms for a Service, you should discontinue your use of that Service.</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\terms-of-service\terms-of-service.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
], TermsOfServicePage);

//# sourceMappingURL=terms-of-service.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyPolicyPage = (function () {
    function PrivacyPolicyPage(view) {
        this.view = view;
    }
    PrivacyPolicyPage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    return PrivacyPolicyPage;
}());
PrivacyPolicyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'privacy-policy-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\privacy-policy\privacy-policy.html"*/'<ion-header class="privacy-header legal-header">\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span showWhen="ios">{{\'CANCEL\' | translate}}</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      {{\'PRIVACY_POLICY\' | translate }}\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="privacy-content legal-content">\n\n  <p>{{\'LAST_MODIFIED\' | translate }}: Nov 14, 2016</p>\n\n  <h4 class="legal-title">{{\'WELCOME_TO\' | translate}} ion2FullApp!</h4>\n\n  <p>Thanks for using our products and services (“Services”). Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\n  <h4 class="legal-title">{{\'USING_OUR_SERVICES\' | translate}}</h4>\n\n  <p>You must follow any policies made available to you within the Services.</p>\n\n  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n  <h4 class="legal-title">{{\'ABOUT_THIS_TERMS\' | translate}}</h4>\n\n  <p>We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. We’ll post notice of modifications to these terms on this page. We’ll post notice of modified additional terms in the applicable Service. Changes will not apply retroactively and will become effective no sooner than fourteen days after they are posted. However, changes addressing new functions for a Service or changes made for legal reasons will be effective immediately. If you do not agree to the modified terms for a Service, you should discontinue your use of that Service.</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\privacy-policy\privacy-policy.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
], PrivacyPolicyPage);

//# sourceMappingURL=privacy-policy.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_of_service_terms_of_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_navigation_tabs_navigation__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__facebook_login_facebook_login_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__google_login_google_login_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__twitter_login_twitter_login_service__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SignupPage = (function () {
    function SignupPage(nav, modal, facebookLoginService, googleLoginService, twitterLoginService, loadingCtrl) {
        this.nav = nav;
        this.modal = modal;
        this.facebookLoginService = facebookLoginService;
        this.googleLoginService = googleLoginService;
        this.twitterLoginService = twitterLoginService;
        this.loadingCtrl = loadingCtrl;
        this.main_page = { component: __WEBPACK_IMPORTED_MODULE_5__tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */] };
        this.signup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('test', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            confirm_password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('test', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
    }
    SignupPage.prototype.doSignup = function () {
        this.nav.setRoot(this.main_page.component);
    };
    SignupPage.prototype.doFacebookSignup = function () {
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in
        // because we don't want to ask users to log in each time they open the app
        var env = this;
        this.facebookLoginService.getFacebookUser()
            .then(function (data) {
            // user is previously logged with FB and we have his data we will let him access the app
            env.nav.setRoot(env.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            env.facebookLoginService.doFacebookLogin()
                .then(function (res) {
                env.loading.dismiss();
                env.nav.setRoot(env.main_page.component);
            }, function (err) {
                console.log("Facebook Login error", err);
                env.loading.dismiss();
            });
        });
    };
    SignupPage.prototype.doTwitterSignup = function () {
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in
        // because we don't want to ask users to log in each time they open the app
        var env = this;
        this.twitterLoginService.getTwitterUser()
            .then(function (data) {
            // user is previously logged with FB and we have his data we will let him access the app
            env.nav.setRoot(env.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            env.twitterLoginService.doTwitterLogin()
                .then(function (res) {
                env.loading.dismiss();
                env.nav.setRoot(env.main_page.component);
            }, function (err) {
                console.log("Facebook Login error", err);
                env.loading.dismiss();
            });
        });
    };
    SignupPage.prototype.doGoogleSignup = function () {
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
        var env = this;
        this.googleLoginService.trySilentLogin()
            .then(function (data) {
            // user is previously logged with Google and we have his data we will let him access the app
            env.nav.setRoot(env.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            env.googleLoginService.doGoogleLogin()
                .then(function (res) {
                env.loading.dismiss();
                env.nav.setRoot(env.main_page.component);
            }, function (err) {
                console.log("Google Login error", err);
                env.loading.dismiss();
            });
        });
    };
    SignupPage.prototype.showTermsModal = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__terms_of_service_terms_of_service__["a" /* TermsOfServicePage */]);
        modal.present();
    };
    SignupPage.prototype.showPrivacyModal = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */]);
        modal.present();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'signup-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\signup\signup.html"*/'<ion-header class="signup-header auth-header">\n\n  <ion-navbar>\n\n    <ion-title>{{\'SIGN_UP\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="signup-content auth-content">\n\n  <h2 class="auth-title">{{\'CREATE_AN_ACCOUNT\' | translate}}</h2>\n\n  <form class="signup-form auth-form" [formGroup]="signup" (ngSubmit)="doSignup()">\n\n    <ion-item>\n\n      <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n\n    </ion-item>\n\n    <show-hide-container>\n\n      <ion-item>\n\n        <ion-input type="password" placeholder="Password" formControlName="password" show-hide-input></ion-input>\n\n      </ion-item>\n\n    </show-hide-container>\n\n    <show-hide-container>\n\n      <ion-item>\n\n        <ion-input type="password" placeholder="Confirm password" formControlName="confirm_password" show-hide-input></ion-input>\n\n      </ion-item>\n\n    </show-hide-container>\n\n    <button ion-button block class="auth-action-button signup-button" type="submit" [disabled]="!signup.valid">{{\'SIGN_UP\' | translate}}</button>\n\n  </form>\n\n  <p class="auth-divider">\n\n    Or\n\n  </p>\n\n  <button ion-button block class="facebook-auth-button" (click)="doFacebookSignup()">{{\'SIGN_UP_WITH_FACEBOOK\' | translate}}</button>\n\n  <button ion-button block class="google-auth-button" (click)="doGoogleSignup()">{{\'SIGN_UP_WITH_GOOGLE\' | translate}}</button>\n\n  <button ion-button block class="twitter-auth-button" (click)="doTwitterSignup()">{{\'SIGN_UP_WITH_TWITTER\' | translate}}</button>\n\n  <p class="legal-stuff">\n\n    {{\'AGREEMENT_TEXT\' | translate}} <a class="legal-action" (click)="showPrivacyModal()">{{\'PRIVACY_POLICY\' | translate}}</a> {{\'AND\' | translate}} <a class="legal-action" (click)="showTermsModal()">{{\'TERMS_OF_USE\' | translate}}</a>\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\signup\signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__facebook_login_facebook_login_service__["a" /* FacebookLoginService */],
        __WEBPACK_IMPORTED_MODULE_7__google_login_google_login_service__["a" /* GoogleLoginService */],
        __WEBPACK_IMPORTED_MODULE_8__twitter_login_twitter_login_service__["a" /* TwitterLoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = (function () {
    function ProfileService(http, nativeStorage) {
        this.http = http;
        this.nativeStorage = nativeStorage;
    }
    ProfileService.prototype.getData = function () {
        return this.http.get('./assets/example_data/profile.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProfileService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProfileService.prototype.getUserImage = function () {
        return this.nativeStorage.getItem('profileImage');
    };
    ProfileService.prototype.setUserImage = function (newImage) {
        this.nativeStorage.setItem('profileImage', newImage);
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
], ProfileService);

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_model__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_service__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationsPage = (function () {
    function NotificationsPage(nav, notificationsService, loadingCtrl) {
        this.nav = nav;
        this.notificationsService = notificationsService;
        this.loadingCtrl = loadingCtrl;
        this.notifications = new __WEBPACK_IMPORTED_MODULE_3__notifications_model__["a" /* NotificationsModel */]();
        this.loading = this.loadingCtrl.create();
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.notificationsService
            .getData()
            .then(function (data) {
            _this.notifications.today = data.today;
            _this.notifications.yesterday = data.yesterday;
            _this.loading.dismiss();
        });
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'notifications-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\notifications\notifications.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'NOTIFICATIONS\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="notifications-content">\n\n  <ion-item-group>\n\n    <ion-item-divider class="notifications-divider">{{ \'TODAY\' | translate }}</ion-item-divider>\n\n    <ion-item class="notification-item" *ngFor="let notification of notifications.today">\n\n      <ion-avatar item-left>\n\n        <preload-image class="user-image" [ratio]="{w:1, h:1}" [src]="notification.image"></preload-image>\n\n      </ion-avatar>\n\n      <h2 class="item-title">{{notification.name}}</h2>\n\n      <p class="item-description">{{notification.message}}</p>\n\n      <ion-note class="item-time" item-right>{{notification.date}}</ion-note>\n\n    </ion-item>\n\n    <ion-item-divider class="notifications-divider">Yesterday</ion-item-divider>\n\n    <ion-item class="notification-item" *ngFor="let notification of notifications.yesterday">\n\n      <ion-avatar item-left>\n\n        <preload-image class="user-image" [ratio]="{w:1, h:1}" [src]="notification.image"></preload-image>\n\n      </ion-avatar>\n\n      <h2 class="item-title">{{notification.name}}</h2>\n\n      <p class="item-description">{{notification.message}}</p>\n\n      <ion-note class="item-time" item-right>{{notification.date}}</ion-note>\n\n    </ion-item>\n\n  </ion-item-group>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\notifications\notifications.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__notifications_service__["a" /* NotificationsService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_1_model__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_1_service__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var List1Page = (function () {
    function List1Page(nav, list1Service, loadingCtrl) {
        this.nav = nav;
        this.list1Service = list1Service;
        this.loadingCtrl = loadingCtrl;
        this.list1 = new __WEBPACK_IMPORTED_MODULE_3__list_1_model__["a" /* List1Model */]();
        this.loading = this.loadingCtrl.create();
    }
    List1Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.list1Service
            .getData()
            .then(function (data) {
            _this.list1.items = data.items;
            _this.loading.dismiss();
        });
    };
    return List1Page;
}());
List1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'list-1-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\list-1\list-1.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'SEARCH\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="list-big-content">\n\n  <ion-searchbar></ion-searchbar>\n\n  <ion-row style="background-color: #fff;margin-bottom: 6px;padding: 10px;">\n\n    <ion-col col-5><ion-icon name="ios-funnel"></ion-icon> Filter</ion-col>\n\n    <ion-col col-5><ion-icon name="swap"></ion-icon> Sort</ion-col>\n\n    <ion-col col-2><ion-icon name="list"></ion-icon></ion-col>\n\n  </ion-row>\n\n  <div class="list-big">\n\n    <ion-list>\n\n      <button class="list-item" ion-item *ngFor="let item of list1.items">\n\n        <ion-row no-padding class="content-row">\n\n          <ion-col no-padding width-33 class="item-avatar">\n\n            <preload-image class="avatar-image" [ratio]="{w:1, h:1}" [src]="item.image"></preload-image>\n\n          </ion-col>\n\n          <ion-col no-padding width-67>\n\n            <h3 style="color: #ae75e7;font-weight: bold;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{item.name}}</h3>\n\n            <p style="color: #ff5722;">8,500 บาท</p>\n\n            <p><span style="text-decoration: line-through">18,500 บาท</span> -68%</p>\n\n            <p style="color: gold"><ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> (19)</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </button>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\list-1\list-1.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__list_1_service__["a" /* List1Service */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], List1Page);

//# sourceMappingURL=list-1.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = counterRangeValidator;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () { };
function counterRangeValidator(maxValue, minValue) {
    return function (c) {
        var err = {
            rangeError: {
                given: c.value,
                max: maxValue || 10,
                min: minValue || 0
            }
        };
        return (c.value > +maxValue || c.value < +minValue) ? err : null;
    };
}
var CounterInput = CounterInput_1 = (function () {
    function CounterInput() {
        this.propagateChange = noop;
        this.validateFn = noop;
        this._counterValue = 0;
    }
    Object.defineProperty(CounterInput.prototype, "counterValue", {
        get: function () {
            return this._counterValue;
        },
        set: function (val) {
            this._counterValue = val;
            this.propagateChange(val);
        },
        enumerable: true,
        configurable: true
    });
    CounterInput.prototype.ngOnChanges = function (inputs) {
        if (inputs.counterRangeMax || inputs.counterRangeMin) {
            this.validateFn = counterRangeValidator(this.counterRangeMax, this.counterRangeMin);
        }
    };
    CounterInput.prototype.writeValue = function (value) {
        if (value) {
            this.counterValue = value;
        }
    };
    CounterInput.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    CounterInput.prototype.registerOnTouched = function () { };
    CounterInput.prototype.increase = function () {
        this.counterValue++;
    };
    CounterInput.prototype.decrease = function () {
        this.counterValue--;
    };
    CounterInput.prototype.validate = function (c) {
        return this.validateFn(c);
    };
    return CounterInput;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('counterValue'),
    __metadata("design:type", Object)
], CounterInput.prototype, "_counterValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('max'),
    __metadata("design:type", Object)
], CounterInput.prototype, "counterRangeMax", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('min'),
    __metadata("design:type", Object)
], CounterInput.prototype, "counterRangeMin", void 0);
CounterInput = CounterInput_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'counter-input',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\counter-input\counter-input.html"*/'<button ion-button icon-only class="counter-icon" (click)="decrease()">\n\n  <ion-icon name="remove"></ion-icon>\n\n</button>\n\n<span class="counter-inner">{{counterValue}}</span>\n\n<button ion-button icon-only class="counter-icon" (click)="increase()">\n\n  <ion-icon name="add"></ion-icon>\n\n</button>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\counter-input\counter-input.html"*/,
        host: {
            'class': 'counter-input'
        },
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CounterInput_1; }), multi: true },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CounterInput_1; }), multi: true }
        ]
    })
], CounterInput);

var CounterInput_1;
//# sourceMappingURL=counter-input.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartPage = (function () {
    function CartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cart',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\cart\cart.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'CART\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <cart-list [dataCartList]=""></cart-list>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="btn">\n\n    <div style="text-align: center;">\n\n      <ion-buttons>\n\n        <button ion-button icon-left (click)="goToSchedulePage()">\n\n        <ion-icon name="cash"></ion-icon>PayMent\n\n      </button>\n\n      </ion-buttons>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\cart\cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		709,
		8
	],
	"../pages/checkout/checkout.module": [
		718,
		7
	],
	"../pages/product-detail/product-detail.module": [
		707,
		6
	],
	"../pages/shop/shop.module": [
		708,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 219;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getData = function () {
        return this.http.get('../../assets/example_data/product.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product-detail.service.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopService = (function () {
    function ShopService(http) {
        this.http = http;
    }
    ShopService.prototype.getData = function () {
        return this.http.get('../../assets/example_data/shopdetail.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ShopService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return ShopService;
}());
ShopService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ShopService);

//# sourceMappingURL=shop.service.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listing_model__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__listing_service__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_detail_product_detail__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shop_shop__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListingPage = (function () {
    function ListingPage(app, nav, listingService, loadingCtrl) {
        this.app = app;
        this.nav = nav;
        this.listingService = listingService;
        this.loadingCtrl = loadingCtrl;
        this.listing = new __WEBPACK_IMPORTED_MODULE_4__listing_model__["a" /* ListingModel */]();
        this.loading = this.loadingCtrl.create();
    }
    ListingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.listingService
            .getData()
            .then(function (data) {
            _this.listing.banner_image = data.banner_image;
            _this.listing.banner_title = data.banner_title;
            _this.listing.populars = data.populars;
            _this.listing.categories = data.categories;
            _this.listing.popularshops = data.popularshops;
            _this.loading.dismiss();
        });
    };
    ListingPage.prototype.goToFeed = function (category) {
        console.log("Clicked goToFeed", category);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__feed_feed__["a" /* FeedPage */], { category: category });
    };
    ListingPage.prototype.openProductDetail = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__product_detail_product_detail__["a" /* ProductDetailPage */]);
    };
    ListingPage.prototype.openPageShop = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__shop_shop__["a" /* ShopPage */]);
    };
    return ListingPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], ListingPage.prototype, "content", void 0);
ListingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'listing-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\listing\listing.html"*/'<ion-header class="listing-header">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <div class="header-logo">\n\n        {{\'HOME\' | translate}}\n\n      </div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="listing-content">\n\n  <background-image class="image-heading" [src]="listing.banner_image">\n\n    <ion-row class="heading-row">\n\n      <ion-col no-padding offset-100>\n\n        <h2 class="main-title">{{listing.banner_title}}</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n  </background-image>\n\n\n\n  <h4 class="categories-title">{{\'LASTVISIT\' | translate}}</h4>\n\n  <data-scroll-x [dataListX]="listing.categories"></data-scroll-x>\n\n\n\n  <h4 class="categories-title">{{\'POPULARSHOPS\' | translate}} <span class="see-all">see all</span></h4>\n\n  <data-grid [dataGrids]="listing.popularshops"></data-grid>\n\n\n\n  <h4 class="categories-title">{{\'POPULARPRODUCTS\' | translate}} <span class="see-all">see all</span></h4>\n\n  <data-scroll-x [dataListX]="listing.populars"></data-scroll-x>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\listing\listing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__listing_service__["a" /* ListingService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], ListingPage);

//# sourceMappingURL=listing.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_model__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FeedPage = (function () {
    function FeedPage(nav, feedService, navParams, loadingCtrl, socialSharing) {
        this.nav = nav;
        this.feedService = feedService;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.feed = new __WEBPACK_IMPORTED_MODULE_4__feed_model__["a" /* FeedModel */]();
        this.feed.category = navParams.get('category');
        this.loading = this.loadingCtrl.create();
    }
    FeedPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.feedService
            .getPosts()
            .then(function (posts) {
            _this.feed.posts = posts;
            _this.loading.dismiss();
        });
    };
    FeedPage.prototype.goToProfile = function (event, item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], {
            user: item
        });
    };
    FeedPage.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    FeedPage.prototype.sharePost = function (post) {
        //this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share(post.description, post.title, post.image, null)
            .then(function () {
            console.log('Success!');
        })
            .catch(function () {
            console.log('Error');
        });
    };
    return FeedPage;
}());
FeedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'feed-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\feed\feed.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <span>{{ feed.category.title }}</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="feed-content">\n\n  <div class="feed-item" *ngFor="let post of feed.posts">\n\n    <ion-card>\n\n      <preload-image [ratio]="{w:3, h:2}" [src]="post.image" title="post.title"></preload-image>\n\n      <ion-card-content>\n\n        <ion-card-title class="item-title">\n\n          {{post.title}}\n\n        </ion-card-title>\n\n        <p class="item-text">\n\n          {{post.description}}\n\n        </p>\n\n      </ion-card-content>\n\n      <ion-row no-padding class="actions-row">\n\n        <ion-col no-padding width-30 text-left>\n\n          <button class="action-button" ion-button clear small icon-left>\n\n            <ion-icon isActive="{{post.liked}}" name=\'heart\'></ion-icon>\n\n            {{post.likes}} {{\'LIKES\' | translate}}\n\n          </button>\n\n        </ion-col>\n\n        <ion-col no-padding width-45 text-center>\n\n          <button class="action-button" ion-button clear small icon-left>\n\n            <ion-icon name=\'chatbubbles\'></ion-icon>\n\n            {{post.comments}} {{\'COMMENTS\' | translate}}\n\n          </button>\n\n        </ion-col>\n\n        <ion-col no-padding width-25 text-right>\n\n          <button class="action-button" ion-button clear small (click)="sharePost(post)" icon-left>\n\n            <ion-icon name=\'share-alt\'></ion-icon>\n\n            {{\'SHARE\' | translate}}\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\feed\feed.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__feed_service__["a" /* FeedService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]])
], FeedPage);

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowersPage = (function () {
    function FollowersPage(menu, navParams) {
        this.menu = menu;
        this.navParams = navParams;
        this.list = [];
        this.list = navParams.get('list');
    }
    FollowersPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on this page
        this.menu.enable(false);
    };
    FollowersPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    return FollowersPage;
}());
FollowersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'followers-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\followers\followers.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'FOLLOWERS\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="followers-content">\n\n  <!-- <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar> -->\n\n  <ion-searchbar placeholder="Search"></ion-searchbar>\n\n  <ion-list class="followers-list">\n\n    <ion-item class="list-item" *ngFor="let item of list">\n\n      <ion-thumbnail item-left>\n\n        <preload-image [ratio]="{w:1, h:1}" [src]="item.image" alt="item.name" title="item.name"></preload-image>\n\n      </ion-thumbnail>\n\n      <h2 class="item-title">{{item.name}}</h2>\n\n      <p class="item-description" rows="2">{{item.about}}</p>\n\n      <button class="relation-button" [ngClass]="{following: !item.inverse_relation}" ion-button clear icon-only item-right>\n\n        <ion-icon *ngIf="item.inverse_relation" name="person-add"></ion-icon>\n\n        <ion-icon *ngIf="!item.inverse_relation" name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\followers\followers.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], FollowersPage);

//# sourceMappingURL=followers.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WalkthroughPage = (function () {
    function WalkthroughPage(nav) {
        this.nav = nav;
        this.lastSlide = false;
    }
    WalkthroughPage.prototype.skipIntro = function () {
        // You can skip to main app
        // this.nav.setRoot(TabsNavigationPage);
        // Or you can skip to last slide (login/signup slide)
        this.lastSlide = true;
        this.slider.slideTo(this.slider.length());
    };
    WalkthroughPage.prototype.onSlideChanged = function () {
        // If it's the last slide, then hide the 'Skip' button on the header
        this.lastSlide = this.slider.isEnd();
    };
    WalkthroughPage.prototype.goToLogin = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WalkthroughPage.prototype.goToSignup = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    return WalkthroughPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
], WalkthroughPage.prototype, "slider", void 0);
WalkthroughPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'walkthrough-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\walkthrough\walkthrough.html"*/'<ion-header class="walkthrough-header">\n\n  <ion-toolbar>\n\n    <ion-buttons end>\n\n      <button ion-button class="skip-button" (click)="skipIntro()" [hidden]="lastSlide">{{\'SKIP\' | translate}}</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="walkthrough-content">\n\n  <ion-slides #slider (ionSlideDidChange)="onSlideChanged()" pager="true">\n\n    <ion-slide class="slide-1">\n\n      <ion-row class="intro-image-row">\n\n        <ion-col center width-64 no-padding>\n\n          <preload-image [ratio]="{w:1, h:1}" src="./assets/images/logo_white.png" alt="app logo" title="ion2FullApp"></preload-image>\n\n        </ion-col>\n\n      </ion-row>\n\n      <h2 class="main-title">{{\'WELCOME!\' | translate}}</h2>\n\n      <p class="intro-text">\n\n        This is the new <b>Ionic 3</b> Full App Template\n\n      </p>\n\n      <p class="intro-text">\n\n        ELITE version\n\n      </p>\n\n    </ion-slide>\n\n    <ion-slide class="slide-2">\n\n      <ion-row class="intro-image-row">\n\n        <ion-col center width-64 no-padding>\n\n          <preload-image [ratio]="{w:1, h:1}" src="./assets/images/slide-2-img.png" alt="slide 2 img" title="ion2FullApp"></preload-image>\n\n        </ion-col>\n\n      </ion-row>\n\n      <h2 class="main-title">{{\'WAKE_UP!\' | translate}}</h2>\n\n      <p class="intro-text">\n\n        We should get started.\n\n      </p>\n\n      <p class="intro-text">\n\n        Here we have a beautiful walkthrough\n\n      </p>\n\n    </ion-slide>\n\n    <ion-slide class="slide-3">\n\n      <ion-row class="intro-image-row">\n\n        <ion-col center width-64 no-padding>\n\n          <preload-image [ratio]="{w:1, h:1}" src="./assets/images/slide-3-img.png" alt="slide 3 img" title="ion2FullApp"></preload-image>\n\n        </ion-col>\n\n      </ion-row>\n\n      <h2 class="main-title">{{\'GET_READY!\' | translate}}</h2>\n\n      <p class="intro-text">\n\n        Soon your app will look and feel awesome!\n\n      </p>\n\n    </ion-slide>\n\n    <ion-slide class="slide-4">\n\n      <ion-row class="intro-image-row">\n\n        <ion-col center width-64 no-padding>\n\n          <preload-image [ratio]="{w:1, h:1}" src="./assets/images/slide-4-img.png" alt="slide 4 img" title="ion2FullApp"></preload-image>\n\n        </ion-col>\n\n      </ion-row>\n\n      <h2 class="main-title">{{\'ALMOST_DONE!\' | translate}}</h2>\n\n      <p class="intro-text">\n\n        Log in to your account.\n\n      </p>\n\n      <p class="intro-text">\n\n        We are ready to rock!\n\n      </p>\n\n      <div class="button-bar">\n\n        <button ion-button primary (click)="goToLogin()">{{\'LOG_IN\' | translate}}</button>\n\n        <button ion-button primary (click)="goToSignup()">{{\'SIGN_UP\' | translate}}</button>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\walkthrough\walkthrough.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
], WalkthroughPage);

//# sourceMappingURL=walkthrough.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_navigation_tabs_navigation__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__facebook_login_facebook_login_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__google_login_google_login_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__twitter_login_twitter_login_service__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(nav, facebookLoginService, googleLoginService, twitterLoginService, loadingCtrl) {
        this.nav = nav;
        this.facebookLoginService = facebookLoginService;
        this.googleLoginService = googleLoginService;
        this.twitterLoginService = twitterLoginService;
        this.loadingCtrl = loadingCtrl;
        this.main_page = { component: __WEBPACK_IMPORTED_MODULE_3__tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */] };
        this.login = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('test', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
    }
    LoginPage.prototype.doLogin = function () {
        this.nav.setRoot(this.main_page.component);
    };
    LoginPage.prototype.doFacebookLogin = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
        // let this = this;
        this.facebookLoginService.getFacebookUser()
            .then(function (data) {
            // user is previously logged with FB and we have his data we will let him access the app
            _this.nav.setRoot(_this.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            _this.facebookLoginService.doFacebookLogin()
                .then(function (res) {
                _this.loading.dismiss();
                _this.nav.setRoot(_this.main_page.component);
            }, function (err) {
                console.log("Facebook Login error", err);
            });
        });
    };
    LoginPage.prototype.doGoogleLogin = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
        this.googleLoginService.trySilentLogin()
            .then(function (data) {
            // user is previously logged with Google and we have his data we will let him access the app
            _this.nav.setRoot(_this.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            _this.googleLoginService.doGoogleLogin()
                .then(function (res) {
                _this.loading.dismiss();
                _this.nav.setRoot(_this.main_page.component);
            }, function (err) {
                console.log("Google Login error", err);
            });
        });
    };
    LoginPage.prototype.doTwitterLogin = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
        this.twitterLoginService.getTwitterUser()
            .then(function (data) {
            // user is previously logged with FB and we have his data we will let him access the app
            _this.nav.setRoot(_this.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            _this.twitterLoginService.doTwitterLogin()
                .then(function (res) {
                _this.loading.dismiss();
                _this.nav.setRoot(_this.main_page.component);
            }, function (err) {
                console.log("Twitter Login error", err);
            });
        });
    };
    LoginPage.prototype.goToSignup = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.goToForgotPassword = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\login\login.html"*/'<ion-header class="login-header auth-header">\n\n  <ion-navbar>\n\n    <ion-title>{{\'SIGN_IN\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="login-content auth-content">\n\n  <form class="login-form auth-form" [formGroup]="login" (ngSubmit)="doLogin()">\n\n    <ion-item>\n\n      <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n\n    </ion-item>\n\n    <show-hide-container>\n\n      <ion-item>\n\n        <ion-input type="password" placeholder="Password" formControlName="password" show-hide-input></ion-input>\n\n      </ion-item>\n\n    </show-hide-container>\n\n    <button ion-button block class="auth-action-button login-button" type="submit" [disabled]="!login.valid">{{\'LOG_IN\' | translate}}</button>\n\n  </form>\n\n  <ion-row class="alt-options">\n\n    <ion-col no-padding width-50>\n\n      <button ion-button block clear class="forgot-button" (click)="goToForgotPassword()">{{\'FORGOT_PASSWORD?\' | translate }}</button>\n\n    </ion-col>\n\n    <ion-col no-padding width-50>\n\n      <button ion-button block clear class="signup-button" (click)="goToSignup()">{{\'SIGN_UP!\' | translate}}</button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <p class="auth-divider">\n\n    Or\n\n  </p>\n\n  <button ion-button block class="facebook-auth-button" (click)="doFacebookLogin()">Log in with Facebook</button>\n\n  <button ion-button block class="google-auth-button" (click)="doGoogleLogin()">Log in with Google</button>\n\n  <button ion-button block class="twitter-auth-button" (click)="doTwitterLogin()">Log in with Twitter</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__facebook_login_facebook_login_service__["a" /* FacebookLoginService */],
        __WEBPACK_IMPORTED_MODULE_7__google_login_google_login_service__["a" /* GoogleLoginService */],
        __WEBPACK_IMPORTED_MODULE_8__twitter_login_twitter_login_service__["a" /* TwitterLoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_navigation_tabs_navigation__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(nav) {
        this.nav = nav;
        this.main_page = { component: __WEBPACK_IMPORTED_MODULE_3__tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */] };
        this.forgot_password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
    }
    ForgotPasswordPage.prototype.recoverPassword = function () {
        console.log(this.forgot_password.value);
        this.nav.setRoot(this.main_page.component);
    };
    return ForgotPasswordPage;
}());
ForgotPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'forgot-password-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\forgot-password\forgot-password.html"*/'<ion-header class="forgot-password-header auth-header">\n\n  <ion-navbar>\n\n    <ion-title>{{\'FORGOT_PASSWORD?\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="forgot-password-content auth-content">\n\n  <h2 class="auth-title">{{ \'RECOVER_YOUR_PASSWORD\' | translate }}</h2>\n\n  <p class="recover-message">\n\n    {{ \'RECOVER_MESSAGE\' | translate }}\n\n  </p>\n\n  <form class="forgot-password-form auth-form" [formGroup]="forgot_password" (ngSubmit)="recoverPassword()">\n\n    <ion-item>\n\n      <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n\n    </ion-item>\n\n    <button ion-button block class="auth-action-button recover-password-button" type="submit" [disabled]="!forgot_password.valid">Reset password</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\forgot-password\forgot-password.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
], ForgotPasswordPage);

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserModel */
/* unused harmony export ProfilePostModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModel; });
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());

var ProfilePostModel = (function () {
    function ProfilePostModel() {
        this.likes = 0;
        this.comments = 0;
        this.liked = false;
    }
    return ProfilePostModel;
}());

var ProfileModel = (function () {
    function ProfileModel() {
        this.user = new UserModel();
        this.following = [];
        this.followers = [];
        this.posts = [];
    }
    return ProfileModel;
}());

//# sourceMappingURL=profile.model.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LanguageService = (function () {
    function LanguageService() {
        this.languages = new Array();
        this.languages.push({ name: "English", code: "en" }, { name: "Spanish", code: "es" }, { name: "Arabic", code: "ar" });
    }
    LanguageService.prototype.getLanguages = function () {
        return this.languages;
    };
    return LanguageService;
}());
LanguageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LanguageService);

//# sourceMappingURL=language.service.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedService = (function () {
    function FeedService(http) {
        this.http = http;
    }
    FeedService.prototype.getPosts = function () {
        return this.http.get('./assets/example_data/feed.json')
            .toPromise()
            .then(function (response) { return response.json().feed; })
            .catch(this.handleError);
    };
    FeedService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return FeedService;
}());
FeedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], FeedService);

//# sourceMappingURL=feed.service.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListingService = (function () {
    function ListingService(http) {
        this.http = http;
    }
    ListingService.prototype.getData = function () {
        return this.http.get('./assets/example_data/listing.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ListingService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ListingService;
}());
ListingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ListingService);

//# sourceMappingURL=listing.service.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsService = (function () {
    function NotificationsService(http) {
        this.http = http;
    }
    NotificationsService.prototype.getData = function () {
        return this.http.get('./assets/example_data/notifications.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NotificationsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return NotificationsService;
}());
NotificationsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], NotificationsService);

//# sourceMappingURL=notifications.service.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List1Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var List1Service = (function () {
    function List1Service(http) {
        this.http = http;
    }
    List1Service.prototype.getData = function () {
        return this.http.get('./assets/example_data/lists.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    List1Service.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return List1Service;
}());
List1Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], List1Service);

//# sourceMappingURL=list-1.service.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_layout_form_layout__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filters_filters__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_validations_form_validations__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FormsPage = (function () {
    function FormsPage(nav, translate) {
        this.nav = nav;
        this.translate = translate;
    }
    FormsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].forkJoin(this.translate.get('FORMS_EXAMPLES'), this.translate.get('FILTERS'), this.translate.get('FORM_VALIDATIONS')).subscribe(function (data) {
            _this.items = [
                { title: data[0], component: __WEBPACK_IMPORTED_MODULE_2__form_layout_form_layout__["a" /* FormLayoutPage */] },
                { title: data[1], component: __WEBPACK_IMPORTED_MODULE_3__filters_filters__["a" /* FiltersPage */] },
                { title: data[2], component: __WEBPACK_IMPORTED_MODULE_4__form_validations_form_validations__["a" /* FormValidationsPage */] }
            ];
        });
    };
    FormsPage.prototype.itemTapped = function (event, item) {
        this.nav.push(item.component);
    };
    return FormsPage;
}());
FormsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'forms-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\forms\forms.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'FORMS\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="forms-content">\n\n  <ion-list class="forms-list">\n\n    <button class="list-item" ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-row no-padding>\n\n        <ion-col no-padding class="item-content">\n\n          <h3 class="item-title">{{item.title}}</h3>\n\n          <span class="item-note" *ngIf="item.note">{{item.note}}</span>\n\n        </ion-col>\n\n        <ion-col no-padding width-10 class="item-icon">\n\n          <ion-icon name="arrow-forward"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\forms\forms.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
], FormsPage);

//# sourceMappingURL=forms.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormLayoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_counter_input_counter_input__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_crop__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormLayoutPage = (function () {
    function FormLayoutPage(nav, alertCtrl, cropService, imagePicker) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.cropService = cropService;
        this.imagePicker = imagePicker;
        this.section = "event";
        this.post_form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            servings: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](2, Object(__WEBPACK_IMPORTED_MODULE_3__components_counter_input_counter_input__["b" /* counterRangeValidator */])(10, 1)),
            time: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('01:30', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            temperature: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](180)
        });
        this.event_form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            location: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            from_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('2016-09-18', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            from_time: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('13:00', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            to_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            to_time: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
        this.card_form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            card_number: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            card_holder: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            cvc: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            exp_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            save_card: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](true, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
    }
    FormLayoutPage.prototype.onSegmentChanged = function (segmentButton) {
        // console.log('Segment changed to', segmentButton.value);
    };
    FormLayoutPage.prototype.onSegmentSelected = function (segmentButton) {
        // console.log('Segment selected', segmentButton.value);
    };
    FormLayoutPage.prototype.createPost = function () {
        console.log(this.post_form.value);
    };
    FormLayoutPage.prototype.createEvent = function () {
        console.log(this.event_form.value);
    };
    FormLayoutPage.prototype.createCard = function () {
        console.log(this.card_form.value);
    };
    FormLayoutPage.prototype.chooseCategory = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            cssClass: 'category-prompt'
        });
        alert.setTitle('Category');
        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Confirm',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.categories_checkbox_open = false;
                _this.categories_checkbox_result = data;
            }
        });
        alert.present().then(function () {
            _this.categories_checkbox_open = true;
        });
    };
    FormLayoutPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission().then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({ maximumImagesCount: 1 }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.cropService.crop(results[i], { quality: 75 }).then(function (newImage) {
                            _this.selected_image = newImage;
                        }, function (error) { return console.error("Error cropping image", error); });
                    }
                }, function (err) { return console.log(err); });
            }
        });
    };
    return FormLayoutPage;
}());
FormLayoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'form-layout-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\form-layout\form-layout.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'FORMS_EXAMPLES\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="forms-examples-content">\n\n  <ion-segment class="forms-examples-segment" [(ngModel)]="section" (ionChange)="onSegmentChanged($event)">\n\n    <ion-segment-button value="post" (ionSelect)="onSegmentSelected($event)">\n\n      {{\'POST\' | translate}}\n\n    </ion-segment-button>\n\n    <ion-segment-button value="event" (ionSelect)="onSegmentSelected($event)">\n\n      {{\'EVENT\' | translate}}\n\n    </ion-segment-button>\n\n    <ion-segment-button value="card" (ionSelect)="onSegmentSelected($event)">\n\n      {{\'CARD\' | translate}}\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n  <div [ngSwitch]="section" class="forms-wrapper">\n\n    <div *ngSwitchCase="\'post\'" class="post-example-view">\n\n      <form class="sample-form post-form" [formGroup]="post_form" (ngSubmit)="createPost()">\n\n        <section class="form-section">\n\n          <ion-item>\n\n            <ion-input type="text" placeholder="Title: e.g. Krabby Patty" formControlName="title"></ion-input>\n\n          </ion-item>\n\n          <button *ngIf="!selected_image" ion-button block large class="upload-image-button" (click)="openImagePicker()">\n\n            <ion-icon name="camera"></ion-icon>\n\n            <h3 class="button-title">{{\'UPLOAD_AN_IMAGE\' | translate}}</h3>\n\n          </button>\n\n          <preload-image *ngIf="selected_image" [ratio]="{w:1, h:1}" [src]="selected_image" alt="this is the image" title="IMAGE!"></preload-image>\n\n        </section>\n\n        <ion-item>\n\n          <ion-textarea rows="7" placeholder="Write a description or something..." formControlName="description"></ion-textarea>\n\n        </ion-item>\n\n        <section class="form-section">\n\n          <button ion-button block icon-right class="choose-category-button" (click)="chooseCategory()">\n\n            {{\'CHOOSE_CATEGORY\' | translate}}\n\n            <ion-icon name="add"></ion-icon>\n\n          </button>\n\n        </section>\n\n        <h2 class="section-title">{{\'SERVES_TIMES_TEMPS\' | translate}}</h2>\n\n        <ion-item class="counter-item">\n\n          <span class="counter-label">{{\'SERVINGS\' | translate}}</span>\n\n          <counter-input formControlName="servings"></counter-input>\n\n        </ion-item>\n\n        <ion-item class="time-item">\n\n          <ion-label>{{\'TIME\' | translate}}</ion-label>\n\n          <ion-datetime formControlName="time" displayFormat="h:mm" pickerFormat="h mm"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item class="range-item">\n\n          <ion-label>\n\n            <h2 class="range-label">{{\'TEMPERATURE\' | translate}}</h2>\n\n            <h3 class="range-value">{{post_form.controls.temperature.value}} &deg;C</h3>\n\n          </ion-label>\n\n          <ion-range formControlName="temperature" min="0" max="220" step="5" snaps="true" pin="false"></ion-range>\n\n        </ion-item>\n\n        <section class="form-section">\n\n          <button ion-button block class="form-action-button create-post-button" type="submit" [disabled]="!post_form.valid">Post!</button>\n\n        </section>\n\n      </form>\n\n    </div>\n\n    <div *ngSwitchCase="\'event\'" class="event-example-view">\n\n      <form class="sample-form event-form" [formGroup]="event_form" (ngSubmit)="createEvent()">\n\n        <section class="form-section">\n\n          <h2 class="section-title">{{\'ADD_AN_EVENT\' | translate}}</h2>\n\n          <ion-item>\n\n            <ion-input type="text" placeholder="Event title" formControlName="title"></ion-input>\n\n          </ion-item>\n\n          <ion-item icon-right>\n\n            <ion-input type="text" placeholder="Location" formControlName="location"></ion-input>\n\n            <ion-icon name="navigate" item-right></ion-icon>\n\n          </ion-item>\n\n          <ion-row no-padding class="multi-input-row">\n\n            <ion-col no-padding width-60>\n\n              <ion-item class="multi-input time-item">\n\n                <ion-label floating>{{\'FROM\' | translate }}</ion-label>\n\n                <ion-datetime formControlName="from_date" displayFormat="DD/MM/YY" pickerFormat="DD-MM-YYYY"></ion-datetime>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col no-padding width-40>\n\n              <ion-item class="multi-input time-item">\n\n                <ion-datetime formControlName="from_time" displayFormat="h mm a" pickerFormat="h mm A"></ion-datetime>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row no-padding class="multi-input-row">\n\n            <ion-col no-padding width-60>\n\n              <ion-item class="multi-input time-item">\n\n                <ion-label floating>{{\'TO\' | translate}}</ion-label>\n\n                <ion-datetime formControlName="to_date" displayFormat="DD/MM/YY" pickerFormat="DD-MM-YYYY"></ion-datetime>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col no-padding width-40>\n\n              <ion-item class="multi-input time-item">\n\n                <ion-datetime formControlName="to_time" displayFormat="h mm a" pickerFormat="h mm A"></ion-datetime>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        </section>\n\n        <section class="form-section">\n\n          <button ion-button block class="form-action-button create-event-button" type="submit" [disabled]="!event_form.valid">Done!</button>\n\n        </section>\n\n      </form>\n\n    </div>\n\n    <div *ngSwitchCase="\'card\'" class="card-example-view">\n\n      <form class="sample-form card-form" [formGroup]="card_form" (ngSubmit)="createCard()">\n\n        <section class="form-section">\n\n          <h2 class="section-title">{{\'CREDICT_CARD_INFORMATION\' | translate}}</h2>\n\n          <ion-item>\n\n            <ion-label floating>{{\'CARD_NUMBER\' | translate}}</ion-label>\n\n            <ion-input type="text" formControlName="card_number"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{\'CARD_HOLDER\' | translate}}</ion-label>\n\n            <ion-input type="text" formControlName="card_holder"></ion-input>\n\n          </ion-item>\n\n          <ion-row no-padding class="multi-input-row">\n\n            <ion-col no-padding width-50>\n\n              <ion-item class="multi-input">\n\n                <ion-label floating>CVC</ion-label>\n\n                <ion-input type="text" formControlName="cvc"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col no-padding width-50>\n\n              <ion-item class="multi-input time-item">\n\n                <ion-label floating>{{\'EXP_DATE\' | translate}}</ion-label>\n\n                <ion-datetime formControlName="exp_date" displayFormat="MM/YYYY" pickerFormat="MM-YYYY"></ion-datetime>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        </section>\n\n        <ion-list class="card-preferences">\n\n          <ion-item class="switcher-item">\n\n            <ion-label>{{\'SAVE_THIS_CARD\' | translate}}</ion-label>\n\n            <ion-toggle formControlName="save_card"></ion-toggle>\n\n          </ion-item>\n\n        </ion-list>\n\n        <section class="form-section">\n\n          <button ion-button block class="form-action-button create-card-button" type="submit" [disabled]="!card_form.valid">Confirm</button>\n\n        </section>\n\n      </form>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\form-layout\form-layout.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_crop__["a" /* Crop */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */]])
], FormLayoutPage);

//# sourceMappingURL=form-layout.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_counter_input_counter_input__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FiltersPage = (function () {
    function FiltersPage(nav) {
        this.nav = nav;
        this.rangeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            single: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](25),
            dual: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ lower: 33, upper: 60 })
        });
        this.checkboxForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            person_1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](true),
            person_2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false),
            person_3: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false),
            person_4: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](true),
            person_5: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false)
        });
        this.radioForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            selected_option: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('apple')
        });
        this.checkboxTagsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            tag_1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false),
            tag_2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false),
            tag_3: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](true),
            tag_4: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](true),
            tag_5: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false),
            tag_6: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false),
            tag_7: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](true),
            tag_8: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false)
        });
        this.radioTagsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            selected_option: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('any')
        });
        this.switchersForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            notifications: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](true),
            email_notifications: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false)
        });
        this.counterForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            counter: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](5, Object(__WEBPACK_IMPORTED_MODULE_3__components_counter_input_counter_input__["b" /* counterRangeValidator */])(7, 1)),
            counter2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](2, Object(__WEBPACK_IMPORTED_MODULE_3__components_counter_input_counter_input__["b" /* counterRangeValidator */])(5, 1))
        });
        this.ratingForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            rate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](2.5),
            rate2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](1.5)
        });
        this.radioColorForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            selected_color: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('#fc9961')
        });
    }
    FiltersPage.prototype.rangeChange = function (range) {
        console.log("range, change, ratio: " + range.ratio + ", value: " + range.value);
    };
    return FiltersPage;
}());
FiltersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'filters-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\filters\filters.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ \'FILTERS\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="filters-content">\n\n  <ion-item-group class="filters-group">\n\n    \n\n\n\n   \n\n\n\n    \n\n\n\n   \n\n    \n\n    \n\n\n\n    \n\n    <ion-item-divider>{{ \'ADD_&_SUBTRACT\' | translate }}</ion-item-divider>\n\n    <form [formGroup]="counterForm">\n\n      <ion-list class="counter-list">\n\n        <ion-item class="counter-item">\n\n          <span class="counter-label">Amount</span>\n\n          <counter-input formControlName="counter"></counter-input>\n\n        </ion-item>\n\n        <ion-item class="counter-item">\n\n          <span class="counter-label">Bedrooms</span>\n\n          <span class="counter-value">{{counterForm.controls.counter2.value}}</span>\n\n          <counter-input formControlName="counter2" basic></counter-input>\n\n        </ion-item>\n\n      </ion-list>\n\n    </form>\n\n\n\n\n\n    \n\n  </ion-item-group>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\filters\filters.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
], FiltersPage);

//# sourceMappingURL=filters.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormValidationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_validators_username_validator__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_validators_password_validator__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_validators_phone_validator__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_validations_model__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_emailMask__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_emailMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_emailMask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FormValidationsPage = (function () {
    function FormValidationsPage(navCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.emailMask = __WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_emailMask___default.a;
        this.validation_messages = {
            'username': [
                { type: 'required', message: 'Username is required.' },
                { type: 'minlength', message: 'Username must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
                { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
                { type: 'validUsername', message: 'Your username has already been taken.' }
            ],
            'name': [
                { type: 'required', message: 'Name is required.' }
            ],
            'lastname': [
                { type: 'required', message: 'Last name is required.' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'phone': [
                { type: 'required', message: 'Phone is required.' },
                { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' }
            ],
            'matching_passwords': [
                { type: 'areEqual', message: 'Password mismatch' }
            ],
            'terms': [
                { type: 'pattern', message: 'You must accept terms and conditions.' }
            ],
        };
    }
    FormValidationsPage.prototype.ionViewWillLoad = function () {
        this.countries = [
            new __WEBPACK_IMPORTED_MODULE_6__form_validations_model__["a" /* Country */]('UY', 'Uruguay'),
            new __WEBPACK_IMPORTED_MODULE_6__form_validations_model__["a" /* Country */]('US', 'United States'),
            new __WEBPACK_IMPORTED_MODULE_6__form_validations_model__["a" /* Country */]('AR', 'Argentina')
        ];
        this.genders = [
            "Male",
            "Female"
        ];
        this.matching_passwords_group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            confirm_password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        }, function (formGroup) {
            return __WEBPACK_IMPORTED_MODULE_4__components_validators_password_validator__["a" /* PasswordValidator */].areEqual(formGroup);
        });
        var country = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.countries[0], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        var phone = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_5__components_validators_phone_validator__["a" /* PhoneValidator */].validCountryPhone(country)
        ]));
        this.country_phone_group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            country: country,
            phone: phone
        });
        this.validations_form = this.formBuilder.group({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_3__components_validators_username_validator__["a" /* UsernameValidator */].validUsername,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(25),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            gender: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.genders[0], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            country_phone: this.country_phone_group,
            matching_passwords: this.matching_passwords_group,
            terms: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](true, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('true'))
        });
    };
    FormValidationsPage.prototype.onSubmit = function (values) {
        console.log(values);
    };
    return FormValidationsPage;
}());
FormValidationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'form-validations-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\form-validations\form-validations.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'FORM_VALIDATIONS\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="forms-validations-content">\n\n  <form class="sample-form validations-form" [formGroup]="validations_form"  (ngSubmit)="onSubmit(validations_form.value)">\n\n    <section class="form-section">\n\n      <h2 class="section-title">{{\'BASIC_VALIDATIONS\' | translate}}</h2>\n\n      <ion-item>\n\n        <ion-label floating>{{\'USERNAME\' | translate}}</ion-label>\n\n        <ion-input type="text" formControlName="username" class="form-controll" required></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.username">\n\n          <div class="error-message" *ngIf="validations_form.get(\'username\').hasError(validation.type) && (validations_form.get(\'username\').dirty || validations_form.get(\'username\').touched)">\n\n            {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating>{{\'NAME\' | translate}}</ion-label>\n\n        <ion-input type="text" formControlName="name"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.name">\n\n          <div class="error-message" *ngIf="validations_form.get(\'name\').hasError(validation.type) && (validations_form.get(\'name\').dirty || validations_form.get(\'name\').touched)">\n\n            {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating>{{\'LAST_NAME\' | translate}}</ion-label>\n\n        <ion-input type="text" formControlName="lastname"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.lastname">\n\n          <div class="error-message" *ngIf="validations_form.get(\'lastname\').hasError(validation.type) && (validations_form.get(\'lastname\').dirty || validations_form.get(\'lastname\').touched)">\n\n            {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating>{{\'EMAIL\' | translate}}</ion-label>\n\n        <ion-input [textMask]="emailMask" type="text" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.email">\n\n          <div class="error-message" *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n\n            {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating>{{\'GENDER\' | translate}}</ion-label>\n\n        <ion-select formControlName="gender" cancelText="{{ \'CANCEL\' | translate }}" okText="{{ \'OK\' | translate }}">\n\n          <ion-option *ngFor="let gender of genders" [value]="gender" >{{ gender }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </section>\n\n\n\n    <section class="form-section">\n\n      <h2 class="section-title">{{\'PHONE_VALIDATIONS\' | translate}}</h2>\n\n      <div formGroupName="country_phone">\n\n        <ion-item>\n\n          <ion-label floating>{{\'COUNTRY\' | translate}}</ion-label>\n\n          <ion-select formControlName="country" cancelText="{{ \'CANCEL\' | translate }}" okText="{{ \'OK\' | translate }}">\n\n            <ion-option *ngFor="let item of countries" [value]="item" >{{item.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input [textMask]="{mask: validations_form.value.country_phone.country.phone_mask}" placeholder="{{ validations_form.value.country_phone.country.sample_phone }}" type="text" formControlName="phone"></ion-input>\n\n        </ion-item>\n\n        <div class="validation-errors">\n\n          <ng-container *ngFor="let validation of validation_messages.phone">\n\n            <div class="error-message" *ngIf="validations_form.get(\'country_phone\').get(\'phone\').hasError(validation.type) && (validations_form.get(\'country_phone\').get(\'phone\').dirty || validations_form.get(\'country_phone\').get(\'phone\').touched)">\n\n              {{ validation.message }}\n\n            </div>\n\n          </ng-container>\n\n        </div>\n\n      </div>\n\n    </section>\n\n\n\n    <section class="form-section">\n\n      <h2 class="section-title">{{\'PASSWORD_VALIDATIONS\' | translate}}</h2>\n\n      <div formGroupName="matching_passwords">\n\n        <ion-item>\n\n          <ion-label floating>{{\'PASSWORD\' | translate}}</ion-label>\n\n          <ion-input type="password" formControlName="password"></ion-input>\n\n        </ion-item>\n\n        <div class="validation-errors">\n\n          <ng-container *ngFor="let validation of validation_messages.password">\n\n            <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').get(\'password\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'password\').dirty || validations_form.get(\'matching_passwords\').get(\'password\').touched)">\n\n              {{ validation.message }}\n\n            </div>\n\n          </ng-container>\n\n        </div>\n\n\n\n        <ion-item>\n\n          <ion-label floating>{{\'CONFIRM_PASSWORD\' | translate}}</ion-label>\n\n          <ion-input type="password" formControlName="confirm_password"></ion-input>\n\n        </ion-item>\n\n        <div class="validation-errors">\n\n          <ng-container *ngFor="let validation of validation_messages.confirm_password">\n\n            <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').get(\'confirm_password\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'confirm_password\').dirty || validations_form.get(\'matching_passwords\').get(\'confirm_password\').touched)">\n\n              {{ validation.message }}\n\n            </div>\n\n          </ng-container>\n\n        </div>\n\n      </div>\n\n      <!-- These validations are for the form group -->\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.matching_passwords">\n\n          <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'confirm_password\').dirty || validations_form.get(\'matching_passwords\').get(\'confirm_password\').touched)">\n\n            {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n    </section>\n\n\n\n    <section class="form-section">\n\n      <h2 class="section-title">{{\'ACCEPT_TERMS_VALIDATIONS\' | translate}}</h2>\n\n      <ion-item class="terms-item">\n\n        <ion-label>I accept terms and conditions</ion-label>\n\n        <ion-checkbox formControlName="terms"></ion-checkbox>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.terms">\n\n          <div class="error-message" *ngIf="validations_form.get(\'terms\').hasError(validation.type) && (validations_form.get(\'terms\').dirty || validations_form.get(\'terms\').touched)">\n\n            {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n    </section>\n\n\n\n    <button ion-button full type="submit" [disabled]="!validations_form.valid">{{\'SUBMIT\' | translate}}</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\form-validations\form-validations.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
], FormValidationsPage);

//# sourceMappingURL=form-validations.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_schedule__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_1_list_1__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_2_list_2__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_grid__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications_notifications__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LayoutsPage = (function () {
    function LayoutsPage(nav, translate) {
        this.nav = nav;
        this.translate = translate;
    }
    LayoutsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].forkJoin(this.translate.get('SCHEDULE'), this.translate.get('LISTS'), this.translate.get('LISTS'), this.translate.get('GRID'), this.translate.get('NOTIFICATIONS'), this.translate.get('PROFILE')).subscribe(function (data) {
            _this.items = [
                { title: data[0], component: __WEBPACK_IMPORTED_MODULE_2__schedule_schedule__["a" /* SchedulePage */] },
                { title: data[1], note: '(Big)', component: __WEBPACK_IMPORTED_MODULE_3__list_1_list_1__["a" /* List1Page */] },
                { title: data[2], note: '(Mini)', component: __WEBPACK_IMPORTED_MODULE_4__list_2_list_2__["a" /* List2Page */] },
                { title: data[3], component: __WEBPACK_IMPORTED_MODULE_5__grid_grid__["a" /* GridPage */] },
                { title: data[4], component: __WEBPACK_IMPORTED_MODULE_6__notifications_notifications__["a" /* NotificationsPage */] },
                { title: data[5], component: __WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */] },
            ];
        });
    };
    LayoutsPage.prototype.itemTapped = function (event, item) {
        this.nav.push(item.component);
    };
    return LayoutsPage;
}());
LayoutsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'layouts-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\layouts\layouts.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'LAYOUTS\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="layouts-content">\n\n  <ion-list class="layouts-list">\n\n    <button class="list-item" ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-row no-padding>\n\n        <ion-col no-padding class="item-content">\n\n          <h3 class="item-title">{{item.title}}</h3>\n\n          <span class="item-note" *ngIf="item.note">{{item.note}}</span>\n\n        </ion-col>\n\n        <ion-col no-padding width-10 class="item-icon">\n\n          <ion-icon name="arrow-forward"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\layouts\layouts.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
], LayoutsPage);

//# sourceMappingURL=layouts.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_model__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_service__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SchedulePage = (function () {
    function SchedulePage(nav, scheduleService, loadingCtrl) {
        this.nav = nav;
        this.scheduleService = scheduleService;
        this.loadingCtrl = loadingCtrl;
        this.schedule = new __WEBPACK_IMPORTED_MODULE_3__schedule_model__["a" /* ScheduleModel */]();
        this.segment = "today";
        this.loading = this.loadingCtrl.create();
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.scheduleService
            .getData()
            .then(function (data) {
            _this.schedule.today = data.today;
            _this.schedule.upcoming = data.upcoming;
            _this.loading.dismiss();
        });
    };
    SchedulePage.prototype.onSegmentChanged = function (segmentButton) {
        // console.log('Segment changed to', segmentButton.value);
    };
    SchedulePage.prototype.onSegmentSelected = function (segmentButton) {
        // console.log('Segment selected', segmentButton.value);
    };
    return SchedulePage;
}());
SchedulePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'schedule-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\schedule\schedule.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'SCHEDULE\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="schedule-content">\n\n  <ion-segment class="schedule-segment" [(ngModel)]="segment" (ionChange)="onSegmentChanged($event)">\n\n    <ion-segment-button value="today" (ionSelect)="onSegmentSelected($event)">\n\n      {{\'TODAY\' | translate}}\n\n    </ion-segment-button>\n\n    <ion-segment-button value="upcoming" (ionSelect)="onSegmentSelected($event)">\n\n      {{\'UPCOMING\' | translate}}\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <div [ngSwitch]="segment">\n\n    <div *ngSwitchCase="\'today\'">\n\n      <ion-list class="schedule-list">\n\n        <ion-item class="schedule-item" *ngFor="let item of schedule.today">\n\n          <ion-row>\n\n            <ion-col width-20 class="schedule-date">\n\n              <h2 class="schedule-day">{{item.date.day}}</h2>\n\n              <h3 class="schedule-month">{{item.date.month_name}}</h3>\n\n              <h4 class="schedule-time">{{item.date.time}}</h4>\n\n            </ion-col>\n\n            <ion-col width-80 class="schedule-data">\n\n              <div class="data-item">\n\n                <div class="item-content">\n\n                  <h2 class="item-title one-line">{{item.subject}}</h2>\n\n                  <div class="item-description">\n\n                    <ion-icon class="description-icon" name="clock"></ion-icon>\n\n                    <p class="description-text">{{item.date.full}}</p>\n\n                  </div>\n\n                  <div class="item-description">\n\n                    <ion-icon class="description-icon" name="navigate"></ion-icon>\n\n                    <p class="description-text one-line">{{item.location}}</p>\n\n                  </div>\n\n                </div>\n\n                <ion-icon class="item-icon" name="arrow-forward"></ion-icon>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div *ngSwitchCase="\'upcoming\'">\n\n      <ion-list class="schedule-list">\n\n        <ion-item class="schedule-item" *ngFor="let item of schedule.upcoming">\n\n          <ion-row>\n\n            <ion-col width-20 class="schedule-date">\n\n              <h2 class="schedule-day">{{item.date.day}}</h2>\n\n              <h3 class="schedule-month">{{item.date.month_name}}</h3>\n\n              <h4 class="schedule-time">{{item.date.time}}</h4>\n\n            </ion-col>\n\n            <ion-col width-80 class="schedule-data">\n\n              <div class="data-item">\n\n                <div class="item-content">\n\n                  <h2 class="item-title one-line">{{item.subject}}</h2>\n\n                  <div class="item-description">\n\n                    <ion-icon class="description-icon" name="clock"></ion-icon>\n\n                    <p class="description-text">{{item.date.full}}</p>\n\n                  </div>\n\n                  <div class="item-description">\n\n                    <ion-icon class="description-icon" name="navigate"></ion-icon>\n\n                    <p class="description-text one-line">{{item.location}}</p>\n\n                  </div>\n\n                </div>\n\n                <ion-icon class="item-icon" name="arrow-forward"></ion-icon>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\schedule\schedule.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__schedule_service__["a" /* ScheduleService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], SchedulePage);

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleService = (function () {
    function ScheduleService(http) {
        this.http = http;
    }
    ScheduleService.prototype.getData = function () {
        return this.http.get('./assets/example_data/schedule.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ScheduleService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ScheduleService;
}());
ScheduleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ScheduleService);

//# sourceMappingURL=schedule.service.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_2_model__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_2_service__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var List2Page = (function () {
    function List2Page(nav, list2Service, loadingCtrl) {
        this.nav = nav;
        this.list2Service = list2Service;
        this.loadingCtrl = loadingCtrl;
        this.list2 = new __WEBPACK_IMPORTED_MODULE_3__list_2_model__["a" /* List2Model */]();
        this.loading = this.loadingCtrl.create();
    }
    List2Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.list2Service
            .getData()
            .then(function (data) {
            _this.list2.items = data.items;
            _this.loading.dismiss();
        });
    };
    return List2Page;
}());
List2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'list-2-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\list-2\list-2.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ \'LIST_MINI\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="list-mini-content">\n\n  <div class="list-mini">\n\n    <ion-list>\n\n      <button class="list-item" ion-item *ngFor="let item of list2.items">\n\n        <ion-row no-padding class="content-row one-line">\n\n          <!-- You can limit the rows of the description by using the class one-line. If you remove it, all the content from the row will be shown -->\n\n          <ion-col no-padding width-18 class="item-avatar">\n\n            <preload-image class="avatar-image" [ratio]="{w:1, h:1}" [src]="item.image"></preload-image>\n\n          </ion-col>\n\n          <ion-col no-padding width-72 class="item-content">\n\n            <h3 class="item-title">{{item.name}}</h3>\n\n            <p class="item-description">{{item.description}}</p>\n\n          </ion-col>\n\n          <ion-col no-padding width-10 class="item-icon">\n\n            <ion-icon name="arrow-forward"></ion-icon>\n\n          </ion-col>\n\n        </ion-row>\n\n      </button>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\list-2\list-2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__list_2_service__["a" /* List2Service */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], List2Page);

//# sourceMappingURL=list-2.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List2Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var List2Service = (function () {
    function List2Service(http) {
        this.http = http;
    }
    List2Service.prototype.getData = function () {
        return this.http.get('./assets/example_data/lists.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    List2Service.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return List2Service;
}());
List2Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], List2Service);

//# sourceMappingURL=list-2.service.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridPage = (function () {
    function GridPage(nav) {
        this.nav = nav;
    }
    return GridPage;
}());
GridPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'grid-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\grid\grid.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'GRID\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item-group>\n\n    <ion-item-divider>{{\'GRID_EXAMPLE\' | translate}} #1</ion-item-divider>\n\n    <ion-row class="grid-1 grid-example">\n\n      <ion-col width-100 class="grid-item">\n\n        <div class="grid-item-wrapper">\n\n          <div class="grid-item-inner multi-line">\n\n            <h2 class="item-title">1</h2>\n\n            <h2 class="item-title">1</h2>\n\n            <h2 class="item-title">1</h2>\n\n            <h2 class="item-title">1</h2>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col width-50 class="grid-item" *ngFor="let item of [2, 3, 4, 5, 6]">\n\n        <div class="grid-item-wrapper">\n\n          <div class="grid-item-inner">\n\n            <h2 class="item-title">{{ item }}</h2>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-item-divider>{{\'GRID_EXAMPLE\' | translate}} #2</ion-item-divider>\n\n    <ion-row class="grid-2 grid-example">\n\n      <ion-col width-66 class="grid-item">\n\n        <div class="grid-item-wrapper">\n\n          <div class="grid-item-inner multi-line">\n\n            <h2 class="item-title">1</h2>\n\n            <h2 class="item-title">1</h2>\n\n            <h2 class="item-title">1</h2>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col width-33 class="grid-item">\n\n        <ion-row class="double-item">\n\n          <ion-col width-100 class="grid-item" *ngFor="let item of [2, 3]">\n\n            <div class="grid-item-wrapper">\n\n              <div class="grid-item-inner">\n\n                <h2 class="item-title">{{ item }}</h2>\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n      <ion-col width-33 class="grid-item" *ngFor="let item of [4, 5, 6, 7]">\n\n        <div class="grid-item-wrapper">\n\n          <div class="grid-item-inner">\n\n            <h2 class="item-title">{{ item }}</h2>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-item-divider>{{\'GRID_EXAMPLE\' | translate}} #3</ion-item-divider>\n\n    <ion-row class="grid-3 grid-example">\n\n      <ion-col width-50 class="grid-item" *ngFor="let item of [1, 2, 3, 4, 5, 6, 7]">\n\n        <div class="grid-item-wrapper">\n\n          <div class="grid-item-inner">\n\n            <h2 class="item-title">{{ item }}</h2>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-item-divider>{{\'GRID_EXAMPLE\' | translate}} #4</ion-item-divider>\n\n    <ion-row class="grid-3 grid-example">\n\n      <ion-col width-33 class="grid-item" *ngFor="let item of [1, 2, 3, 4, 5, 6, 7]">\n\n        <div class="grid-item-wrapper">\n\n          <div class="grid-item-inner">\n\n            <h2 class="item-title">{{ item }}</h2>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item-group>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\grid\grid.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
], GridPage);

//# sourceMappingURL=grid.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionalitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps_maps__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__google_login_google_login__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__twitter_login_twitter_login__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_card_contact_card__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ads_ads__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__video_playlist_video_playlist__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FunctionalitiesPage = (function () {
    function FunctionalitiesPage(nav, translate) {
        this.nav = nav;
        this.translate = translate;
    }
    FunctionalitiesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].forkJoin(this.translate.get('FACEBOOK_INTEGRATION'), this.translate.get('GOOGLE_INTEGRATION'), this.translate.get('TWITTER_INTEGRATION'), this.translate.get('CONTACT_CARD'), this.translate.get('MAPS'), this.translate.get('VIDEO_PLAYLIST'), this.translate.get('ADS')).subscribe(function (data) {
            _this.items = [
                { title: data[0], component: __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login__["a" /* FacebookLoginPage */] },
                { title: data[1], component: __WEBPACK_IMPORTED_MODULE_4__google_login_google_login__["a" /* GoogleLoginPage */] },
                { title: data[2], component: __WEBPACK_IMPORTED_MODULE_5__twitter_login_twitter_login__["a" /* TwitterLoginPage */] },
                { title: data[3], component: __WEBPACK_IMPORTED_MODULE_6__contact_card_contact_card__["a" /* ContactCardPage */] },
                { title: data[4], component: __WEBPACK_IMPORTED_MODULE_2__maps_maps__["a" /* MapsPage */] },
                { title: data[5], component: __WEBPACK_IMPORTED_MODULE_8__video_playlist_video_playlist__["a" /* VideoPlaylistPage */] },
                { title: data[6], component: __WEBPACK_IMPORTED_MODULE_7__ads_ads__["a" /* AdsPage */] }
            ];
        });
    };
    FunctionalitiesPage.prototype.itemTapped = function (event, item) {
        this.nav.push(item.component);
    };
    return FunctionalitiesPage;
}());
FunctionalitiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'functionalities-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\functionalities\functionalities.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'FUNCTIONALITIES\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="functionalities-content">\n\n  <ion-list class="functionalities-list">\n\n    <button class="list-item" ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-row no-padding>\n\n        <ion-col no-padding class="item-content">\n\n          <h3 class="item-title">{{item.title}}</h3>\n\n          <span class="item-note" *ngIf="item.note">{{item.note}}</span>\n\n        </ion-col>\n\n        <ion-col no-padding width-10 class="item-icon">\n\n          <ion-icon name="arrow-forward"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\functionalities\functionalities.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */]])
], FunctionalitiesPage);

//# sourceMappingURL=functionalities.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_google_map_google_map__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__maps_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__maps_model__ = __webpack_require__(662);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MapsPage = (function () {
    function MapsPage(nav, loadingCtrl, toastCtrl, GoogleMapsService, geolocation, keyboard) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.GoogleMapsService = GoogleMapsService;
        this.geolocation = geolocation;
        this.keyboard = keyboard;
        this.map_model = new __WEBPACK_IMPORTED_MODULE_7__maps_model__["a" /* MapsModel */]();
    }
    MapsPage.prototype.ngOnInit = function () {
        var _this = this;
        var _loading = this.loadingCtrl.create();
        _loading.present();
        this._GoogleMap.$mapReady.subscribe(function (map) {
            _this.map_model.init(map);
            _loading.dismiss();
        });
    };
    MapsPage.prototype.searchPlacesPredictions = function (query) {
        var env = this;
        if (query !== "") {
            env.GoogleMapsService.getPlacePredictions(query).subscribe(function (places_predictions) {
                env.map_model.search_places_predictions = places_predictions;
            }, function (e) {
                console.log('onError: %s', e);
            }, function () {
                console.log('onCompleted');
            });
        }
        else {
            env.map_model.search_places_predictions = [];
        }
    };
    MapsPage.prototype.setOrigin = function (location) {
        var env = this;
        // Clean map
        env.map_model.cleanMap();
        // Set the origin for later directions
        env.map_model.directions_origin.location = location;
        env.map_model.addPlaceToMap(location, '#00e9d5');
        // With this result we should find restaurants (*places) arround this location and then show them in the map
        // Now we are able to search *restaurants near this location
        env.GoogleMapsService.getPlacesNearby(location).subscribe(function (nearby_places) {
            // Create a location bound to center the map based on the results
            var bound = new google.maps.LatLngBounds();
            for (var i = 0; i < nearby_places.length; i++) {
                bound.extend(nearby_places[i].geometry.location);
                env.map_model.addNearbyPlace(nearby_places[i]);
            }
            // Select first place to give a hint to the user about how this works
            env.choosePlace(env.map_model.nearby_places[0]);
            // To fit map with places
            env.map_model.map.fitBounds(bound);
        }, function (e) {
            console.log('onError: %s', e);
        }, function () {
            console.log('onCompleted');
        });
    };
    MapsPage.prototype.selectSearchResult = function (place) {
        var env = this;
        env.map_model.search_query = place.description;
        env.map_model.search_places_predictions = [];
        // We need to get the location from this place. Let's geocode this place!
        env.GoogleMapsService.geocodePlace(place.place_id).subscribe(function (place_location) {
            env.setOrigin(place_location);
        }, function (e) {
            console.log('onError: %s', e);
        }, function () {
            console.log('onCompleted');
        });
    };
    MapsPage.prototype.clearSearch = function () {
        var env = this;
        this.keyboard.close();
        // Clean map
        env.map_model.cleanMap();
    };
    MapsPage.prototype.geolocateMe = function () {
        var env = this, _loading = env.loadingCtrl.create();
        _loading.present();
        this.geolocation.getCurrentPosition().then(function (position) {
            var current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            env.map_model.search_query = position.coords.latitude.toFixed(2) + ", " + position.coords.longitude.toFixed(2);
            env.setOrigin(current_location);
            env.map_model.using_geolocation = true;
            _loading.dismiss();
        }).catch(function (error) {
            console.log('Error getting location', error);
            _loading.dismiss();
        });
    };
    MapsPage.prototype.choosePlace = function (place) {
        var _this = this;
        var env = this;
        // Check if the place is not already selected
        if (!place.selected) {
            // De-select previous places
            env.map_model.deselectPlaces();
            // Select current place
            place.select();
            // Get both route directions and distance between the two locations
            var directions_observable = env.GoogleMapsService
                .getDirections(env.map_model.directions_origin.location, place.location), distance_observable = env.GoogleMapsService
                .getDistanceMatrix(env.map_model.directions_origin.location, place.location);
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(directions_observable, distance_observable).subscribe(function (data) {
                var directions = data[0], distance = data[1].rows[0].elements[0].distance.text, duration = data[1].rows[0].elements[0].duration.text;
                env.map_model.directions_display.setDirections(directions);
                if (env.toast) {
                    env.toast.dismiss();
                }
                env.toast = _this.toastCtrl.create({
                    message: 'That\'s ' + distance + ' away and will take ' + duration,
                    duration: 2000
                });
                env.toast.present();
            }, function (e) {
                console.log('onError: %s', e);
            }, function () {
                console.log('onCompleted');
            });
        }
    };
    return MapsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__components_google_map_google_map__["a" /* GoogleMap */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__components_google_map_google_map__["a" /* GoogleMap */])
], MapsPage.prototype, "_GoogleMap", void 0);
MapsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'maps-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\maps\maps.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ \'GOOGLE_MAPS\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-row no-padding class="map-row">\n\n    <ion-col no-padding class="map-col">\n\n      <div class="search-container">\n\n        <!-- <ion-toolbar class="search-toolbar transparent-background"> -->\n\n        <ion-toolbar class="search-toolbar">\n\n          <ion-buttons start>\n\n            <button ion-button icon-only (click)="geolocateMe()" class="geolocation-button" [ngClass]="{\'using-geolocation\': map_model.using_geolocation}">\n\n              <ion-icon name="locate"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n          <ion-searchbar class="search-places-bar" placeholder="Search places near location" [(ngModel)]="map_model.search_query" (ionInput)="searchPlacesPredictions(map_model.search_query)" (ionClear)="clearSearch()"></ion-searchbar>\n\n        </ion-toolbar>\n\n        <ion-list [hidden]="map_model.search_places_predictions.length == 0" class="search-options-list">\n\n          <ion-item *ngFor="let place of map_model.search_places_predictions" tappable (click)="selectSearchResult(place)">\n\n            {{ place.description }}\n\n          </ion-item>\n\n        </ion-list>\n\n      </div>\n\n      <div class="map-container">\n\n        <google-map [options]="map_model.map_options"></google-map>\n\n      </div>\n\n      <ion-scroll [hidden]="map_model.nearby_places.length == 0" scrollX="true" class="nearby-places-container">\n\n        <ion-row class="nearby-places-row">\n\n          <ion-col width-64 class="place-item-outer" *ngFor="let place of map_model.nearby_places" [ngClass]="{\'selected-place\': place.selected}" (click)="choosePlace(place)">\n\n            <ion-card class="place-card">\n\n              <background-image class="place-image-heading" [src]="place.details.image">\n\n                <ion-row class="heading-row">\n\n                  <ion-col no-padding width-100>\n\n                    <h2 class="place-title">{{ place.details.name }}</h2>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </background-image>\n\n              <div class="place-details-container">\n\n                <ion-row class="details-row">\n\n                  <ion-col no-padding width-50>\n\n                    <span class="opening-hours" [ngClass]="{\'opened\': (place.details && place.details.opening_hours && place.details.opening_hours.open_now), \'closed\': !(place.details && place.details.opening_hours && place.details.opening_hours.open_now)}">\n\n                      {{ (place.details && place.details.opening_hours && place.details.opening_hours.open_now) ? \'OPENED\' : \'CLOSED\' }}\n\n                    </span>\n\n                  </ion-col>\n\n                  <ion-col no-padding width-50>\n\n                    <div class="place-rating">\n\n                      <ion-item class="rating-item">\n\n                        <rating [(ngModel)]="place.details.rating" max="5" read-only="true"></rating>\n\n                      </ion-item>\n\n                    </div>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-list class="details-list" no-lines>\n\n                  <ion-item class="place-location">\n\n                    <ion-avatar item-left>\n\n                      <ion-icon name="pin"></ion-icon>\n\n                    </ion-avatar>\n\n                    <span class="location-text">{{ place.details.vicinity }}</span>\n\n                  </ion-item>\n\n                </ion-list>\n\n              </div>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-scroll>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\maps\maps.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6__maps_service__["a" /* GoogleMapsService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
], MapsPage);

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleMap = (function () {
    function GoogleMap(_elementRef) {
        this._elementRef = _elementRef;
        this._mapOptions = {
            zoom: 15
        };
        this.$mapReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._mapIdledOnce = false;
    }
    Object.defineProperty(GoogleMap.prototype, "options", {
        set: function (val) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(val)) {
                this._mapOptions = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    GoogleMap.prototype.ngOnInit = function () {
        this.initMap();
    };
    GoogleMap.prototype.initMap = function () {
        var _this = this;
        this._el = this._elementRef.nativeElement;
        this._map = new google.maps.Map(this._el, this._mapOptions);
        // Workarround for init method: try to catch the first idel event after the map cretion (this._mapIdledOnce). The following idle events don't matter.
        var _ready_listener = this._map.addListener('idle', function () {
            console.log("mapReady - IDLE");
            if (!_this._mapIdledOnce) {
                _this.$mapReady.emit(_this._map);
                _this._mapIdledOnce = true;
                // Stop listening to event, the map is ready
                google.maps.event.removeListener(_ready_listener);
            }
        });
    };
    return GoogleMap;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], GoogleMap.prototype, "options", null);
GoogleMap = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'google-map',
        template: ''
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], GoogleMap);

//# sourceMappingURL=google-map.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleMapsService = (function () {
    // There are some issues with async observers (https://gist.github.com/endash/1f961830d0c5b744598a)
    //    - That's why we need to use ngZones
    // Here's another post explaining the issue (http://stackoverflow.com/a/38100262/1116959)
    //    - Seems that google.maps API is not patched by Angular's zone
    function GoogleMapsService(zone) {
        this.zone = zone;
        this._AutocompleteService = new google.maps.places.AutocompleteService();
        this._Geocoder = new google.maps.Geocoder;
        // As we are already using a map, we don't need to pass the map element to the PlacesServices (https://groups.google.com/forum/#!topic/google-maps-js-api-v3/QJ67k-ATuFg)
        this._PlacesService = new google.maps.places.PlacesService(document.createElement("div"));
        this._DirectionsService = new google.maps.DirectionsService;
        this._DistanceMatrixService = new google.maps.DistanceMatrixService;
    }
    // Caveat:  As we are using Observable.create don't forget a well-formed finite Observable must attempt to call
    //          either the observer’s onCompleted method exactly once or its onError method exactly once, and must not
    //          thereafter attempt to call any of the observer’s other methods.
    //    - http://reactivex.io/documentation/operators/create.html
    //    - http://stackoverflow.com/a/38376519/1116959
    // https://developers.google.com/maps/documentation/javascript/reference#AutocompletePrediction
    GoogleMapsService.prototype.getPlacePredictions = function (query) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._AutocompleteService.getPlacePredictions({ input: query }, function (places_predictions, status) {
                if (status != google.maps.places.PlacesServiceStatus.OK) {
                    _this.zone.run(function () {
                        observer.next([]);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.next(places_predictions);
                        observer.complete();
                    });
                }
            });
        });
    };
    GoogleMapsService.prototype.geocodePlace = function (placeId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._Geocoder.geocode({ 'placeId': placeId }, function (results, status) {
                if (status.toString() === 'OK') {
                    if (results[0]) {
                        _this.zone.run(function () {
                            observer.next(results[0].geometry.location);
                            observer.complete();
                        });
                    }
                    else {
                        _this.zone.run(function () {
                            observer.error(new Error("no results"));
                        });
                    }
                }
                else {
                    _this.zone.run(function () {
                        observer.error(new Error("error"));
                    });
                }
            });
        });
    };
    // https://developers.google.com/maps/documentation/javascript/reference#PlaceResult
    GoogleMapsService.prototype.getPlacesNearby = function (location) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._PlacesService.nearbySearch({
                location: location,
                radius: 500,
                types: ['restaurant']
            }, function (results, status) {
                if (status != google.maps.places.PlacesServiceStatus.OK) {
                    _this.zone.run(function () {
                        observer.next([]);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.next(results);
                        observer.complete();
                    });
                }
            });
        });
    };
    // https://developers.google.com/maps/documentation/javascript/reference#DirectionsResult
    GoogleMapsService.prototype.getDirections = function (origin, destination) {
        var _this = this;
        var _origin = {
            location: origin
        }, _destination = {
            location: destination
        }, route_query = {
            origin: _origin,
            destination: _destination,
            travelMode: google.maps.TravelMode.WALKING
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._DirectionsService.route(route_query, function (route, status) {
                if (status.toString() === 'OK') {
                    _this.zone.run(function () {
                        // Yield a single value and complete
                        observer.next(route);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.error(new Error("error due to " + status));
                    });
                }
            });
        });
    };
    GoogleMapsService.prototype.getDistanceMatrix = function (origin, destination) {
        var _this = this;
        var _origin = {
            location: origin
        }, _destination = {
            location: destination
        }, distance_query = {
            origins: [_origin],
            destinations: [_destination],
            travelMode: google.maps.TravelMode.WALKING,
            unitSystem: google.maps.UnitSystem.METRIC
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._DistanceMatrixService.getDistanceMatrix(distance_query, function (distance, status) {
                if (status.toString() === 'OK') {
                    _this.zone.run(function () {
                        // Yield a single value and complete
                        observer.next(distance);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.error(new Error("error due to " + status));
                    });
                }
            });
        });
    };
    return GoogleMapsService;
}());
GoogleMapsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], GoogleMapsService);

//# sourceMappingURL=maps.service.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facebook_user_model__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_login_service__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FacebookLoginPage = (function () {
    function FacebookLoginPage(nav, facebookLoginService, loadingCtrl) {
        this.nav = nav;
        this.facebookLoginService = facebookLoginService;
        this.loadingCtrl = loadingCtrl;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__facebook_user_model__["a" /* FacebookUserModel */]();
        this.loading = this.loadingCtrl.create();
    }
    FacebookLoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.facebookLoginService.getFacebookUser()
            .then(function (user) {
            _this.user = user;
            _this.loading.dismiss();
        }, function (error) {
            console.log(error);
            _this.loading.dismiss();
        });
    };
    FacebookLoginPage.prototype.doFacebookLogout = function () {
        var _this = this;
        this.facebookLoginService.doFacebookLogout()
            .then(function (res) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_2__facebook_user_model__["a" /* FacebookUserModel */]();
        }, function (error) {
            console.log("Facebook logout error", error);
        });
    };
    FacebookLoginPage.prototype.doFacebookLogin = function () {
        var _this = this;
        this.facebookLoginService.doFacebookLogin()
            .then(function (user) {
            _this.user = user;
        }, function (err) {
            console.log("Facebook Login error", err);
        });
    };
    return FacebookLoginPage;
}());
FacebookLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'facebook-login-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\facebook-login\facebook-login.html"*/'<ion-header class="facebook-header">\n\n  <ion-navbar>\n\n    <ion-title>{{\'FACEBOOK\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="facebook-integration-content" [ngClass]="{connected: user.userId}">\n\n  <div *ngIf="!user.userId">\n\n    <h1 class="no-connection-message">{{\'NOT_LOGGED_FACEBOOK\' | translate}}</h1>\n\n    <ion-row *ngIf="!user.userId" class="actions-row facebook-connect-row">\n\n      <ion-col no-padding width-100>\n\n        <button ion-button block class="auth-action-button facebook-auth-button" (click)="doFacebookLogin()">{{\'CONNECT_WITH_FACEBOOK\' | translate}}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <ion-card class="facebook-card" *ngIf="user.userId">\n\n    <background-image class="user-image-heading" [src]="user.image">\n\n      <ion-row class="heading-row">\n\n        <ion-col no-padding width-72 class="user-details-col">\n\n          <h2 class="user-name">{{user.name}}</h2>\n\n        </ion-col>\n\n        <ion-col no-padding width-28 class="user-details-col">\n\n          <ion-icon *ngIf="(user.gender | lowercase) == \'female\'" class="user-gender-icon" name="female"></ion-icon>\n\n          <ion-icon *ngIf="(user.gender | lowercase) == \'male\'" class="user-gender-icon" name="male"></ion-icon>\n\n          <span class="user-gender">{{user.gender}}</span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </background-image>\n\n    <h3 class="divider-heading">{{ \'FRIENDS\' | translate }}</h3>\n\n    <ion-row class="friends-row">\n\n      <ion-col no-padding class="friend-col" *ngFor="let friend_image of user.friends">\n\n        <preload-image class="rounded-image" [ratio]="{w:1, h:1}" [src]="friend_image" alt="facebook friend" title="facebook friend"></preload-image>\n\n      </ion-col>\n\n      <ion-col no-padding class="friend-col">\n\n        <h3 class="more-friends">22</h3>\n\n      </ion-col>\n\n    </ion-row>\n\n    <h3 class="divider-heading">{{\'PHOTOS\' | translate }}</h3>\n\n    <ion-row class="photos-row" wrap>\n\n      <ion-col no-padding width-25 class="photo-col" *ngFor="let photo of user.photos; let i = index">\n\n        <preload-image [ratio]="{w:1, h:1}" [src]="photo" alt="facebook photo" title="facebook photo"></preload-image>\n\n        <div *ngIf="i == (user.photos.length -1)" class="has-more-images">\n\n          <h3 class="images-count">107</h3>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="actions-row">\n\n      <ion-col no-padding width-100>\n\n        <button ion-button block class="auth-action-button logout-button" (click)="doFacebookLogout()">{{ \'LOG_OUT\' | translate}}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\facebook-login\facebook-login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__facebook_login_service__["a" /* FacebookLoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], FacebookLoginPage);

//# sourceMappingURL=facebook-login.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_user_model__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__google_login_service__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleLoginPage = (function () {
    function GoogleLoginPage(navCtrl, googleLoginService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.googleLoginService = googleLoginService;
        this.loadingCtrl = loadingCtrl;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__google_user_model__["a" /* GoogleUserModel */]();
        this.loading = this.loadingCtrl.create();
    }
    GoogleLoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.googleLoginService.getGoogleUser()
            .then(function (user) {
            _this.user = user;
            _this.loading.dismiss();
        }, function (error) {
            console.log(error);
            _this.loading.dismiss();
        });
    };
    GoogleLoginPage.prototype.doGoogleLogout = function () {
        var _this = this;
        this.googleLoginService.doGoogleLogout()
            .then(function (res) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_2__google_user_model__["a" /* GoogleUserModel */]();
        }, function (error) {
            console.log("Google logout error", error);
        });
    };
    GoogleLoginPage.prototype.doGoogleLogin = function () {
        var _this = this;
        this.googleLoginService.doGoogleLogin()
            .then(function (user) {
            _this.user = user;
        }, function (err) {
            console.log("Google Login error", err);
        });
    };
    return GoogleLoginPage;
}());
GoogleLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'google-login-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\google-login\google-login.html"*/'<ion-header class="google-header">\n\n  <ion-navbar>\n\n    <ion-title>Google</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="google-integration-content">\n\n\n\n  <div *ngIf="!user.userId">\n\n    <h1 class="no-connection-message">{{ \'NOT_LOGGED_GOOGLE\' | translate }}</h1>\n\n    <ion-row class="actions-row google-connect-row">\n\n      <ion-col no-padding width-100>\n\n        <button ion-button block class="auth-action-button google-auth-button" (click)="doGoogleLogin()">{{ \'CONNECT_WITH_GOOGLE\' | translate}}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div *ngIf="user.userId">\n\n    <background-image class="user-image-heading" [src]="user.image"></background-image>\n\n    <ion-row class="contact-details-row" wrap>\n\n      <ion-col no-padding width-100>\n\n        <h2 class="contact-name">{{user.name}}</h2>\n\n      </ion-col>\n\n      <ion-col no-padding width-100>\n\n        <p class="contact-description">\n\n          {{user.email}}\n\n        </p>\n\n      </ion-col>\n\n    </ion-row>\n\n    <h3 class="divider-heading">{{\'FRIENDS\' | translate}}</h3>\n\n    <ion-row class="friends-row">\n\n      <ion-col no-padding class="friend-col" *ngFor="let friend_image of user.friends">\n\n        <preload-image class="rounded-image" [ratio]="{w:1, h:1}" [src]="friend_image" alt="google friend" title="google friend"></preload-image>\n\n        <h4 class="friend-name">Tom</h4>\n\n      </ion-col>\n\n      <ion-col no-padding class="friend-col">\n\n        <div class="more-friends">\n\n          <h3 class="more-friends-text">22</h3>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <h3 class="divider-heading">{{\'PHOTOS\' | translate}}</h3>\n\n    <ion-scroll scrollX="true" class="horizontal-photos-scroll">\n\n      <ion-row class="photos-row">\n\n        <ion-col no-padding width-30 class="photo-col" *ngFor="let photo of user.photos; let i = index">\n\n          <preload-image [ratio]="{w:1, h:1}" [src]="photo" alt="google photo" title="google photo"></preload-image>\n\n          <div *ngIf="i == (user.photos.length -1)" class="has-more-images">\n\n            <h3 class="images-count">107</h3>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-scroll>\n\n    <ion-row class="actions-row">\n\n      <ion-col no-padding width-100>\n\n        <button ion-button block class="auth-action-button logout-button" (click)="doGoogleLogout()">{{ \'LOG_OUT\' | translate }}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\google-login\google-login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__google_login_service__["a" /* GoogleLoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], GoogleLoginPage);

//# sourceMappingURL=google-login.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__twitter_user_model__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__twitter_login_service__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TwitterLoginPage = (function () {
    function TwitterLoginPage(navCtrl, twitterLoginService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.twitterLoginService = twitterLoginService;
        this.loadingCtrl = loadingCtrl;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__twitter_user_model__["a" /* TwitterUserModel */]();
        this.loading = this.loadingCtrl.create();
    }
    TwitterLoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.twitterLoginService.getTwitterUser()
            .then(function (user) {
            _this.user = user;
            _this.loading.dismiss();
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        });
    };
    TwitterLoginPage.prototype.doTwitterLogout = function () {
        var _this = this;
        this.twitterLoginService.doTwitterLogout()
            .then(function (res) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_2__twitter_user_model__["a" /* TwitterUserModel */]();
        }, function (err) {
            console.log("Twitter logout error", err);
        });
    };
    TwitterLoginPage.prototype.doTwitterLogin = function () {
        var _this = this;
        this.twitterLoginService.doTwitterLogin()
            .then(function (user) {
            _this.user = user;
        }, function (err) {
            console.log("Twitter Login error", err);
        });
    };
    return TwitterLoginPage;
}());
TwitterLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'twitter-login-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\twitter-login\twitter-login.html"*/'<ion-header class="twitter-header">\n\n  <ion-navbar>\n\n    <ion-title>{{\'TWITTER\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="twitter-integration-content" [ngClass]="{connected: user.userId}">\n\n\n\n  <div *ngIf="!user.userId">\n\n    <h1 class="no-connection-message">{{\'NOT_LOGGED_TWITTER\' | translate}}</h1>\n\n    <ion-row class="actions-row twitter-connect-row">\n\n      <ion-col no-padding width-100>\n\n        <button ion-button block class="auth-action-button twitter-auth-button" (click)="doTwitterLogin()">{{\'CONNECT_WITH_TWITTER\' | translate}}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div *ngIf="user.userId">\n\n    <ion-row class="main-user-data-row">\n\n      <ion-col no-padding width-100>\n\n        <preload-image class="twitter-user-image" [ratio]="{w:1, h:1}" [src]="user.image" alt="twitter user image" title="twitter user image"></preload-image>\n\n      </ion-col>\n\n      <ion-col class="social-connections-col" no-padding width-50>\n\n        <span class="connection-type">Followers</span>\n\n        <h2 class="connection-number">{{ user.followers }}</h2>\n\n      </ion-col>\n\n      <ion-col class="social-connections-col" no-padding width-50>\n\n        <span class="connection-type">Following</span>\n\n        <h2 class="connection-number">{{ user.following }}</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="user-extended-data-row">\n\n      <ion-col no-padding width-100>\n\n        <h2 class="user-display-name">{{ user.name }}</h2>\n\n        <h3 class="user-username">@{{ user.screenName }}</h3>\n\n        <p class="user-description">{{ user.description }}</p>\n\n        <div class="user-location">\n\n          <ion-icon class="location-icon" name="ios-pin-outline"></ion-icon>\n\n          <span class="location-name">{{ user.location }}</span>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="actions-row">\n\n      <ion-col no-padding width-100>\n\n        <button ion-button block class="auth-action-button logout-button" (click)="doTwitterLogout()">{{\'LOG_OUT\' | translate}}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\twitter-login\twitter-login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__twitter_login_service__["a" /* TwitterLoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], TwitterLoginPage);

//# sourceMappingURL=twitter-login.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_model__ = __webpack_require__(666);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactCardPage = (function () {
    function ContactCardPage(navCtrl, emailComposer, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.emailComposer = emailComposer;
        this.inAppBrowser = inAppBrowser;
        this.contact = new __WEBPACK_IMPORTED_MODULE_4__contact_model__["a" /* ContactModel */]();
    }
    //Note: we commented this method because the Call Number plugin was unstable and causing lots of errors. If you want to use it please go: https://ionicframework.com/docs/native/call-number/
    // call(number: string){
    //   this.callNumber.callNumber(number, true)
    //   .then(() => console.log('Launched dialer!'))
    //   .catch(() => console.log('Error launching dialer'));
    // }
    ContactCardPage.prototype.sendMail = function () {
        //for more option please go here: http://ionicframework.com/docs/native/email-composer/
        var email = {
            to: 'contact@ionicthemes.com',
            subject: 'This app is the best!',
            body: "Hello, I'm trying this fantastic app that will save me hours of development"
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    ContactCardPage.prototype.openInAppBrowser = function (website) {
        this.inAppBrowser.create(website, '_blank', "location=yes");
    };
    return ContactCardPage;
}());
ContactCardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contact-card-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\contact-card\contact-card.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'CONTACT_CARD\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="contact-card-content">\n\n  <ion-slides class="contact-slides" pager="true" autoplay="4000" loop="false">\n\n    <ion-slide class="contact-slide" *ngFor="let image of contact.images">\n\n      <background-image class="slide-image" [src]="image"></background-image>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-row class="contact-details-row" wrap>\n\n    <ion-col no-padding width-65>\n\n      <h2 class="contact-name">{{ contact.name }}</h2>\n\n    </ion-col>\n\n    <ion-col no-padding width-35 class="rating-col">\n\n      <div class="contact-rating">\n\n        <ion-item class="rating-item">\n\n          <rating [(ngModel)]="contact.rating" max="5" read-only="true"></rating>\n\n        </ion-item>\n\n      </div>\n\n    </ion-col>\n\n    <ion-col no-padding width-100>\n\n      <p class="contact-description">\n\n        Today opens from 8:30 am to 6:00 pm\n\n      </p>\n\n    </ion-col>\n\n  </ion-row>\n\n  <div class="button-bar">\n\n    <!-- <button ion-button primary (click)="call(contact.phone)"> -->\n\n    <button ion-button primary>\n\n      <ion-icon name="call"></ion-icon>\n\n    </button>\n\n    <button ion-button primary (click)="sendMail(contact.email)">\n\n      <ion-icon name="mail"></ion-icon>\n\n    </button>\n\n    <button ion-button primary (click)="openInAppBrowser(contact.website)">\n\n      <ion-icon name="globe"></ion-icon>\n\n    </button>\n\n  </div>\n\n  <preload-image [ratio]="{w:4, h:3}" src="https://maps.googleapis.com/maps/api/staticmap?center=40.785091,-73.968285&zoom=15&size=400x300&scale=2&markers=icon:https://s3-us-west-2.amazonaws.com/ionicthemes-apps-assets/ion2FullApp/pin.min.png|40.785091,-73.968285" alt="{{ contact.name }} location map" title="{{ contact.name }} - {{ contact.address }}"></preload-image>\n\n  <ion-list class="details-list">\n\n    <ion-item class="detail-item">\n\n      <ion-avatar item-left>\n\n        <ion-icon name="pin"></ion-icon>\n\n      </ion-avatar>\n\n      <span class="detail-text">{{ contact.address }}</span>\n\n    </ion-item>\n\n    <ion-item class="detail-item">\n\n      <ion-avatar item-left>\n\n        <ion-icon name="globe"></ion-icon>\n\n      </ion-avatar>\n\n      <span class="detail-text">{{ contact.website }}</span>\n\n    </ion-item>\n\n    <ion-item class="detail-item">\n\n      <ion-avatar item-left>\n\n        <ion-icon name="call"></ion-icon>\n\n      </ion-avatar>\n\n      <span class="detail-text">{{ contact.phone }}</span>\n\n    </ion-item>\n\n    <ion-item class="detail-item">\n\n      <ion-avatar item-left>\n\n        <ion-icon name="mail"></ion-icon>\n\n      </ion-avatar>\n\n      <span class="detail-text">{{ contact.email }}</span>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\contact-card\contact-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], ContactCardPage);

//# sourceMappingURL=contact-card.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdsPage = (function () {
    function AdsPage(nav, admob, toastCtrl, platform) {
        this.nav = nav;
        this.admob = admob;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.bannerConfig = {
            // add your banner config here
            // for the sake of this example we will just use the test config
            isTesting: true,
            autoShow: true,
        };
        this.interstitialConfig = {
            // add your config here
            // for the sake of this example we will just use the test config
            isTesting: true,
            autoShow: true,
        };
    }
    AdsPage.prototype.ionViewWillLoad = function () {
        this.admob.banner.config(this.bannerConfig);
        this.admob.interstitial.config(this.interstitialConfig);
    };
    AdsPage.prototype.showBanner = function () {
        var toast = this.toastCtrl.create({
            message: 'Your ad is being created...',
            duration: 3000,
            position: 'top'
        });
        toast.present();
        this.admob.banner.prepare()
            .then(function () {
            // banner Ad is ready
            // if we set autoShow to false, then we will need to call the show method here
        })
            .catch(function (e) { return console.log(e); });
    };
    AdsPage.prototype.removeBanner = function () {
        this.admob.banner.remove()
            .then(function () {
            console.log("removeBanner");
        })
            .catch(function (e) { return console.log(e); });
    };
    AdsPage.prototype.showInterstitial = function () {
        this.admob.interstitial.prepare()
            .then(function () {
            // interstitial Ad is ready
            // if we set autoShow to false, then we will need to call the show method here
        })
            .catch(function (e) { return console.log(e); });
    };
    return AdsPage;
}());
AdsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ads-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\ads\ads.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Ads</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <h2 class="ads-heading">Earn money displaying ads in your app</h2>\n\n  <div class="ad-button-outer" (click)="showInterstitial()">\n\n    <ion-row class="ad-button-row">\n\n      <ion-col class="illustration-col" no-padding col-5>\n\n        <preload-image class="interstitial-illustration" [ratio]="{w:60, h:71}" src="./assets/images/ads/instertitial-illustration.png" alt="interstitial illustration" title="interstitial illustration"></preload-image>\n\n      </ion-col>\n\n      <ion-col class="text-col" col-7>\n\n        <h3 class="ad-button-text">{{\'SHOW_INTERSTITIAL\' | translate}}</h3>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n  <div class="ad-button-outer" (click)="showBanner()">\n\n    <ion-row class="ad-button-row" no-padding>\n\n      <ion-col class="text-col" col-7>\n\n        <h3 class="ad-button-text">{{\'SHOW_BANNER\' | translate}}</h3>\n\n      </ion-col>\n\n      <ion-col class="illustration-col" no-padding col-5>\n\n        <preload-image class="banner-illustration" [ratio]="{w:60, h:71}" src="./assets/images/ads/banner-illustration.png" alt="banner illustration" title="banner illustration"></preload-image>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer class="ads-footer">\n\n  <ion-toolbar>\n\n    <button class="remove-ad-button" ion-button block (click)="removeBanner()">{{\'REMOVE_BANNER\' | translate}}</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\ads\ads.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], AdsPage);

//# sourceMappingURL=ads.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlaylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_playlist_model__ = __webpack_require__(667);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoPlaylistPage = (function () {
    function VideoPlaylistPage(nav, loadingCtrl, socialSharing) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.start_playing = false;
        this.video_playlist_model = new __WEBPACK_IMPORTED_MODULE_3__video_playlist_model__["a" /* VideoPlaylistModel */]();
    }
    VideoPlaylistPage.prototype.createLoader = function () {
        this.loading = this.loadingCtrl.create();
    };
    VideoPlaylistPage.prototype.presentLoader = function () {
        // Check if the current instance is usable
        if (this.loading === undefined || (this.loading !== undefined && this.loading.instance === null)) {
            // If it's not usable, then create a new one
            this.createLoader();
        }
        this.loading.present();
    };
    VideoPlaylistPage.prototype.dismissLoader = function () {
        // Check if the current instance is usable
        if (this.loading !== undefined) {
            // If it's not usable, then create a new one
            this.loading.dismiss();
        }
    };
    VideoPlaylistPage.prototype.playMedia = function (media) {
        // Check if this media is not the same we are currently playing
        if (media !== this.video_playlist_model.selected_video) {
            this.presentLoader();
            // Change sources
            this.video_playlist_model.selected_video = media;
            // When changing sources we wait until the metadata is loaded and then we start playing the video
        }
    };
    VideoPlaylistPage.prototype.onPlayerReady = function (api) {
        this.api = api;
        this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    };
    VideoPlaylistPage.prototype.playVideo = function () {
        if (this.start_playing) {
            this.dismissLoader();
            this.api.play();
        }
        else {
            this.start_playing = true;
        }
    };
    VideoPlaylistPage.prototype.shareVideo = function () {
        var current_video = this.video_playlist_model.selected_video;
        //this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share(current_video.description, current_video.title, current_video.thumbnail, null)
            .then(function () {
            console.log('Success!');
        })
            .catch(function () {
            console.log('Error');
        });
    };
    return VideoPlaylistPage;
}());
VideoPlaylistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'video-playlist-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\video-playlist\video-playlist.html"*/'<ion-header class="video-playlist-header">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'VIDEO_PLAYLIST\' | translate}}</ion-title>\n\n    <ion-buttons end>\n\n      <button class="share-button" ion-button icon-only (click)="shareVideo()">\n\n        <ion-icon name="md-share"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="video-playlist-content">\n\n	<div class="video-player-container">\n\n		<vg-player class="video-player" (onPlayerReady)="onPlayerReady($event)">\n\n			<vg-buffering></vg-buffering>\n\n			<vg-overlay-play></vg-overlay-play>\n\n\n\n			<vg-controls [vgAutohide]="true" [vgAutohideTime]="5">\n\n				<ion-row class="controls-row">\n\n					<ion-col no-padding width-18>\n\n						<vg-time-display [vgProperty]="\'current\'" [vgFormat]="\'mm:ss\'"></vg-time-display>\n\n					</ion-col>\n\n					<ion-col no-padding width-64>\n\n						<vg-scrub-bar>\n\n								<vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n\n								<vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n\n						</vg-scrub-bar>\n\n					</ion-col>\n\n					<ion-col no-padding width-18>\n\n						<vg-time-display [vgProperty]="\'left\'" [vgFormat]="\'mm:ss\'"></vg-time-display>\n\n					</ion-col>\n\n				</ion-row>\n\n	    </vg-controls>\n\n\n\n			<video class="expand-horizontally" #player_video [vgMedia]="player_video" id="player-video" preload="auto">\n\n	      <source *ngFor="let video of video_playlist_model.selected_video.sources" [src]="video.src" [type]="video.type">\n\n	    </video>\n\n	  </vg-player>\n\n	</div>\n\n\n\n	<ion-row class="video-data-row">\n\n		<ion-col no-padding>\n\n			<h2 class="video-title">{{ video_playlist_model.selected_video.title }}</h2>\n\n			<p class="video-description">{{ video_playlist_model.selected_video.description }}</p>\n\n		</ion-col>\n\n	</ion-row>\n\n\n\n	<ion-list class="video-playlist">\n\n	  <ion-item class="playlist-item" *ngFor="let media of video_playlist_model.video_playlist">\n\n			<ion-thumbnail class="media-thumbnail" item-left (click)="playMedia(media)">\n\n	      <preload-image class="media-thumbnail-image" [ratio]="{w:16, h:9}" [src]="media.thumbnail"></preload-image>\n\n	    </ion-thumbnail>\n\n			<h2 class="media-title">{{ media.title }}</h2>\n\n	    <p class="media-description" rows="2">{{ media.description }}</p>\n\n	  </ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\video-playlist\video-playlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
], VideoPlaylistPage);

//# sourceMappingURL=video-playlist.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductTypeService = (function () {
    function ProductTypeService(http) {
        this.http = http;
    }
    ProductTypeService.prototype.getData = function () {
        return this.http.get('../../assets/example_data/product_types.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductTypeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return ProductTypeService;
}());
ProductTypeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ProductTypeService);

//# sourceMappingURL=product-type.service.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowHideInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowHideInput = (function () {
    function ShowHideInput(el) {
        this.el = el;
        this.type = 'password';
    }
    ShowHideInput.prototype.changeType = function (type) {
        this.type = type;
        this.el.nativeElement.children[0].type = this.type;
    };
    return ShowHideInput;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])(),
    __metadata("design:type", String)
], ShowHideInput.prototype, "type", void 0);
ShowHideInput = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[show-hide-input]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], ShowHideInput);

//# sourceMappingURL=show-hide-input.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_listing_listing__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_followers_followers__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_layouts_layouts__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forms_forms__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_notifications_notifications__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_navigation_tabs_navigation__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_walkthrough_walkthrough__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_forgot_password_forgot_password__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_schedule_schedule__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_ads_ads__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_list_1_list_1__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_list_2_list_2__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_grid_grid__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_form_layout_form_layout__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_filters_filters__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_terms_of_service_terms_of_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_privacy_policy_privacy_policy__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_form_validations_form_validations__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_preload_image_preload_image__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_background_image_background_image__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_show_hide_password_show_hide_container__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_show_hide_password_show_hide_input__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_color_radio_color_radio__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_counter_input_counter_input__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_rating_rating__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_google_map_google_map__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_feed_feed_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_listing_listing_service__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_profile_profile_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_notifications_notifications_service__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_list_1_list_1_service__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_list_2_list_2_service__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_schedule_schedule_service__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_facebook_login_facebook_login_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_google_login_google_login_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_twitter_login_twitter_login_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_maps_maps_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_social_sharing__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_native_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_in_app_browser__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_facebook__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_google_plus__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ionic_native_keyboard__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_geolocation__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_twitter_connect__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_admob_free__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ionic_native_app_rate__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_native_image_picker__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ionic_native_crop__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__ionic_native_email_composer__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_functionalities_functionalities__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_maps_maps__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_facebook_login_facebook_login__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_google_login_google_login__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_twitter_login_twitter_login__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_contact_card_contact_card__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_video_playlist_video_playlist__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__components_video_player_video_player_module__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__components_validators_validators_module__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__providers_language_language_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_cart_cart__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_product_detail_product_detail__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__providers_product_type_product_type_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_product_detail_product_detail_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_shop_shop__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__pages_shop_shop_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__components_data_scroll_x_data_scroll_x__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__components_data_grid_data_grid__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__components_topbar_topbar__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__pages_checkout_checkout__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__components_shipping_shipping__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__components_cart_list_cart_list__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__components_payment_payment__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__components_confirm_confirm__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__components_list_shop_list_shop__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__components_list_product_list_product__ = __webpack_require__(716);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































































// Functionalities


























function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_listing_listing__["a" /* ListingPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_followers_followers__["a" /* FollowersPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_layouts_layouts__["a" /* LayoutsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_forms_forms__["a" /* FormsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_list_1_list_1__["a" /* List1Page */],
            __WEBPACK_IMPORTED_MODULE_22__pages_list_2_list_2__["a" /* List2Page */],
            __WEBPACK_IMPORTED_MODULE_23__pages_grid_grid__["a" /* GridPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_form_layout_form_layout__["a" /* FormLayoutPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_filters_filters__["a" /* FiltersPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_terms_of_service_terms_of_service__["a" /* TermsOfServicePage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
            __WEBPACK_IMPORTED_MODULE_65__pages_maps_maps__["a" /* MapsPage */],
            __WEBPACK_IMPORTED_MODULE_64__pages_functionalities_functionalities__["a" /* FunctionalitiesPage */],
            __WEBPACK_IMPORTED_MODULE_66__pages_facebook_login_facebook_login__["a" /* FacebookLoginPage */],
            __WEBPACK_IMPORTED_MODULE_67__pages_google_login_google_login__["a" /* GoogleLoginPage */],
            __WEBPACK_IMPORTED_MODULE_69__pages_contact_card_contact_card__["a" /* ContactCardPage */],
            __WEBPACK_IMPORTED_MODULE_68__pages_twitter_login_twitter_login__["a" /* TwitterLoginPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_ads_ads__["a" /* AdsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_form_validations_form_validations__["a" /* FormValidationsPage */],
            __WEBPACK_IMPORTED_MODULE_70__pages_video_playlist_video_playlist__["a" /* VideoPlaylistPage */],
            __WEBPACK_IMPORTED_MODULE_74__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_29__components_preload_image_preload_image__["a" /* PreloadImage */],
            __WEBPACK_IMPORTED_MODULE_30__components_background_image_background_image__["a" /* BackgroundImage */],
            __WEBPACK_IMPORTED_MODULE_31__components_show_hide_password_show_hide_container__["a" /* ShowHideContainer */],
            __WEBPACK_IMPORTED_MODULE_32__components_show_hide_password_show_hide_input__["a" /* ShowHideInput */],
            __WEBPACK_IMPORTED_MODULE_33__components_color_radio_color_radio__["a" /* ColorRadio */],
            __WEBPACK_IMPORTED_MODULE_34__components_counter_input_counter_input__["a" /* CounterInput */],
            __WEBPACK_IMPORTED_MODULE_35__components_rating_rating__["a" /* Rating */],
            __WEBPACK_IMPORTED_MODULE_36__components_google_map_google_map__["a" /* GoogleMap */],
            __WEBPACK_IMPORTED_MODULE_75__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
            __WEBPACK_IMPORTED_MODULE_78__pages_shop_shop__["a" /* ShopPage */],
            __WEBPACK_IMPORTED_MODULE_80__components_data_scroll_x_data_scroll_x__["a" /* DataScrollXComponent */],
            __WEBPACK_IMPORTED_MODULE_81__components_data_grid_data_grid__["a" /* DataGridComponent */],
            __WEBPACK_IMPORTED_MODULE_82__components_topbar_topbar__["a" /* TopbarComponent */],
            __WEBPACK_IMPORTED_MODULE_83__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_84__components_shipping_shipping__["a" /* ShippingComponent */],
            __WEBPACK_IMPORTED_MODULE_85__components_cart_list_cart_list__["a" /* CartListComponent */],
            __WEBPACK_IMPORTED_MODULE_86__components_payment_payment__["a" /* PaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_87__components_confirm_confirm__["a" /* ConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_88__components_list_shop_list_shop__["a" /* ListShopComponent */],
            __WEBPACK_IMPORTED_MODULE_89__components_list_product_list_product__["a" /* ListProductComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_48__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/product-detail/product-detail.module#ProductDetailPageModule', name: 'ProductDetailPage', segment: 'product-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/shop/shop.module#ShopPageModule', name: 'ShopPage', segment: 'shop', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_71__components_video_player_video_player_module__["a" /* VideoPlayerModule */],
            __WEBPACK_IMPORTED_MODULE_72__components_validators_validators_module__["a" /* ValidatorsModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_listing_listing__["a" /* ListingPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_followers_followers__["a" /* FollowersPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_layouts_layouts__["a" /* LayoutsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_forms_forms__["a" /* FormsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_list_1_list_1__["a" /* List1Page */],
            __WEBPACK_IMPORTED_MODULE_22__pages_list_2_list_2__["a" /* List2Page */],
            __WEBPACK_IMPORTED_MODULE_23__pages_grid_grid__["a" /* GridPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_form_layout_form_layout__["a" /* FormLayoutPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_filters_filters__["a" /* FiltersPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_terms_of_service_terms_of_service__["a" /* TermsOfServicePage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
            __WEBPACK_IMPORTED_MODULE_65__pages_maps_maps__["a" /* MapsPage */],
            __WEBPACK_IMPORTED_MODULE_64__pages_functionalities_functionalities__["a" /* FunctionalitiesPage */],
            __WEBPACK_IMPORTED_MODULE_66__pages_facebook_login_facebook_login__["a" /* FacebookLoginPage */],
            __WEBPACK_IMPORTED_MODULE_67__pages_google_login_google_login__["a" /* GoogleLoginPage */],
            __WEBPACK_IMPORTED_MODULE_69__pages_contact_card_contact_card__["a" /* ContactCardPage */],
            __WEBPACK_IMPORTED_MODULE_68__pages_twitter_login_twitter_login__["a" /* TwitterLoginPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_ads_ads__["a" /* AdsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_form_validations_form_validations__["a" /* FormValidationsPage */],
            __WEBPACK_IMPORTED_MODULE_70__pages_video_playlist_video_playlist__["a" /* VideoPlaylistPage */],
            __WEBPACK_IMPORTED_MODULE_74__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_75__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
            __WEBPACK_IMPORTED_MODULE_78__pages_shop_shop__["a" /* ShopPage */],
            __WEBPACK_IMPORTED_MODULE_83__pages_checkout_checkout__["a" /* CheckoutPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_37__pages_feed_feed_service__["a" /* FeedService */],
            __WEBPACK_IMPORTED_MODULE_38__pages_listing_listing_service__["a" /* ListingService */],
            __WEBPACK_IMPORTED_MODULE_39__pages_profile_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_40__pages_notifications_notifications_service__["a" /* NotificationsService */],
            __WEBPACK_IMPORTED_MODULE_41__pages_list_1_list_1_service__["a" /* List1Service */],
            __WEBPACK_IMPORTED_MODULE_42__pages_list_2_list_2_service__["a" /* List2Service */],
            __WEBPACK_IMPORTED_MODULE_43__pages_schedule_schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_76__providers_product_type_product_type_service__["a" /* ProductTypeService */],
            __WEBPACK_IMPORTED_MODULE_77__pages_product_detail_product_detail_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_79__pages_shop_shop_service__["a" /* ShopService */],
            __WEBPACK_IMPORTED_MODULE_44__pages_facebook_login_facebook_login_service__["a" /* FacebookLoginService */],
            __WEBPACK_IMPORTED_MODULE_45__pages_google_login_google_login_service__["a" /* GoogleLoginService */],
            __WEBPACK_IMPORTED_MODULE_46__pages_twitter_login_twitter_login_service__["a" /* TwitterLoginService */],
            __WEBPACK_IMPORTED_MODULE_47__pages_maps_maps_service__["a" /* GoogleMapsService */],
            __WEBPACK_IMPORTED_MODULE_73__providers_language_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_49__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_50__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_51__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_52__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_53__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_54__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_55__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_56__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_57__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_58__ionic_native_twitter_connect__["a" /* TwitterConnect */],
            __WEBPACK_IMPORTED_MODULE_59__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_60__ionic_native_app_rate__["a" /* AppRate */],
            __WEBPACK_IMPORTED_MODULE_61__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_62__ionic_native_crop__["a" /* Crop */],
            __WEBPACK_IMPORTED_MODULE_63__ionic_native_email_composer__["a" /* EmailComposer */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProductItemsModel */
/* unused harmony export ImgsModel */
/* unused harmony export ReviewsModel */
/* unused harmony export QASModel */
/* unused harmony export PomotionsModel */
/* unused harmony export StockvalueModel */
/* unused harmony export SizeDetailModel */
/* unused harmony export CategoryModel */
/* unused harmony export SubcategoryModel */
/* unused harmony export PaymentModel */
/* unused harmony export ShippingModel */
/* unused harmony export RelationProductsModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModel; });
var ProductItemsModel = (function () {
    function ProductItemsModel() {
    }
    return ProductItemsModel;
}());

var ImgsModel = (function () {
    function ImgsModel() {
    }
    return ImgsModel;
}());

var ReviewsModel = (function () {
    function ReviewsModel() {
    }
    return ReviewsModel;
}());

var QASModel = (function () {
    function QASModel() {
    }
    return QASModel;
}());

var PomotionsModel = (function () {
    function PomotionsModel() {
    }
    return PomotionsModel;
}());

var StockvalueModel = (function () {
    function StockvalueModel() {
    }
    return StockvalueModel;
}());

var SizeDetailModel = (function () {
    function SizeDetailModel() {
    }
    return SizeDetailModel;
}());

var CategoryModel = (function () {
    function CategoryModel() {
    }
    return CategoryModel;
}());

var SubcategoryModel = (function () {
    function SubcategoryModel() {
    }
    return SubcategoryModel;
}());

var PaymentModel = (function () {
    function PaymentModel() {
    }
    return PaymentModel;
}());

var ShippingModel = (function () {
    function ShippingModel() {
    }
    return ShippingModel;
}());

var RelationProductsModel = (function () {
    function RelationProductsModel() {
    }
    return RelationProductsModel;
}());

////////////////to use/////////////////////
var ProductModel = (function () {
    function ProductModel() {
    }
    return ProductModel;
}());

/////////////////////////////////////////// 
//# sourceMappingURL=product-detail.model.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ShopItemsModel */
/* unused harmony export ReviewsModel */
/* unused harmony export HistorylogsModel */
/* unused harmony export ProductsModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopModel; });
var ShopItemsModel = (function () {
    function ShopItemsModel() {
    }
    return ShopItemsModel;
}());

var ReviewsModel = (function () {
    function ReviewsModel() {
    }
    return ReviewsModel;
}());

var HistorylogsModel = (function () {
    function HistorylogsModel() {
    }
    return HistorylogsModel;
}());

var ProductsModel = (function () {
    function ProductsModel() {
    }
    return ProductsModel;
}());

////////////////to use/////////////////////
var ShopModel = (function () {
    function ShopModel() {
    }
    return ShopModel;
}());

/////////////////////////////////////////// 
//# sourceMappingURL=shop.model.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_navigation_tabs_navigation__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_forms_forms__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_layouts_layouts__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_functionalities_functionalities__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_product_type_product_type_model__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_product_type_product_type_service__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(platform, menu, app, splashScreen, statusBar, translate, toastCtrl, productTypeService) {
        var _this = this;
        this.menu = menu;
        this.app = app;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        this.productTypeService = productTypeService;
        // make WalkthroughPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */];
        // rootPage: any = FunctionalitiesPage;
        // rootPage: any = TabsNavigationPage;
        this.textDir = "ltr";
        this.mainMenu = '';
        this.iconTxt = [];
        this.productTypeList = new __WEBPACK_IMPORTED_MODULE_11__providers_product_type_product_type_model__["a" /* ProductTypesModel */]();
        translate.setDefaultLang('en');
        translate.use('en');
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.splashScreen.hide();
            _this.statusBar.styleDefault();
        });
        this.translate.onLangChange.subscribe(function (event) {
            if (event.lang == 'ar') {
                platform.setDir('rtl', true);
                platform.setDir('ltr', false);
            }
            else {
                platform.setDir('ltr', true);
                platform.setDir('rtl', false);
            }
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(_this.translate.get('HOME'), _this.translate.get('FORMS'), _this.translate.get('FUNCTIONALITIES'), _this.translate.get('LAYOUTS'), _this.translate.get('SETTINGS')).subscribe(function (data) {
                _this.pages = [
                    { title: data[0], icon: 'home', component: __WEBPACK_IMPORTED_MODULE_5__pages_tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */] },
                    { title: data[1], icon: 'create', component: __WEBPACK_IMPORTED_MODULE_6__pages_forms_forms__["a" /* FormsPage */] },
                    { title: data[2], icon: 'code', component: __WEBPACK_IMPORTED_MODULE_9__pages_functionalities_functionalities__["a" /* FunctionalitiesPage */] }
                ];
                _this.pushPages = [
                    { title: data[3], icon: 'grid', component: __WEBPACK_IMPORTED_MODULE_7__pages_layouts_layouts__["a" /* LayoutsPage */] },
                    { title: data[4], icon: 'settings', component: __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */] }
                ];
            });
        });
        this.getProductTypeList();
    }
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.pushPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
        this.app.getRootNav().push(page.component);
    };
    MyApp.prototype.toggleSubmenu = function (menuName) {
        this.iconTxt[this.iconTxtLastActive] = 'add';
        if (this.mainMenu) {
            this.iconTxtLastActive = menuName;
            this.iconTxt[menuName] = 'add';
            this.mainMenu = '';
        }
        else {
            this.iconTxtLastActive = menuName;
            this.iconTxt[menuName] = 'remove';
            this.mainMenu = menuName;
        }
    };
    MyApp.prototype.getProductTypeList = function () {
        var _this = this;
        this.productTypeService.getData().then(function (data) {
            _this.productTypeList = data;
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\app\app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n\n  <!-- <ion-content class="menu-content">\n\n    <ion-list class="menu-list">\n\n      <button ion-item detail-none *ngFor="let page of pages" (click)="openPage(page)">\n\n        <ion-icon *ngIf="page.icon" name="{{page.icon}}" item-left></ion-icon>\n\n        {{page.title}}\n\n      </button>\n\n      <button ion-item detail-none *ngFor="let page of pushPages" (click)="pushPage(page)">\n\n        <ion-icon *ngIf="page.icon" name="{{page.icon}}" item-left></ion-icon>\n\n        {{page.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content> -->\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>{{\'PRODUCTTYPE\' | translate}}</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list no-lines *ngFor="let ptl of productTypeList.producttypes">\n\n      <button ion-item (click)="toggleSubmenu(ptl.maintype)">\n\n      <ion-icon [name]="iconTxt[ptl.maintype] || \'add\'"></ion-icon>\n\n      {{ptl.maintype}}\n\n      </button>\n\n      <ion-list no-lines *ngIf="mainMenu == ptl.maintype" style="margin-left: 18px;">\n\n        <button ion-item *ngFor="let st of ptl.subtype">\n\n      {{st.name}}\n\n      </button>\n\n      </ion-list>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_12__providers_product_type_product_type_service__["a" /* ProductTypeService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsNavigationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listing_listing__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_1_list_1__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsNavigationPage = (function () {
    function TabsNavigationPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__listing_listing__["a" /* ListingPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__list_1_list_1__["a" /* List1Page */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__["a" /* NotificationsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */];
    }
    return TabsNavigationPage;
}());
TabsNavigationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tabs-navigation',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\tabs-navigation\tabs-navigation.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="{{\'HOME\' | translate}}" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="{{\'SEARCH\' | translate}}" tabIcon="search"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="{{\'CART\' | translate}}" tabIcon="cart" tabBadge="2" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="{{\'NOTIFICATIONS\' | translate}}" tabIcon="notifications" tabBadge="19" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="{{\'PROFILE\' | translate}}" tabIcon="person"></ion-tab>  \n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\tabs-navigation\tabs-navigation.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsNavigationPage);

//# sourceMappingURL=tabs-navigation.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FeedPostModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedModel; });
var FeedPostModel = (function () {
    function FeedPostModel() {
        this.likes = 0;
        this.comments = 0;
        this.liked = false;
    }
    return FeedPostModel;
}());

var FeedModel = (function () {
    function FeedModel() {
    }
    return FeedModel;
}());

//# sourceMappingURL=feed.model.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingModel; });
/* unused harmony export ListingItemModel */
/* unused harmony export PopularshopsItemModel */
var ListingModel = (function () {
    function ListingModel() {
    }
    return ListingModel;
}());

var ListingItemModel = (function () {
    function ListingItemModel() {
    }
    return ListingItemModel;
}());

var PopularshopsItemModel = (function () {
    function PopularshopsItemModel() {
    }
    return PopularshopsItemModel;
}());

//# sourceMappingURL=listing.model.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NotificationModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsModel; });
var NotificationModel = (function () {
    function NotificationModel() {
    }
    return NotificationModel;
}());

var NotificationsModel = (function () {
    function NotificationsModel() {
        this.today = [];
        this.yesterday = [];
    }
    return NotificationsModel;
}());

//# sourceMappingURL=notifications.model.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ListModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List1Model; });
var ListModel = (function () {
    function ListModel() {
    }
    return ListModel;
}());

var List1Model = (function () {
    function List1Model() {
    }
    return List1Model;
}());

//# sourceMappingURL=list-1.model.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameValidator; });
var UsernameValidator = (function () {
    function UsernameValidator() {
    }
    UsernameValidator.validUsername = function (fc) {
        if (fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc") {
            return {
                validUsername: true
            };
        }
        else {
            return null;
        }
    };
    return UsernameValidator;
}());

//# sourceMappingURL=username.validator.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidator; });
var PasswordValidator = (function () {
    function PasswordValidator() {
    }
    // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
    PasswordValidator.areEqual = function (formGroup) {
        var val;
        var valid = true;
        for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                var control = formGroup.controls[key];
                if (val === undefined) {
                    val = control.value;
                }
                else {
                    if (val !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        };
    };
    return PasswordValidator;
}());

//# sourceMappingURL=password.validator.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_google_libphonenumber__);

var PhoneValidator = (function () {
    function PhoneValidator() {
    }
    return PhoneValidator;
}());

// Inspired on: https://github.com/yuyang041060120/ng2-validation/blob/master/src/equal-to/validator.ts
PhoneValidator.validCountryPhone = function (countryControl) {
    var subscribe = false;
    return function (phoneControl) {
        if (!subscribe) {
            subscribe = true;
            countryControl.valueChanges.subscribe(function () {
                phoneControl.updateValueAndValidity();
            });
        }
        if (phoneControl.value !== "") {
            try {
                var phoneUtil = __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber___default.a.PhoneNumberUtil.getInstance();
                var phoneNumber = "" + phoneControl.value + "", region = countryControl.value.iso, number = phoneUtil.parse(phoneNumber, region), isValidNumber = phoneUtil.isValidNumber(number);
                if (isValidNumber) {
                    return null;
                }
            }
            catch (e) {
                // console.log(e);
                return {
                    validCountryPhone: true
                };
            }
            return {
                validCountryPhone: true
            };
        }
        else {
            return null;
        }
    };
};
//# sourceMappingURL=phone.validator.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Country; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_google_libphonenumber__);

var Country = (function () {
    function Country(iso, name) {
        this.iso = iso;
        this.name = name;
        var phoneUtil = __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber___default.a.PhoneNumberUtil.getInstance(), PNF = __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber___default.a.PhoneNumberFormat, PNT = __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber___default.a.PhoneNumberType, country_example_number = phoneUtil.getExampleNumberForType(this.iso, PNT.MOBILE), 
        // We need to define what kind of country phone number type we are going to use as a mask.
        // You can choose between many types including:
        //    - FIXED_LINE
        //    - MOBILE
        //    - For more types please refer to google libphonenumber repo (https://github.com/googlei18n/libphonenumber/blob/f9e9424769964ce1970c6ed2bd60b25b976dfe6f/javascript/i18n/phonenumbers/phonenumberutil.js#L913)
        example_number_formatted = phoneUtil.format(country_example_number, PNF.NATIONAL);
        // We need to define how are we going to format the phone number
        // You can choose between many formats including:
        //    - NATIONAL
        //    - INTERNATIONAL
        //    - E164
        //    - RFC3966
        this.sample_phone = example_number_formatted;
        this.code = "+" + country_example_number.getCountryCode();
        // Now let's transform the formatted example number into a valid text-mask
        // Inspired in text-mask example (https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#included-conformtomask)
        this.phone_mask = this.getMaskFromString(example_number_formatted);
    }
    Country.prototype.getMaskFromString = function (string) {
        var _string_chars = string.split(''), _digit_reg_exp = new RegExp(/\d/), _mask = _string_chars.map(function (char) {
            // Replace any digit with a digit RegExp
            return (_digit_reg_exp.test(char)) ? _digit_reg_exp : char;
        });
        return _mask;
    };
    return Country;
}());

//# sourceMappingURL=form-validations.model.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EventModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleModel; });
/* unused harmony export EventDate */
var EventModel = (function () {
    function EventModel() {
    }
    return EventModel;
}());

var ScheduleModel = (function () {
    function ScheduleModel() {
        this.today = [];
        this.upcoming = [];
    }
    return ScheduleModel;
}());

var EventDate = (function () {
    function EventDate() {
    }
    return EventDate;
}());

//# sourceMappingURL=schedule.model.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ListModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List2Model; });
var ListModel = (function () {
    function ListModel() {
    }
    return ListModel;
}());

var List2Model = (function () {
    function List2Model() {
    }
    return List2Model;
}());

//# sourceMappingURL=list-2.model.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsModel; });
/* unused harmony export MapPlace */
var MapsModel = (function () {
    function MapsModel() {
        this.map_options = {
            center: { lat: 40.785091, lng: -73.968285 },
            zoom: 13,
            disableDefaultUI: true
        };
        this.map_places = [];
        this.search_query = '';
        this.search_places_predictions = [];
        this.nearby_places = [];
        this.directions_origin = new MapPlace();
        this.using_geolocation = false;
    }
    // https://developers.google.com/maps/documentation/javascript/reference#Map
    MapsModel.prototype.init = function (map) {
        this.map = map;
        // https://developers.google.com/maps/documentation/javascript/reference#DirectionsRenderer
        this.directions_display = new google.maps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true,
            preserveViewport: true
        });
    };
    MapsModel.prototype.cleanMap = function () {
        // Empty nearby places array
        this.nearby_places = [];
        // To clear previous directions
        this.directions_display.setDirections({ routes: [] });
        // To remove all previous markers from the map
        this.map_places.forEach(function (place) {
            place.marker.setMap(null);
        });
        // Empty markers array
        this.map_places = [];
        this.using_geolocation = false;
    };
    MapsModel.prototype.addPlaceToMap = function (location, color) {
        if (color === void 0) { color = '#333333'; }
        var _map_place = new MapPlace();
        _map_place.location = location;
        _map_place.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: MapPlace.createIcon(color)
        });
        this.map_places.push(_map_place);
        return _map_place;
    };
    MapsModel.prototype.addNearbyPlace = function (place_result) {
        var _map_place = this.addPlaceToMap(place_result.geometry.location, '#666666');
        // This is an extra attribute for nearby places only
        _map_place.details = place_result;
        var getRandom = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        // Add a random image
        _map_place.details["image"] = "./assets/images/maps/place-" + getRandom(1, 9) + ".jpg";
        this.nearby_places.push(_map_place);
    };
    MapsModel.prototype.deselectPlaces = function () {
        this.nearby_places.forEach(function (place) {
            place.deselect();
        });
    };
    return MapsModel;
}());

var MapPlace = (function () {
    function MapPlace() {
        this.selected = false;
    }
    // https://developers.google.com/maps/documentation/javascript/reference#Symbol
    MapPlace.createIcon = function (color) {
        var _icon = {
            path: "M144 400c80 0 144 -60 144 -134c0 -104 -144 -282 -144 -282s-144 178 -144 282c0 74 64 134 144 134zM144 209c26 0 47 21 47 47s-21 47 -47 47s-47 -21 -47 -47s21 -47 47 -47z",
            fillColor: color,
            fillOpacity: .6,
            anchor: new google.maps.Point(0, 0),
            strokeWeight: 0,
            scale: 0.08,
            rotation: 180
        };
        return _icon;
    };
    MapPlace.prototype.setIcon = function (color) {
        this.marker.setIcon(MapPlace.createIcon(color));
    };
    MapPlace.prototype.deselect = function () {
        this.selected = false;
        this.setIcon('#666666');
    };
    MapPlace.prototype.select = function () {
        this.selected = true;
        this.setIcon('#ae75e7');
    };
    return MapPlace;
}());

//# sourceMappingURL=maps.model.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookUserModel; });
var FacebookUserModel = (function () {
    function FacebookUserModel() {
        this.friends = [];
        this.photos = [];
    }
    return FacebookUserModel;
}());

//# sourceMappingURL=facebook-user.model.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleUserModel; });
var GoogleUserModel = (function () {
    function GoogleUserModel() {
        this.friends = [];
        this.photos = [];
    }
    return GoogleUserModel;
}());

//# sourceMappingURL=google-user.model.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterUserModel; });
var TwitterUserModel = (function () {
    function TwitterUserModel() {
    }
    return TwitterUserModel;
}());

//# sourceMappingURL=twitter-user.model.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModel; });
var ContactModel = (function () {
    function ContactModel() {
        this.images = [];
        this.images = [
            './assets/images/maps/place-1.jpg',
            './assets/images/maps/place-2.jpg',
            './assets/images/maps/place-3.jpg',
            './assets/images/maps/place-4.jpg'
        ];
        this.name = "Railway Cafe";
        this.rating = 4;
        this.email = "contact@ionicthemes.com";
        this.phone = "555-555-555";
        this.website = "https://ionicthemes.com";
        this.address = "7644 sable st";
    }
    return ContactModel;
}());

//# sourceMappingURL=contact.model.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VideoModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlaylistModel; });
var VideoModel = (function () {
    function VideoModel(title, description, thumbnail, sources) {
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
        this.sources = sources;
    }
    return VideoModel;
}());

var VideoPlaylistModel = (function () {
    function VideoPlaylistModel() {
        this.video_playlist = [];
        var __video_1 = new VideoModel('Big Buck Bunny', 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain\'t no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.', './assets/images/video-playlist/big_buck_bunny.png', [
            {
                src: './assets/videos/big_buck_bunny.mp4',
                type: 'video/mp4'
            }
        ]);
        var __video_2 = new VideoModel('EARTH: Seen From ISS Expedition 28 & 29', 'Thanks to NASA and the crews of ISS for this wonderful video footage.', './assets/images/video-playlist/earth_seen_from_iss.png', [
            {
                src: "http://static.videogular.com/assets/videos/videogular.mp4",
                type: "video/mp4"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.ogg",
                type: "video/ogg"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.webm",
                type: "video/webm"
            }
        ]);
        var __video_3 = new VideoModel('Elephant Dream', 'Elephants Dream is the world\'s first open movie, made entirely with open source graphics software such as Blender, and with all production files freely available to use however you please', './assets/images/video-playlist/elephants_dream.png', [
            {
                src: './assets/videos/elephants_dream.mp4',
                type: 'video/mp4'
            }
        ]);
        this.video_playlist.push(__video_1);
        this.video_playlist.push(__video_2);
        this.video_playlist.push(__video_3);
        this.selected_video = this.video_playlist[0];
    }
    return VideoPlaylistModel;
}());

//# sourceMappingURL=video-playlist.model.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProductTypesItemsModel */
/* unused harmony export SubTypeItemsModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTypesModel; });
var ProductTypesItemsModel = (function () {
    function ProductTypesItemsModel() {
    }
    return ProductTypesItemsModel;
}());

var SubTypeItemsModel = (function () {
    function SubTypeItemsModel() {
    }
    return SubTypeItemsModel;
}());

////////////////to use/////////////////////
var ProductTypesModel = (function () {
    function ProductTypesModel() {
    }
    return ProductTypesModel;
}());

/////////////////////////////////////////// 
//# sourceMappingURL=product-type.model.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloadImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreloadImage = (function () {
    function PreloadImage(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
        this._img = new Image();
    }
    Object.defineProperty(PreloadImage.prototype, "src", {
        set: function (val) {
            this._src = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(val) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreloadImage.prototype, "ratio", {
        set: function (ratio) {
            this._ratio = ratio || null;
        },
        enumerable: true,
        configurable: true
    });
    PreloadImage.prototype.ngOnChanges = function (changes) {
        var ratio_height = (this._ratio.h / this._ratio.w * 100) + "%";
        // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'padding-bottom', ratio_height);
        this._update();
        // console.log("CHANGES preload-image", this._src);
        // console.log(changes['src'].isFirstChange());
    };
    PreloadImage.prototype._update = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(this.alt)) {
            this._img.alt = this.alt;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(this.title)) {
            this._img.title = this.title;
        }
        this._img.addEventListener('load', function () {
            _this._elementRef.nativeElement.appendChild(_this._img);
            _this._loaded(true);
        });
        this._img.src = this._src;
        this._loaded(false);
    };
    PreloadImage.prototype._loaded = function (isLoaded) {
        this._elementRef.nativeElement.classList[isLoaded ? 'add' : 'remove']('img-loaded');
    };
    return PreloadImage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PreloadImage.prototype, "alt", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PreloadImage.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PreloadImage.prototype, "src", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PreloadImage.prototype, "ratio", null);
PreloadImage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'preload-image',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\preload-image\preload-image.html"*/'<ion-spinner name="bubbles"></ion-spinner>\n\n<ng-content></ng-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\preload-image\preload-image.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], PreloadImage);

//# sourceMappingURL=preload-image.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackgroundImage = (function () {
    function BackgroundImage(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
    }
    Object.defineProperty(BackgroundImage.prototype, "src", {
        set: function (val) {
            this._src = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(val) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    BackgroundImage.prototype.ngOnChanges = function (changes) {
        this._update();
        // console.log("CHANGES background-image", this._src);
        // console.log(changes['src'].isFirstChange());
    };
    BackgroundImage.prototype._update = function () {
        var _this = this;
        var img = new Image();
        img.addEventListener('load', function () {
            _this._elementRef.nativeElement.style.backgroundImage = 'url(' + _this._src + ')';
            _this._loaded(true);
        });
        img.src = this._src;
        this._loaded(false);
    };
    BackgroundImage.prototype._loaded = function (isLoaded) {
        this._elementRef.nativeElement.classList[isLoaded ? 'add' : 'remove']('img-loaded');
    };
    return BackgroundImage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BackgroundImage.prototype, "class", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], BackgroundImage.prototype, "src", null);
BackgroundImage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'background-image',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\background-image\background-image.html"*/'<span class="bg-overlay"></span>\n\n<ion-spinner name="bubbles"></ion-spinner>\n\n<ng-content></ng-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\background-image\background-image.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], BackgroundImage);

//# sourceMappingURL=background-image.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowHideContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show_hide_input__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowHideContainer = (function () {
    function ShowHideContainer() {
        this.show = false;
    }
    ShowHideContainer.prototype.toggleShow = function () {
        this.show = !this.show;
        if (this.show) {
            this.input.changeType("text");
        }
        else {
            this.input.changeType("password");
        }
    };
    return ShowHideContainer;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_1__show_hide_input__["a" /* ShowHideInput */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__show_hide_input__["a" /* ShowHideInput */])
], ShowHideContainer.prototype, "input", void 0);
ShowHideContainer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'show-hide-container',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\show-hide-password\show-hide-password.html"*/'<ng-content></ng-content>\n\n<a class="type-toggle" (click)="toggleShow()">\n\n	<ion-icon class="show-option" [hidden]="show" name="eye"></ion-icon>\n\n	<ion-icon class="hide-option" [hidden]="!show" name="eye-off"></ion-icon>\n\n</a>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\show-hide-password\show-hide-password.html"*/,
        host: {
            'class': 'show-hide-password'
        }
    }),
    __metadata("design:paramtypes", [])
], ShowHideContainer);

//# sourceMappingURL=show-hide-container.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorRadio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorRadio = (function () {
    function ColorRadio(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ColorRadio.prototype.setColor = function (color) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
        this.renderer.setElementStyle(this.el.nativeElement, 'borderColor', color);
    };
    ColorRadio.prototype.ngOnInit = function () {
        console.log(this.color);
        this.setColor(this.color);
    };
    return ColorRadio;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('color-radio'),
    __metadata("design:type", String)
], ColorRadio.prototype, "color", void 0);
ColorRadio = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[color-radio]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], ColorRadio);

//# sourceMappingURL=color-radio.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () { };
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return Rating; }),
    multi: true
};
var Rating = (function () {
    function Rating() {
        this.max = 5;
        this.readOnly = false;
        this.propagateChange = noop;
    }
    Rating.prototype.ngOnInit = function () {
        var states = [];
        for (var i = 0; i < this.max; i++) {
            if (this.innerValue > i && this.innerValue < i + 1) {
                states[i] = 2;
            }
            else if (this.innerValue > i) {
                states[i] = 1;
            }
            else {
                states[i] = 0;
            }
        }
        this.range = states;
    };
    Object.defineProperty(Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (val) {
            if (val !== this.innerValue) {
                this.innerValue = val;
                this.propagateChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Rating.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    Rating.prototype.registerOnTouched = function () { };
    Rating.prototype.rate = function (amount) {
        if (!this.readOnly && amount >= 0 && amount <= this.range.length) {
            this.value = amount;
        }
    };
    return Rating;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Rating.prototype, "max", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('read-only'),
    __metadata("design:type", Object)
], Rating.prototype, "readOnly", void 0);
Rating = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rating',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\rating\rating.html"*/'<button class="rating-icon" ion-button icon-only round *ngFor="let r of range; let i = index" (click)="rate(i + 1)">\n\n	<ion-icon [name]="value === undefined ? (r === 1 ? \'star\' : (r === 2 ? \'star-half\' : \'star-outline\')) : (value > i ? (value < i+1 ? \'star-half\' : \'star\') : \'star-outline\')"></ion-icon>\n\n</button>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\rating\rating.html"*/,
        providers: [RATING_CONTROL_VALUE_ACCESSOR]
    })
], Rating);

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlayerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_videogular2_core__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_videogular2_controls__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_videogular2_overlay_play__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_buffering__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_videogular2_buffering__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Video stuff




var VideoPlayerModule = (function () {
    function VideoPlayerModule() {
    }
    return VideoPlayerModule;
}());
VideoPlayerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_1_videogular2_core__["VgCoreModule"],
            __WEBPACK_IMPORTED_MODULE_2_videogular2_controls__["VgControlsModule"],
            __WEBPACK_IMPORTED_MODULE_3_videogular2_overlay_play__["VgOverlayPlayModule"],
            __WEBPACK_IMPORTED_MODULE_4_videogular2_buffering__["VgBufferingModule"]
        ]
    })
], VideoPlayerModule);

//# sourceMappingURL=video-player.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_text_mask__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ValidatorsModule = (function () {
    function ValidatorsModule() {
    }
    return ValidatorsModule;
}());
ValidatorsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_1_angular2_text_mask__["TextMaskModule"]
        ]
    })
], ValidatorsModule);

//# sourceMappingURL=validators.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataScrollXComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_x_model__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_product_detail_product_detail__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataScrollXComponent = (function () {
    function DataScrollXComponent(nav) {
        this.nav = nav;
    }
    DataScrollXComponent.prototype.openPageProductDetail = function (data) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_product_detail_product_detail__["a" /* ProductDetailPage */]);
    };
    return DataScrollXComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__list_x_model__["a" /* DataListX */])
], DataScrollXComponent.prototype, "dataListX", void 0);
DataScrollXComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'data-scroll-x',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\data-scroll-x\data-scroll-x.html"*/'<ion-scroll scrollX="true" class="horizontal-categories">\n\n  <ion-row class="categories-row">\n\n      <ion-col width-30 class="horizontal-item" *ngFor="let data of dataListX" (click)="openPageProductDetail(data)">\n\n          <preload-image [ratio]="{w:1, h:1}" [src]="data.imgUrl"></preload-image>\n\n          <div class="product-box">\n\n              <p class="txt-centr">{{data.name}}</p>\n\n              <p class="txt-centr2">{{data.price | number}} ฿</p>\n\n          </div>\n\n      </ion-col>\n\n  </ion-row>\n\n</ion-scroll>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\data-scroll-x\data-scroll-x.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */]])
], DataScrollXComponent);

//# sourceMappingURL=data-scroll-x.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataListX; });
var DataListX = (function () {
    function DataListX() {
    }
    return DataListX;
}());

//# sourceMappingURL=list-x.model.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_grid_model__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_shop_shop__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataGridComponent = (function () {
    function DataGridComponent(nav) {
        this.nav = nav;
    }
    DataGridComponent.prototype.openPageShop = function (data) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_shop_shop__["a" /* ShopPage */]);
    };
    return DataGridComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__data_grid_model__["a" /* DataGrids */])
], DataGridComponent.prototype, "dataGrids", void 0);
DataGridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'data-grid',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\data-grid\data-grid.html"*/'<ion-row class="grid-categories">\n\n  <ion-col width-50 class="category-item" *ngFor="let data of dataGrids" (click)="openPageShop(data)">\n\n    <background-image tappable class="category-heading" [src]="data.imgUrl">\n\n      <ion-row class="heading-row">\n\n        <ion-col no-padding width-100>\n\n          <h2 class="category-title">{{data.title}}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </background-image>\n\n  </ion-col>\n\n</ion-row>'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\data-grid\data-grid.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */]])
], DataGridComponent);

//# sourceMappingURL=data-grid.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataGrids; });
var DataGrids = (function () {
    function DataGrids() {
    }
    return DataGrids;
}());

//# sourceMappingURL=data-grid.model.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topbar_model__ = __webpack_require__(706);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopbarComponent = (function () {
    function TopbarComponent() {
    }
    return TopbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__topbar_model__["a" /* DataTopBar */])
], TopbarComponent.prototype, "dataTopBar", void 0);
TopbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'topbar',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\topbar\topbar.html"*/'<ion-slides class="contact-slides" pager="true">\n\n  <ion-slide class="contact-slide" *ngFor="let data of dataTopBar.img">\n\n    <background-image class="slide-image" [src]="data.url"></background-image>\n\n  </ion-slide>\n\n</ion-slides>\n\n<ion-row class="contact-details-row" wrap>\n\n  <ion-col no-padding width-65>\n\n    <h2 class="contact-name">{{dataTopBar.name}}</h2>\n\n  </ion-col>\n\n  <ion-col no-padding width-35 class="rating-col">\n\n    xxx\n\n  </ion-col>\n\n  <ion-col no-padding width-100>\n\n    <p class="contact-description">\n\n      {{dataTopBar.detail}}\n\n    </p>\n\n  </ion-col>\n\n</ion-row>'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\topbar\topbar.html"*/
    }),
    __metadata("design:paramtypes", [])
], TopbarComponent);

//# sourceMappingURL=topbar.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTopBar; });
var DataTopBar = (function () {
    function DataTopBar() {
    }
    return DataTopBar;
}());

//# sourceMappingURL=topbar.model.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CheckoutPage = (function () {
    function CheckoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
    };
    return CheckoutPage;
}());
CheckoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-checkout',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\checkout\checkout.html"*/'<!--\n\n  Generated template for the CheckoutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>checkout</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\checkout\checkout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], CheckoutPage);

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ShippingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ShippingComponent = (function () {
    function ShippingComponent() {
        console.log('Hello ShippingComponent Component');
        this.text = 'Hello World';
    }
    return ShippingComponent;
}());
ShippingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shipping',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\shipping\shipping.html"*/'<!-- Generated template for the ShippingComponent component -->\n\n<div>\n\n  {{text}}\n\n</div>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\shipping\shipping.html"*/
    }),
    __metadata("design:paramtypes", [])
], ShippingComponent);

//# sourceMappingURL=shipping.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_list_model__ = __webpack_require__(717);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartListComponent = (function () {
    function CartListComponent() {
    }
    CartListComponent.prototype.decrease = function () {
    };
    CartListComponent.prototype.increase = function () {
    };
    CartListComponent.prototype.deleteItem = function () {
    };
    return CartListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__cart_list_model__["a" /* DataCartList */])
], CartListComponent.prototype, "dataCartList", void 0);
CartListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cart-list',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\cart-list\cart-list.html"*/'<ion-item class="notification-item" *ngFor="let data of dataCartList">\n\n  <ion-avatar item-left>\n\n    <preload-image class="user-image" [ratio]="{w:1, h:1}" [src]="data.imgUrl"></preload-image>\n\n  </ion-avatar>\n\n  <h2 class="item-title">{{data.name}}</h2>\n\n  <p class="item-description">{{data.detail}}</p>\n\n  <p class="item-description">{{data.price}} บาท</p>\n\n  <p>\n\n    <button ion-button icon-only color="danger" class="circle-btn" (click)="decrease()">\n\n    <ion-icon name="remove"></ion-icon>\n\n  </button>\n\n    <span class="tb">{{data.quantity}}</span>\n\n    <button ion-button icon-only color="btn" class="circle-btn" (click)="increase()">\n\n    <ion-icon name="add"></ion-icon>\n\n  </button>\n\n  \n\n  <button ion-button icon-only color="dark" class="circle-btn" (click)="deleteItem()">\n\n    <ion-icon name="trash"></ion-icon>\n\n  </button>\n\n  </p>\n\n</ion-item>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\cart-list\cart-list.html"*/
    }),
    __metadata("design:paramtypes", [])
], CartListComponent);

//# sourceMappingURL=cart-list.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the PaymentComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var PaymentComponent = (function () {
    function PaymentComponent() {
        console.log('Hello PaymentComponent Component');
        this.text = 'Hello World';
    }
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'payment',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\payment\payment.html"*/'<!-- Generated template for the PaymentComponent component -->\n\n<div>\n\n  {{text}}\n\n</div>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\payment\payment.html"*/
    }),
    __metadata("design:paramtypes", [])
], PaymentComponent);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ConfirmComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ConfirmComponent = (function () {
    function ConfirmComponent() {
        console.log('Hello ConfirmComponent Component');
        this.text = 'Hello World';
    }
    return ConfirmComponent;
}());
ConfirmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'confirm',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\confirm\confirm.html"*/'<!-- Generated template for the ConfirmComponent component -->\n\n<div>\n\n  {{text}}\n\n</div>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\confirm\confirm.html"*/
    }),
    __metadata("design:paramtypes", [])
], ConfirmComponent);

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListShopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ListShopComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ListShopComponent = (function () {
    function ListShopComponent() {
        console.log('Hello ListShopComponent Component');
        this.text = 'Hello World';
    }
    return ListShopComponent;
}());
ListShopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'list-shop',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\list-shop\list-shop.html"*/'<!-- Generated template for the ListShopComponent component -->\n\n<div>\n\n  {{text}}\n\n</div>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\list-shop\list-shop.html"*/
    }),
    __metadata("design:paramtypes", [])
], ListShopComponent);

//# sourceMappingURL=list-shop.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ListProductComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ListProductComponent = (function () {
    function ListProductComponent() {
        console.log('Hello ListProductComponent Component');
        this.text = 'Hello World';
    }
    return ListProductComponent;
}());
ListProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'list-product',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\list-product\list-product.html"*/'<!-- Generated template for the ListProductComponent component -->\n\n<div>\n\n  {{text}}\n\n</div>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\components\list-product\list-product.html"*/
    }),
    __metadata("design:paramtypes", [])
], ListProductComponent);

//# sourceMappingURL=list-product.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataCartList; });
var DataCartList = (function () {
    function DataCartList() {
    }
    return DataCartList;
}());

//# sourceMappingURL=cart-list.model.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_of_service_terms_of_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__walkthrough_walkthrough__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_model__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_language_language_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_rate__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_image_picker__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_crop__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var SettingsPage = (function () {
    function SettingsPage(app, nav, modal, loadingCtrl, translate, languageService, profileService, appRate, imagePicker, cropService, platform) {
        this.app = app;
        this.nav = nav;
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.languageService = languageService;
        this.profileService = profileService;
        this.appRate = appRate;
        this.imagePicker = imagePicker;
        this.cropService = cropService;
        this.platform = platform;
        // make WalkthroughPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__walkthrough_walkthrough__["a" /* WalkthroughPage */];
        this.profile = new __WEBPACK_IMPORTED_MODULE_7__profile_profile_model__["a" /* ProfileModel */]();
        this.loading = this.loadingCtrl.create();
        this.languages = this.languageService.getLanguages();
        this.settingsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            location: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            currency: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            weather: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            notifications: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            language: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]()
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.profileService.getData().then(function (data) {
            _this.profile.user = data.user;
            // setValue: With setValue, you assign every form control value at once by passing in a data object whose properties exactly match the form model behind the FormGroup.
            // patchValue: With patchValue, you can assign values to specific controls in a FormGroup by supplying an object of key/value pairs for just the controls of interest.
            // More info: https://angular.io/docs/ts/latest/guide/reactive-forms.html#!#populate-the-form-model-with-_setvalue_-and-_patchvalue_
            _this.settingsForm.patchValue({
                name: data.user.name,
                location: data.user.location,
                description: data.user.about,
                currency: 'dollar',
                weather: 'fahrenheit',
                notifications: true,
                language: _this.languages[0]
            });
            _this.loading.dismiss();
            _this.settingsForm.get('language').valueChanges.subscribe(function (lang) {
                _this.setLanguage(lang);
            });
        });
    };
    SettingsPage.prototype.logout = function () {
        var _this = this;
        // navigate to the new page if it is not the current page
        this.app.getRootNav().popToRoot();
        setTimeout(function () {
            _this.app.getRootNav().push(_this.rootPage);
        }, 100);
    };
    SettingsPage.prototype.showTermsModal = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__terms_of_service_terms_of_service__["a" /* TermsOfServicePage */]);
        modal.present();
    };
    SettingsPage.prototype.showPrivacyModal = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */]);
        modal.present();
    };
    SettingsPage.prototype.setLanguage = function (lang) {
        var language_to_set = this.translate.getDefaultLang();
        if (lang) {
            language_to_set = lang.code;
        }
        this.translate.setDefaultLang(language_to_set);
        this.translate.use(language_to_set);
    };
    SettingsPage.prototype.rateApp = function () {
        this.appRate.preferences.storeAppURL = {
            ios: '<my_app_id>',
            android: 'market://details?id=<package_name>',
            windows: 'ms-windows-store://review/?ProductId=<Store_ID>'
        };
        this.appRate.promptForRating(true);
    };
    SettingsPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission().then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({ maximumImagesCount: 1 }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.cropService.crop(results[i], { quality: 75 }).then(function (newImage) {
                            _this.profileService.setUserImage(newImage);
                            _this.profile.user.image = newImage;
                        }, function (error) { return console.error("Error cropping image", error); });
                    }
                }, function (err) { return console.log(err); });
            }
        });
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'settings-page',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ \'PROFILE\' | translate }}</ion-title>\n\n    <ion-buttons end [hidden]="!settingsForm.dirty">\n\n      <button ion-button>\n\n        {{ \'SAVE\' | translate }}\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="settings-content">\n\n  <div class="user-image-content">\n\n    <ion-row no-padding class="user-image-row">\n\n      <ion-col no-padding width-40>\n\n        <preload-image class="user-image" [ratio]="{w:1, h:1}" [src]="profile.user.image" alt="this is the image" title="IMAGE!"></preload-image>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row no-padding class="user-image-row">\n\n      <ion-col no-padding width-60>\n\n        <button class="image-action-button" ion-button outline block small (click)="openImagePicker()">{{ \'CHANGE_PROFILE_PICTURE\' | translate}}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <form [formGroup]="settingsForm" class="settings-form">\n\n    <ion-list class="user-data-content">\n\n      <ion-item>\n\n        <ion-label stacked>{{ \'NAME\' | translate }}</ion-label>\n\n        <ion-input type="text" formControlName="name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>{{ \'LOCATION\' | translate }}</ion-label>\n\n        <ion-input type="text" formControlName="location"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>{{ \'DESCRIPTION\' | translate }}</ion-label>\n\n        <ion-textarea formControlName="description" rows="5" placeholder="Your description here..."></ion-textarea>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-row class="user-preferences-row">\n\n      <span class="radio-tags-label">{{\'CURRENCY\' | translate}}</span>\n\n      <ion-list class="radio-tags" radio-group formControlName="currency">\n\n        <ion-item class="radio-tag">\n\n          <ion-label>&#36;</ion-label>\n\n          <ion-radio value="dollar"></ion-radio>\n\n        </ion-item>\n\n        <ion-item class="radio-tag">\n\n          <ion-label>\n\n            <span>&euro;</span>\n\n          </ion-label>\n\n          <ion-radio value="euro"></ion-radio>\n\n        </ion-item>\n\n        <ion-item class="radio-tag">\n\n          <ion-label>\n\n            <span>&pound;</span>\n\n          </ion-label>\n\n          <ion-radio value="pound"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-row>\n\n\n\n    <ion-row class="user-preferences-row">\n\n      <span class="radio-tags-label">{{\'WEATHER\' | translate}}</span>\n\n      <ion-list class="radio-tags" radio-group formControlName="weather">\n\n        <ion-item class="radio-tag">\n\n          <ion-label>&deg;C</ion-label>\n\n          <ion-radio value="celsius"></ion-radio>\n\n        </ion-item>\n\n        <ion-item class="radio-tag">\n\n          <ion-label>\n\n            <span>&deg;F</span>\n\n          </ion-label>\n\n          <ion-radio value="fahrenheit"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-row>\n\n\n\n    <ion-list class="user-data-content">\n\n    <!-- <ion-list class="user-preferences-row"> -->\n\n      <ion-item>\n\n        <ion-label>{{ \'SELECT_LANGUAGE\' | translate }}</ion-label>\n\n        <ion-select formControlName="language" cancelText="{{ \'CANCEL\' | translate }}" okText="{{ \'OK\' | translate }}">\n\n          <ion-option *ngFor="let language of languages" [value]="language">{{ language.name }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list class="switchers-list">\n\n      <ion-item class="switcher-item">\n\n        <ion-label>{{\'NOTIFICATIONS\' | translate}}</ion-label>\n\n        <ion-toggle formControlName="notifications"></ion-toggle>\n\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n\n\n  <button class="alt-button rate-app-button" ion-button full (click)="rateApp()">{{\'RATE_APP\' | translate}}</button>\n\n\n\n  <button class="alt-button" ion-button full (click)="showPrivacyModal()">{{\'PRIVACY_POLICY\' | translate}}</button>\n\n\n\n  <button class="alt-button" ion-button full (click)="showTermsModal()">{{\'TERMS_OF_USE\' | translate }}</button>\n\n\n\n  <button class="alt-button logout-button" ion-button full icon-left (click)="logout()">\n\n    <ion-icon name="log-out"></ion-icon>\n\n    {{\'LOG_OUT\' | translate }}\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_10__providers_language_language_service__["a" /* LanguageService */],
        __WEBPACK_IMPORTED_MODULE_8__profile_profile_service__["a" /* ProfileService */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_rate__["a" /* AppRate */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_image_picker__["a" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_crop__["a" /* Crop */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FacebookLoginService = (function () {
    function FacebookLoginService(http, nativeStorage, fb) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.fb = fb;
        this.FB_APP_ID = 826720427470540;
        this.fb.browserInit(this.FB_APP_ID, "v2.8");
    }
    FacebookLoginService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //["public_profile"] is the array of permissions, you can add more if you need
            _this.fb.login(["public_profile"]).then(function (response) {
                //Getting name and gender properties
                _this.fb.api("/me?fields=name,gender", [])
                    .then(function (user) {
                    //now we have the users info, let's save it in the NativeStorage
                    _this.setFacebookUser(user)
                        .then(function (res) {
                        resolve(res);
                    });
                });
            }, function (err) {
                reject(err);
            });
        });
    };
    FacebookLoginService.prototype.doFacebookLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fb.logout()
                .then(function (res) {
                //user logged out so we will remove him from the NativeStorage
                _this.nativeStorage.remove('facebook_user');
                resolve();
            }, function (err) {
                reject();
            });
        });
    };
    FacebookLoginService.prototype.getFacebookUser = function () {
        return this.nativeStorage.getItem('facebook_user');
    };
    FacebookLoginService.prototype.setFacebookUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getFriendsFakeData()
                .then(function (data) {
                resolve(_this.nativeStorage.setItem('facebook_user', {
                    userId: user.id,
                    name: user.name,
                    gender: user.gender,
                    image: "https://graph.facebook.com/" + user.id + "/picture?type=large",
                    friends: data.friends,
                    photos: data.photos
                }));
            });
        });
    };
    FacebookLoginService.prototype.getFriendsFakeData = function () {
        return this.http.get('./assets/example_data/social_integrations.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FacebookLoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return FacebookLoginService;
}());
FacebookLoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */]])
], FacebookLoginService);

//# sourceMappingURL=facebook-login.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GoogleLoginService = (function () {
    function GoogleLoginService(http, nativeStorage, googlePlus) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.googlePlus = googlePlus;
        this.webClientId = "1092390853283-i98feg7fb1dlsm92kkcbim62855pepi8.apps.googleusercontent.com";
    }
    GoogleLoginService.prototype.trySilentLogin = function () {
        var _this = this;
        //checks if user is already signed in to the app and sign them in silently if they are.
        return new Promise(function (resolve, reject) {
            _this.googlePlus.trySilentLogin({
                'scopes': '',
                'webClientId': _this.webClientId,
                'offline': true
            })
                .then(function (user) {
                _this.setGoogleUser(user)
                    .then(function (res) {
                    resolve(res);
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    GoogleLoginService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.googlePlus.login({
                'scopes': '',
                'webClientId': _this.webClientId,
                'offline': true
            })
                .then(function (user) {
                _this.setGoogleUser(user)
                    .then(function (res) {
                    resolve(res);
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    GoogleLoginService.prototype.doGoogleLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.googlePlus.logout()
                .then(function (response) {
                //user logged out so we will remove him from the NativeStorage
                _this.nativeStorage.remove('google_user');
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    GoogleLoginService.prototype.getGoogleUser = function () {
        return this.nativeStorage.getItem('google_user');
    };
    GoogleLoginService.prototype.setGoogleUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getFriendsFakeData()
                .then(function (data) {
                resolve(_this.nativeStorage.setItem('google_user', {
                    userId: user.userId,
                    name: user.displayName,
                    email: user.email,
                    image: user.imageUrl,
                    friends: data.friends,
                    photos: data.photos
                }));
            });
        });
    };
    GoogleLoginService.prototype.getFriendsFakeData = function () {
        return this.http.get('./assets/example_data/social_integrations.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GoogleLoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return GoogleLoginService;
}());
GoogleLoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */]])
], GoogleLoginService);

//# sourceMappingURL=google-login.service.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_twitter_connect__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TwitterLoginService = (function () {
    function TwitterLoginService(http, nativeStorage, twitter) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.twitter = twitter;
    }
    TwitterLoginService.prototype.doTwitterLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.twitter.login().then(function (resp) {
                //Getting user data
                _this.twitter.showUser().then(function (user) {
                    //now we have the users info, let's save it in the NativeStorage
                    _this.setTwitterUser(user).then(function (res) {
                        resolve(res);
                    });
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    TwitterLoginService.prototype.doTwitterLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.twitter.logout().then(function (res) {
                //user logged out so we will remove him from the NativeStorage
                _this.nativeStorage.remove('twitter_user');
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    TwitterLoginService.prototype.getTwitterUser = function () {
        return this.nativeStorage.getItem('twitter_user');
    };
    TwitterLoginService.prototype.setTwitterUser = function (user) {
        var _this = this;
        console.log(user);
        return new Promise(function (resolve, reject) {
            resolve(_this.nativeStorage.setItem('twitter_user', {
                name: user.name,
                image: (user.profile_image_url).replace("_normal", ""),
                userId: user.id_str,
                following: user.friends_count,
                followers: user.followers_count,
                location: user.location,
                description: user.description,
                screenName: user.screen_name
            }));
        });
    };
    TwitterLoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return TwitterLoginService;
}());
TwitterLoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_twitter_connect__["a" /* TwitterConnect */]])
], TwitterLoginService);

//# sourceMappingURL=twitter-login.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail_model__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_detail_service__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailPage = (function () {
    function ProductDetailPage(navCtrl, navParams, productService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.productDetail = new __WEBPACK_IMPORTED_MODULE_2__product_detail_model__["a" /* ProductModel */]();
        this.productData = {};
    }
    ProductDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.productService.getData().then(function (data) {
            _this.productDetail = data;
            _this.productData = _this.productDetail.product;
        });
    };
    return ProductDetailPage;
}());
ProductDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-product-detail',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\product-detail\product-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Product Detail</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="contact-card-content">\n\n  <topbar [dataTopBar]="productData"></topbar>\n\n\n\n  <ion-list class="details-list">\n\n    <ion-item class="detail-item">\n\n      <ion-avatar item-left>\n\n        <ion-icon name="ios-cash-outline"></ion-icon>\n\n      </ion-avatar>\n\n      <span class="detail-text">Price {{productData.unitprice | number}} ฿</span>\n\n\n\n    </ion-item>\n\n    <ion-item class="detail-item">\n\n      <ion-avatar item-left>\n\n        <ion-icon name="ios-cube-outline"></ion-icon>\n\n      </ion-avatar>\n\n      <span class="detail-text">{{productData.name}}</span>\n\n      <span class="detail-text">{{productData.detail}}</span>\n\n    </ion-item>\n\n    <ion-item class="detail-item">\n\n\n\n      <h3 class="categories-title-pomotion">\n\n        <ion-icon name="md-pricetags"></ion-icon> {{\' Promotion\' | translate}}</h3>\n\n      <span class="detail-text">เมือซื้อเสื้อยีนส์ 1 แถม กางเกงยีนส์ขาสั้น 1 ตัว</span>\n\n    </ion-item>\n\n    <h4 class="categories-title">Select Size</h4>\n\n    <ion-list class="radio-tags" radio-group>\n\n      <ion-item class="radio-tag">\n\n        <ion-label>32</ion-label>\n\n        <ion-radio value="s"></ion-radio>\n\n      </ion-item>\n\n      <ion-item class="radio-tag">\n\n        <ion-label>\n\n          <span>33</span>\n\n        </ion-label>\n\n        <ion-radio value="m"></ion-radio>\n\n      </ion-item>\n\n      <ion-item class="radio-tag">\n\n        <ion-label>\n\n          <span>34</span>\n\n        </ion-label>\n\n        <ion-radio value="l"></ion-radio>\n\n      </ion-item>\n\n      <ion-item class="radio-tag">\n\n        <ion-label>\n\n          <span>35</span>\n\n        </ion-label>\n\n        <ion-radio value="xl"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n  </ion-list>\n\n  <h4 class="categories-title">Relation products</h4>\n\n  <data-scroll-x [dataListX]="productData.relationProducts"></data-scroll-x>  \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="btn">\n\n    <div style="text-align: center;">\n\n      <ion-buttons>\n\n        <button ion-button icon-left (click)="goToSchedulePage()">\n\n        <ion-icon name="cart"></ion-icon>Add to Cart\n\n      </button>\n\n      </ion-buttons>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\product-detail\product-detail.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__product_detail_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__product_detail_service__["a" /* ProductService */]) === "function" && _c || Object])
], ProductDetailPage);

var _a, _b, _c;
//# sourceMappingURL=product-detail.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_model__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shop_service__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShopPage = (function () {
    function ShopPage(navCtrl, navParams, shopService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shopService = shopService;
        this.shopDetail = new __WEBPACK_IMPORTED_MODULE_2__shop_model__["a" /* ShopModel */]();
        this.shop = {};
        this.map = {};
        this.shopCover = {};
    }
    ShopPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.shopService.getData().then(function (data) {
            _this.shopDetail = data;
            _this.shop = _this.shopDetail.shop;
            _this.shopCover = _this.shop.coverimg;
            _this.map = _this.shop.map;
        });
    };
    return ShopPage;
}());
ShopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-shop',template:/*ion-inline-start:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\shop\shop.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Shop Detail</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="contact-card-content">\n\n  <topbar [dataTopBar]="shop"></topbar>\n\n  \n\n  <div class="button-bar">\n\n    <button ion-button primary>\n\n    <ion-icon name="call"></ion-icon>\n\n  </button>\n\n    <button ion-button primary (click)="sendMail()">\n\n    <ion-icon name="mail"></ion-icon>\n\n  </button>\n\n  </div>\n\n  <preload-image [ratio]="{w:4, h:2}" src="https://maps.googleapis.com/maps/api/staticmap?center={{map.lat}},{{map.long}}&zoom=15&size=400x300&scale=2&markers=icon:https://s3-us-west-2.amazonaws.com/ionicthemes-apps-assets/ion2FullApp/pin.min.png|{{map.lat}},{{map.long}}"\n\n    alt="location map" title="shop name - shop detail"></preload-image>\n\n  <ion-list class="details-list">\n\n    <ion-item class="detail-item">\n\n      <ion-avatar item-left>\n\n        <ion-icon name="call"></ion-icon>\n\n      </ion-avatar>\n\n      <span class="detail-text">{{shop.tel}}</span>\n\n    </ion-item>\n\n    <ion-item class="detail-item">\n\n      <ion-avatar item-left>\n\n        <ion-icon name="mail"></ion-icon>\n\n      </ion-avatar>\n\n      <span class="detail-text">{{shop.email}}</span>\n\n    </ion-item>\n\n  </ion-list>\n\n  <h4 class="categories-title">{{\'สินค้า\'}} <span class="see-all">see all</span></h4>\n\n  <data-scroll-x [dataListX]="shop.products"></data-scroll-x>  \n\n</ion-content>'/*ion-inline-end:"C:\Users\Hallo\Desktop\mobileGreentage\ecommerce\src\pages\shop\shop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__shop_service__["a" /* ShopService */]])
], ShopPage);

//# sourceMappingURL=shop.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map