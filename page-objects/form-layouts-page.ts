import {Page} from '@playwright/test'
import {step} from '../helpers/test-step-decorator'
import {HelperBase} from './helper-base'

export class FormLayoutsPage extends HelperBase {
    

    constructor(page: Page) {
        super(page)
    }

@step
    async submitUsingTheGridForm(email: string, password: string, optionText: string) {
    const usingTheGridForm = this.page.locator('nb-card:has-text("Using the Grid")')
        await usingTheGridForm.getByRole('textbox', { name: 'Email' }).fill(email)
        await usingTheGridForm.getByRole('textbox', { name: 'Password' }).fill(password)
        await usingTheGridForm.getByLabel(optionText).check({force: true})
        await usingTheGridForm.getByRole('button', { name: 'Sign in' }).click()
    }

/**
* This method submits the inline form with the provided full name, email, and remember me checkbox option.
* @param fullName - The full name to be filled in the form.
* @param email - The email address to be filled in the form.
* @param rememberMeCheckbox - A boolean indicating whether to check the "Remember me" checkbox.
*/
@step
async submitInLineForm(fullName: string, email: string, rememberMeCheckbox: boolean) {
    const inlineForm = this.page.locator('nb-card:has-text("Inline form")')
     await inlineForm.getByRole('textbox', { name: 'Jane Doe' }).fill(fullName)
        await inlineForm.getByRole('textbox', { name: 'Email' }).fill(email)
        if(rememberMeCheckbox) {
            await inlineForm.getByRole('checkbox').check({force: true})
        }
        await inlineForm.getByRole('button', { name: 'Submit' }).click()
}
}