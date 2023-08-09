import { expect } from "@playwright/test"

export class LoginPage{

    constructor(page){ 

        this.page = page
        this.loginForm = page.locator('//ion-modal/div/login-page/ion-content/div[2]/div[1]')
        this.closeButton = page.locator('//button[@class="closeModal"]')
        this.userInput = page.locator('//input[@name="username"]')
        this.passwordInput = page.locator('//input[@name="password"]')
        this.accessButton = page.locator('//button[@id="btnaccess"]')
        this.welcomeAlert = page.locator('//html/body/ion-app/ion-alert/div')      
        this.welcomeButton = page.locator('//html/body/ion-app/ion-alert/div/div[3]/button/span') 
        this.errorMessageAlert = page.locator('//html/body/ion-app/ion-alert/div/div[1]')
        this.errorMessageAlertButton = page.locator('//html/body/ion-app/ion-alert/div/div[3]/button[2]/span') 
        this.errorMessageEmptyInputsAlert = page.locator('//html/body/ion-app/ion-alert/div')
        this.errorMessageEmptyInputsButton = page.locator('//html/body/ion-app/ion-alert/div/div[3]/button/span')
     }


     formIsDisplayed = async () => {
        
        await this.loginForm.waitFor()

     }

     closeForm = async () => {
        
        await this.closeButton.waitFor()
        await this.closeButton.click()
        await this.loginForm.waitFor({state: "hidden"})
        expect(this.loginForm).not.toBeVisible()

     }

     fillLogin = async (username, password) => {
   
        await this.loginForm.waitFor()

        await this.userInput.waitFor()
        await this.userInput.fill(username)

        await this.passwordInput.waitFor()
        await this.passwordInput.fill(password)        

        await this.accessButton.waitFor()
        await this.accessButton.click()       

     }

     submitWelcomeForm = async () => {

       await this.welcomeAlert.waitFor()
       await this.welcomeButton.click()
       await this.welcomeAlert.waitFor({state: "hidden"})
       expect(this.welcomeAlert).not.toBeVisible()

     }

     userIsNotLogged = async () => {

       await this.errorMessageAlert.waitFor()
       await this.errorMessageAlertButton.waitFor()
       await this.errorMessageAlertButton.click()
       
     }

     checkEmptyInputsAlertIsDisplayed= async () => {
   
      await this.errorMessageEmptyInputsAlert.waitFor()
      await this.errorMessageEmptyInputsButton.waitFor()
      await this.errorMessageEmptyInputsButton.click()

    }
}
