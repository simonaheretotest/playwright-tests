import {Page} from '@playwright/test'

export class NavigationPage {

   private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async formLayoutsPage() {
        
        await this.selectGroupMenuItem('Forms')
        await this.page.getByText('Form Layouts').click()
    }

    async datepickerPage() {
         await this.selectGroupMenuItem('Forms')
        await this.page.getByText('Datepicker').click()
    }

    async toasterPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText('Toastr').click()
    }

    async smartTablePage() {
        await this.selectGroupMenuItem('Tables & Data')
        await this.page.getByText('Smart Table').click()
    }

    async tooltipPage() {
      
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText('Tooltip').click()
    }

    private async selectGroupMenuItem(groupMenuTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupMenuTitle)
        const exandedState = await groupMenuItem.getAttribute('aria-expanded')
        if (exandedState === 'false') {
            await groupMenuItem.click()
        }
    }}