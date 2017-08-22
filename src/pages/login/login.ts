import { window } from 'rxjs/operator/window';
import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

import { FacebookLoginService } from '../facebook-login/facebook-login.service';
import { GoogleLoginService } from '../google-login/google-login.service';
import { TwitterLoginService } from '../twitter-login/twitter-login.service';

import { UserModel } from '../login/login.model';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: FormGroup;
  main_page: { component: any };
  loading: any;
  datauser: UserModel = new UserModel;
  datausers: any = {};


  constructor(
    public nav: NavController,
    public facebookLoginService: FacebookLoginService,
    public googleLoginService: GoogleLoginService,
    public twitterLoginService: TwitterLoginService,
    public loadingCtrl: LoadingController,
    public loginService: LoginService
  ) {
    this.main_page = { component: TabsNavigationPage };

    this.login = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  doLogin() {
    this.loading = this.loadingCtrl.create();
    let userdata = { "username": this.login.value.username, "password": this.login.value.password };
    // console.log(userdata);

    // LOGIN with route api
    this.loginService.logingin(userdata).then((user) => {
      this.loading.dismiss();
      // console.log("user : " + user);
      localStorage.setItem('user', JSON.stringify(user));
      this.nav.setRoot(this.main_page.component);
    }, (error) => {
      // let er = JSON.parse(error);
      this.loading.dismiss();
      console.error(error);
    });

    //   } else {
    //   this.datauser = user;
    //   if (this.login.value.email == this.datauser.email && this.login.value.password == this.datauser.password) {

    //     this.loading.dismiss();
    //     alert("username or password is not correct");
    //   }



    // this.nav.setRoot(this.main_page.component);
  }

  doFacebookLogin() {
    this.loading = this.loadingCtrl.create();

    // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
    // let this = this;

    this.facebookLoginService.getFacebookUser()
      .then((data) => {
        // user is previously logged with FB and we have his data we will let him access the app
        this.nav.setRoot(this.main_page.component);
      }, (error) => {
        //we don't have the user data so we will ask him to log in
        this.facebookLoginService.doFacebookLogin()
          .then((res) => {
            this.loading.dismiss();
            this.nav.setRoot(this.main_page.component);
          }, (err) => {
            console.log("Facebook Login error", err);
          });
      });
  }

  doGoogleLogin() {
    this.loading = this.loadingCtrl.create();

    // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app

    this.googleLoginService.trySilentLogin()
      .then((data) => {
        // user is previously logged with Google and we have his data we will let him access the app
        this.nav.setRoot(this.main_page.component);
      }, (error) => {
        //we don't have the user data so we will ask him to log in
        this.googleLoginService.doGoogleLogin()
          .then((res) => {
            this.loading.dismiss();
            this.nav.setRoot(this.main_page.component);
          }, (err) => {
            console.log("Google Login error", err);
          });
      });
  }

  doTwitterLogin() {
    this.loading = this.loadingCtrl.create();

    // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app

    this.twitterLoginService.getTwitterUser()
      .then((data) => {
        // user is previously logged with FB and we have his data we will let him access the app
        this.nav.setRoot(this.main_page.component);
      }, (error) => {
        //we don't have the user data so we will ask him to log in
        this.twitterLoginService.doTwitterLogin()
          .then((res) => {
            this.loading.dismiss();
            this.nav.setRoot(this.main_page.component);
          }, (err) => {
            console.log("Twitter Login error", err);
          });
      });
  }

  goToSignup() {
    this.nav.push(SignupPage);
  }

  goToForgotPassword() {
    this.nav.push(ForgotPasswordPage);
  }

}
