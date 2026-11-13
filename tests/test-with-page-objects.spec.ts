import {test} from '@playwright/test'
import {PageManager} from '../page-objects/page-manager'

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
await pom.navigateTo.formLayoutsPage()
await pom.formLayoutsPage.submitUsingTheGridForm('artem@test.com', 'password', 'Option 2')
await pom.formLayoutsPage.submitInLineForm('Artem', 'artem@test.com', true)
await pom.navigateTo.datepickerPage()
await pom.datepickerPage.selectCommonDatePickerDateFromToday(1)
await pom.datepickerPage.selectDatePickerWithRangeFromToday(1, 5)
}
)