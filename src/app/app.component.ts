import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App, ToastController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Observable } from 'rxjs/Observable';

import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { FormsPage } from '../pages/forms/forms';
import { LayoutsPage } from '../pages/layouts/layouts';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { SettingsPage } from '../pages/settings/settings';
import { FunctionalitiesPage } from '../pages/functionalities/functionalities';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ProductTypesModel } from '../providers/product-type/product-type.model';
import { ProductTypeService } from '../providers/product-type/product-type.service';

import { LoginPage } from '../pages/login/login';
import { CartService } from "../pages/cart/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  // make WalkthroughPage the root (or first) page
  // rootPage: any = LoginPage;
  // rootPage: any = FunctionalitiesPage;
  rootPage: any = TabsNavigationPage;
  textDir: string = "ltr";

  pages: Array<{ title: any, icon: string, component: any }>;
  pushPages: Array<{ title: any, icon: string, component: any }>;
  private mainMenu: string = '';
  private iconTxtLastActive: string;
  private iconTxt: Array<any> = [];
  private productTypeList: ProductTypesModel = new ProductTypesModel();

  constructor(
    platform: Platform,
    public menu: MenuController,
    public app: App,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public translate: TranslateService,
    public toastCtrl: ToastController,
    public productTypeService: ProductTypeService,
    public cartService: CartService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();
      this.statusBar.styleDefault();
    });

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'ar') {
        platform.setDir('rtl', true);
        platform.setDir('ltr', false);
      }
      else {
        platform.setDir('ltr', true);
        platform.setDir('rtl', false);
      }
      Observable.forkJoin(
        this.translate.get('HOME'),
        this.translate.get('FORMS'),
        this.translate.get('FUNCTIONALITIES'),
        this.translate.get('LAYOUTS'),
        this.translate.get('SETTINGS')
      ).subscribe(data => {
        this.pages = [
          { title: data[0], icon: 'home', component: TabsNavigationPage },
          { title: data[1], icon: 'create', component: FormsPage },
          { title: data[2], icon: 'code', component: FunctionalitiesPage }
        ];

        this.pushPages = [
          { title: data[3], icon: 'grid', component: LayoutsPage },
          { title: data[4], icon: 'settings', component: SettingsPage }
        ];
      });
    });

    this.getProductTypeList();
    let user = JSON.parse(window.localStorage.getItem('user'));
    if (user) {
      this.getCartDataService();
    }

  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  pushPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
    this.app.getRootNav().push(page.component);
  }

  toggleSubmenu(menuName) {
    this.iconTxt[this.iconTxtLastActive] = 'add';
    if (this.mainMenu) {
      this.iconTxtLastActive = menuName;
      this.iconTxt[menuName] = 'add';
      this.mainMenu = '';
    } else {
      this.iconTxtLastActive = menuName;
      this.iconTxt[menuName] = 'remove';
      this.mainMenu = menuName;
    }
  }

  getProductTypeList() {
    this.productTypeService.getData().then(data => {
      this.productTypeList = data;
    });
  }

  getCartDataService() {
    this.cartService.getCartData().then((data) => {
      window.localStorage.setItem('cart', JSON.stringify(data));
    }, (error) => {
      console.error(error);
    });
  }
}
