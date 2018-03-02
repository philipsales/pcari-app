
'use strict';

var biobank = require('./biobank.object').biobank;
var data = require('./biobank.object').data;

const id = biobank.locator.id;
const css = biobank.locator.css;
const forms = data.form;
const cases = data.case;

//browser.executeScript("document.body.style.zoom='50%'");
//TODO: caution ong get(0) should be .first()
var navigateToLogin = () => {
    browser.get('/');
}

var loginAsValidUser =  async () => {
    browser.get('/');
    element(by.id(id.input_username)).sendKeys(data.valid.username);
    element(by.id(id.input_password)).sendKeys(data.valid.password);
    element(by.id(id.btn_login)).click();
  
    let home = await browser.driver.getCurrentUrl();
}

var navigateToBiobankCases = () => {
    element(by.css(css.main_tab_biobank)).click();
}

var navigateToBiobankForms = () => {
    element(by.css(css.sub_tab_form)).click();
}

var navigateToBiobankReports = () => {
    element(by.css(css.sub_tab_report)).click();
}

var createNewForm = () => {
    element(by.css(css.btn_create_form)).click();
    element(by.id(id.input_formname)).sendKeys(forms.formname);
    element(by.css(css.btn_save_form)).click();

    //check table list if displayed
    element(by.css(css.sub_tab_form)).click();

    let list_forms = element.all(by.css(css.td_newest_form));
    let new_form = list_forms.get(0);

    expect(new_form.getText()).toEqual(forms.formname);
}

var createNewCase = () => {
    element(by.css(css.btn_create_case)).click();
    element(by.id(id.input_casenumber)).sendKeys(cases.casenumber);
    element(by.css(css.btn_save_case)).click();
    element(by.css(css.sub_tab_case)).click();

    let list_cases = element.all(by.css(css.td_newest_case));
    let new_case = list_cases.first();

    expect(new_case.getText()).toEqual(cases.casenumber);
}

var addFormToNewCase = () => {
    //select newest case
    let list_cases = element.all(by.css(css.btn_update_case));
    let btn_new_case = list_cases.get(0);

    //click newest case update
    btn_new_case.click();
    var EC = protractor.ExpectedConditions;

    browser.waitForAngular();
    browser.waitForAngularEnabled(true);

    const form_list = element(by.tagName('app-pcaricase-form-list'))
    const add = form_list.element(by.css('.e2e-add-form'));
    add.click();

    //add form
    const foo = element(by.tagName('app-pcaricase-form-add')).element(by.css('.e2e-select-newest-case'));
    foo.click();

    //add select
    const foobar = element(by.css('.e2e-add-form-to-case'));
    foobar.click();

    //save
    element(by.css(css.btn_save_case)).click();

}

var repeatAll = () => {
    this.navigateToLogin,
    this.loginAsValidUser,
    this.navigateToBiobankCases,
    this.navigateToBiobankForms,
    navigateToBiobankReports,
    createNewForm,
    createNewCase,
    addFormToNewCase
}

module.exports = {
 repeatAll,
 navigateToLogin,
 loginAsValidUser,
 navigateToBiobankCases,
 navigateToBiobankForms,
 navigateToBiobankReports,
 createNewForm,
 createNewCase,
 addFormToNewCase
} 
