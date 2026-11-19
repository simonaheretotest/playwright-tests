import {test} from '@playwright/test'
import {PageManager} from '../page-objects/page-manager'
import { faker } from '@faker-js/faker'

test.beforeEach(async ({page}) => {
    await page.goto('https://playground.bondaracademy.com/')
})

test('Navigate through all pages', async ({page}) => {
  
    const pom = new PageManager(page)
    await pom.navigateTo.formLayoutsPage()
    await pom.navigateTo.datepickerPage()
    await pom.navigateTo.toasterPage()
    await pom.navigateTo.smartTablePage()
    await pom.navigateTo.tooltipPage()
})

test('Parametrized page object methods', async ({page}) => {
const pom = new PageManager(page)
const randomFullName = faker.person.fullName()
const randomEmail = faker.internet.email()

await pom.navigateTo.formLayoutsPage()
await pom.formLayoutsPage.submitUsingTheGridForm('artem@test.com', 'password', 'Option 2')
await page.waitForTimeout(500)
await page.screenshot({path: 'screenshots/formLayouts.png'})
const formLayouts = await page.screenshot()
console.log(formLayouts.toString('base64'))
await page.locator('nb-card', { hasText: 'Inline form' }).screenshot({ path: 'screenshots/inlineForm.png' })
await pom.formLayoutsPage.submitInLineForm(randomFullName, randomEmail, true)
await pom.navigateTo.datepickerPage()
await pom.datepickerPage.selectCommonDatePickerDateFromToday(1)
await pom.datepickerPage.selectDatePickerWithRangeFromToday(1, 5)
}
)