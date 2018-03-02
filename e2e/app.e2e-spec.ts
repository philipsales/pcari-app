import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';
//var chai = require('chai');
//var chaiAsPromised = require('chai-as-promised');

//chai.use(chaiAsPromised);
//var expect = chai.expect;



describe('Login Page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    //browser.waitForAngular();
    //browser.waitForAngularEnabled(true);
  });

  it('should return invalid login', async () => {
    page.navigateToLogin();
    page.loginAsValidUser();
  });

  it('should return success login', async () => {
  });


});

    //expect((error.getText()).toEqual('foo'));
    //expect(foo.toString().toEqual('foo'));
    //expect(element(by.binding('error')).getText()).toBe('Username or password incorrect'); // This is wrong! 
    //expect(page.getParagraphText()).toEqual('PHILIPPINE CANCER - PHENOME BIOBANK REGISTRY');
    //expect(page.getTitle()).toEqual('SIGN IN');