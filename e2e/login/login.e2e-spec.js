'use strict';

var LoginObject = require('./login.po');

describe('Login Page', () => {

  it('should return error for invalid login', async () => {
    LoginObject.navigateToLogin();
    LoginObject.loginAsInvalidUser();
  });

  it('should return sucess for valid login', async () => {
    LoginObject.navigateToLogin();
    LoginObject.loginAsValidUser();
  });

});