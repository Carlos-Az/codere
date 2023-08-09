import { expect } from "@playwright/test"
import { LoginPage } from "./LoginPage"
import { messages_ES } from "../data/messages_ES"

export class CookiesPage{

    constructor(page){ 

        this.page = page
        this.loginPage = new LoginPage(page)
        this.cookiesForm = page.locator('//ion-modal/div/cookies-consent-page')
        this.cookiesHeader = page.locator('//h1')
        this.submitFormButton = page.locator('//ion-modal/div/cookies-consent-page/ion-content/div[2]/div/div[2]/div[6]/div/button/span')
     }

    formIsDisplayed = async () => {
        
        await this.cookiesForm.waitFor()
        await expect(this.cookiesHeader).toHaveText(messages_ES.configureCookies)

     }

    submitForm = async () => {

        await this.submitFormButton.waitFor()
        await this.submitFormButton.click()
        await this.loginPage.formIsDisplayed()

    }

}