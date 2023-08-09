import { expect } from "@playwright/test"
import { Navigation } from "./Navigation"

export class HomePage{

    constructor(page){ 

        this.page = page
        this.navigation = new Navigation(page)
     }

    visit = async () => {
        
        await this.page.goto("/")

    }

}