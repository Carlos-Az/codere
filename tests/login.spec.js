const { test, expect } = require('@playwright/test');
import { HomePage } from '../page-objects/HomePage';
import { Navigation } from '../page-objects/Navigation';
import { LoginPage } from '../page-objects/LoginPage';


test('As registered user I can login using username', async ({ page })=> {

    const username = "carlosanguiz"
    const password = "C1rl2s3ng45z!"

    const homePage = new HomePage(page)
    await homePage.visit()
    const navigation = new Navigation(page)
    await navigation.goToLogin()
    const loginPage = new LoginPage(page)
    await loginPage.fillLogin(username,password)
    await loginPage.submitWelcomeForm()
    await navigation.userIsLogged()

})

test('As registered user I can login using email', async ({ page })=> {

    const username = "carlos@anguiz.com"
    const password = "C1rl2s3ng45z!"

    const homePage = new HomePage(page)
    await homePage.visit()
    const navigation = new Navigation(page)
    await navigation.goToLogin()
    const loginPage = new LoginPage(page)
    await loginPage.fillLogin(username,password)
    await loginPage.submitWelcomeForm()
    await navigation.userIsLogged()
})

test('As anonymous user I can close login form before being authentificated', async ({ page })=> {

    const homePage = new HomePage(page)
    await homePage.visit()
    const navigation = new Navigation(page)
    await navigation.goToLogin()
    const loginPage = new LoginPage(page)
    await loginPage.closeForm()

})

test('As anonymous user I can see an error message when trying to login with empty user and password data', async ({ page })=> {

    const username = ""
    const password = ""

    const homePage = new HomePage(page)
    await homePage.visit()
    const navigation = new Navigation(page)
    await navigation.goToLogin()
    const loginPage = new LoginPage(page)
    await loginPage.fillLogin(username,password)
    await loginPage.checkEmptyInputsAlertIsDisplayed()

 
})

test('As anonymous user I can see an error message when trying to login with empty user data', async ({ page })=> {

    // password input is empty
    const username = ""
    const password = "C1rl2s3ng45z!"

    const homePage = new HomePage(page)
    await homePage.visit()
    const navigation = new Navigation(page)
    await navigation.goToLogin()
    const loginPage = new LoginPage(page)
    await loginPage.fillLogin(username,password)
    await loginPage.checkEmptyInputsAlertIsDisplayed()
 
})

test('As anonymous user I can an see error message when trying to login with empty password data', async ({ page })=> {

    // password input is empty
    const username = "carlosanguiz"
    const password = ""

    const homePage = new HomePage(page)
    await homePage.visit()
    const navigation = new Navigation(page)
    await navigation.goToLogin()
    const loginPage = new LoginPage(page)
    await loginPage.fillLogin(username,password)
    await loginPage.checkEmptyInputsAlertIsDisplayed()
 
})


test('As anonymous user I can see an error message when trying to login with too long data', async ({ page })=> {

    const username = "t(VWY1y0r3(%3@PY;}Up+E&yRvRVd-k(P*waX(]m8cfHmfcMX13];7%=y%qGt88hcFb59%*q;X#Ya%FQ0GcXw++{UGt464aJ]k8d2k$UhTHJ_pHkZ?C*hZrqFyb}fh!"
                    + "t(VWY1y0r3(%3@PY;}Up+E&yRvRVd-k(P*waX(]m8cfHmfcMX13];7%=y%qGt88hcFb59%*q;X#Ya%FQ0GcXw++{UGt464aJ]k8d2k$UhTHJ_pHkZ?C*hZrqFyb}fh!"
    const password = ""

    const homePage = new HomePage(page)
    await homePage.visit()
    const navigation = new Navigation(page)
    await navigation.goToLogin()
    const loginPage = new LoginPage(page)
    await loginPage.fillLogin(username,password)
    await loginPage.checkEmptyInputsAlertIsDisplayed()   
    
})

test('As unregistered user I cannot login', async ({ page })=> {

    const username = "thisUser@doesNotExist.com"
    const password = "C1rl2s3ng45z!"

    const homePage = new HomePage(page)
    await homePage.visit()
    const navigation = new Navigation(page)
    await navigation.goToLogin()
    const loginPage = new LoginPage(page)
    await loginPage.fillLogin(username,password)
    await loginPage.userIsNotLogged()
    
})