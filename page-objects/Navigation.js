import { CookiesPage } from "./CookiesPage"
import { expect } from "@playwright/test"

export class Navigation{

    constructor(page){ 

        this.page = page
        this.cookiesPage = new CookiesPage(page)
        this.accessButton = page.locator('//codere-navbar-pc/ion-navbar/div[2]/div[4]/ion-buttons[2]/button[1]')
        this.profileButton = page.locator('//html/body/ion-app/ng-component/codere-navbar-pc-submenu/div/span/i')

     }

    goToLogin = async () => {

        await this.accessButton.waitFor()
        await this.accessButton.click()
        await this.cookiesPage.formIsDisplayed()
        await this.cookiesPage.submitForm()

    }

    userIsLogged = async () => {

        await this.profileButton.waitFor()

    }

}
