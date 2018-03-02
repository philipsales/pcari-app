import { browser, by, element } from 'protractor';

const objects = require('./page.object.json');

export class AppPage {

  navigateToLogin() {
    //return browser.get('http://localhost:49152/login');
    //return browser.get('htp://localhost:4200/login');
    return browser.get('/');
  }

  loginAsValidUser() {

    console.log('objects', objects.login.id.login_button);
    element(by.id('username')).sendKeys('admin@admin.com');
    element(by.id('password')).sendKeys('ryptonite');

    element(by.id('login_btn')).click();

    var error = element(by.css('.alert.alert-danger'))
    expect(error.getText()).toBe('Username or password is incorrect'); // This is wrong! 

  }



  getParagraphText() {

    return element(by.css('h2.login-panel__header.em')).getText();
  }

  getTitle() {
    return element(by.css('span.ng-star-inserted')).getText();
  }
}
