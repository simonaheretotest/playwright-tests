import { test, expect } from '@playwright/test';
import tags from '../test-data/tags.json'

test.beforeEach(async ({ page }) => {
 // await page.route('*/**/api/tags', async route => {
 //   await route.fulfill({ 
 //     json: tags 
 //   })
 // })

  //await page.route('*/**/api/articles*', async route => {
 //   const response = await route.fetch()
 //   const responseJSON = await response.json()
 //   responseJSON.articles[0].title = 'This is a MOCK title for the article'
 //   responseJSON.articles[0].description = 'This is a MOCK description for the article'
 //   await route.fulfill({
  //    json: responseJSON
  //  })
 //})
  await page.goto('https://conduit.bondaracademy.com')
})

test.skip('shows mocked tags and article', async ({ page }) => {
  await expect(page.locator('.navbar-brand')).toHaveText(/conduit/)
  await expect(page.locator('.sidebar .tag-pill')).toContainText(['Automation', 'Playwright'])
  await expect(page.locator('.preview-link h1').first()).toContainText('This is a MOCK title for the article')
  await expect(page.locator('.preview-link p').first()).toContainText('This is a MOCK description for the article')
});

test('Delete article', async({page, request}) =>{
const loginResponse = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
  data: {
    "user": {
      "email": "sim@sim.com",
      "password": "12345678"
    }
  }
})
expect((loginResponse).status()).toEqual(200)
const responseLoginJSON = await loginResponse.json()
const token = responseLoginJSON.user.token

const newArticleResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
  data: {
    "article":{
    "title": "Test title",
    "description": "test description",
    "body": "test body",
    "tagList": []
    }
  },
  headers: {
    Authorization: `Token ${token}`
  }
})
expect((newArticleResponse).status()).toEqual(201)

await page.goto('https://conduit.bondaracademy.com');

 await expect(page.locator('.preview-link h1').first()).toContainText('Test title')
 await page.getByText('Test title').click()
 await page.getByRole('button', {name: "Delete Article"}).first().click()
 await page.waitForResponse("https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0")
await expect(page.locator('.preview-link h1').first()).not.toContainText('Test title')
})

test('Create article', async ({page, request}) => {
await page.goto('https://conduit.bondaracademy.com');


  await page.getByText('New Article').click()
  await page.getByRole('textbox', { name: 'Article Title' }).fill('Playwright is awesome')
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill('We can use APIs in Playwright')
  await page.getByRole('textbox', { name: 'Write your article (in markdown)' }).fill('Automate any web application in Playwright')
  await page.getByRole('button', {name: "Publish Article"}).click()
  const createArticleResponse = await page.waitForResponse("https://conduit-api.bondaracademy.com/api/articles/")
const articleResponseJSON = await createArticleResponse.json()
const slugID = articleResponseJSON.article.slug

  await expect(page.locator('.article-page h1')).toContainText('Playwright is awesome')
  await page.getByText('Home').first().click()
  await expect(page.locator('.article-preview h1').first()).toContainText('Playwright is awesome')

  const loginResponse = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
  data: {
    "user": {
      "email": "sim@sim.com",
      "password": "12345678"
    }
  }
})
expect((loginResponse).status()).toEqual(200)
const responseLoginJSON = await loginResponse.json()
const token = responseLoginJSON.user.token

const deleteResponse = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${slugID}`, {
  headers: {
    Authorization: `Token ${token}`
  }
})
expect(deleteResponse.status()).toEqual(204)
})