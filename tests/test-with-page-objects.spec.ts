import {test} from '@playwright/test'
import {NavigationPage} from '../page-objects/navigation-page'
import {FormLayoutsPage} from '../page-objects/form-layouts-page'

test.beforeEach(async ({page}) => {
    await page.goto('https://playground.bondaracademy.com/')
})

test('Navigate through all pages', async ({page}) => {
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datepickerPage()
    await navigateTo.toasterPage()
    await navigateTo.smartTablePage()
    await navigateTo.tooltipPage()
})

test('Parametrized page object methods', async ({page}) => {
const navigateTo = new NavigationPage(page)
const formLayoutsPage = new FormLayoutsPage(page)
await navigateTo.formLayoutsPage()
await formLayoutsPage.submitUsingTheGridForm('artem@test.com', 'password', 'Option 2')
await formLayoutsPage.submitInLineForm('Artem', 'artem@test.com', true)

}
)