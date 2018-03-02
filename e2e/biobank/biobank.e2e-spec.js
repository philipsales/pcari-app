'use strict';

var BiobankObject = require('./biobank.po');


describe('Biobank Page', () => {

  beforeEach( () => {
    //browser.executeScript("document.body.style.zoom='80%'");
    //browser.executeScript("document.body.style.transform='scale(0.8)';");
  });

  it('should navigate to biobank home page', async () => {
   //BiobankObject.loginAsValidUser();
    BiobankObject.loginAsValidUser();
    BiobankObject.navigateToBiobankCases();
  });


  it('should navigate to biobank forms page', async () => {
    BiobankObject.navigateToBiobankForms();
  });

  it('should create new form', async () => {
    BiobankObject.createNewForm();
    //add new form checkbox
    //add new form date 
    //add new form multiple 
    //add new form text 
    //add new form paragraph 
  });

  it('should navigate to biobank cases page', async () => {
    BiobankObject.navigateToBiobankCases();
  });

  it('should create new case', async () => {
    BiobankObject.createNewCase();
  });

  it('should add created form to new case', async () => {
    BiobankObject.addFormToNewCase();
  });

  
  
  it('should add form to new case', async () => {
  });

  it('should fill up the added from of the new case', async () => {
  });

  it('should create Update Created Form', async () => {
  });

  it('should navigate to biobank cases page', async () => {
    BiobankObject.navigateToBiobankCases();
  });

  it('should navigate to biobank reports page', async () => {
    BiobankObject.navigateToBiobankReports();
  });

  it('should not navigate to admin page', async () => {
  });

  it('should not navigate to medical page', async () => {
  });

  it('should not navigate to medical page', async () => {
  });



});