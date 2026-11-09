import {test} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard')
})

test.describe('suite 1', () => {
test.beforeEach(async({page}) => {
await page.getByText('Forms').click()

})

test('this is a first test', async ({page}) => {
await page.getByText('Form Layouts').click()
})

test('this is a first test to datepicket', async ({page}) => {
await page.getByText('Datepicker').click()
})

})

test.describe('suite 2', () => {
    test.beforeEach(async({page}) => {
await page.getByRole('link', { name: 'Charts', exact: true }).click()

})

test('this is a first test', async ({page}) => {
await page.getByText('Echarts').click()
})


})

