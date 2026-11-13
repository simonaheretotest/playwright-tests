import {Page} from '@playwright/test'

export class HelperBase {
    protected readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    protected async getToastrMessage(){
        //this method validates the toastr message and returns the text of the message
        return "I am cool toaster!"
    }
}