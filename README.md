# Playwright UI Test Automation

UI and API tests written in **Playwright with TypeScript** while completing the course "Playwright from Zero to Hero" (Artem Bondar). Tests run against the [Bondar Academy playground](https://playground.bondaracademy.com/) and the [Conduit](https://conduit.bondaracademy.com/) demo apps.

## What is covered

### UI tests (playground app)

| File | Topics |
|---|---|
| `tests/first-test.spec.ts` | Test structure, `test.describe`, `beforeEach` hooks |
| `tests/web-elements-testing.spec.ts` | Locators (CSS, role, label, text), child and parent locators, reusing locators, extracting values, assertions |
| `tests/auto-waiting.spec.ts` | Auto-waiting, alternative waits, test and action timeouts |
| `tests/ui-components.spec.ts` | Input fields, radio buttons, checkboxes, standard and custom dropdowns, browser dialogs, web tables (edit, filter, loop through rows), datepicker with month navigation, sliders (mouse movement), iframes, drag & drop |
| `tests/test-with-page-objects.spec.ts` | Tests using the Page Object Model |

### Page Object Model

| File | Purpose |
|---|---|
| `page-objects/navigation-page.ts` | Menu navigation, with a check so open menu groups are not closed again |
| `page-objects/form-layouts-page.ts` | Parameterised methods to fill and submit forms |
| `page-objects/datepicker-page.ts` | Selecting a date relative to today, including month navigation |
| `page-objects/page-manager.ts` | One entry point to all page objects |
| `page-objects/helper-base.ts` | Shared base class for page objects |

### API in UI tests (Conduit app) – `playwright-conduit/`

| File | Topics |
|---|---|
| `tests/working-with-apis.spec.ts` | Mocking API responses with `page.route`, modifying a real response with `route.fetch`, test data in JSON files, API requests with `request` (login, token, create article), creating test data via API and verifying deletion in the UI |

## Practices used

- User-facing locators (`getByRole`, `getByLabel`) preferred over CSS/XPath
- Parent filters (`filter({ hasText })`) instead of fragile `nth()`
- Locator assertions with auto-retry instead of hard waits
- Dynamic test data (dates calculated at runtime instead of hardcoded)
- Page Object Model with a Page Manager and a shared base class
- API mocking to control what the UI receives
- Fast test setup through the API, verification through the UI
- Timeouts configured in `playwright.config.ts` and per test when needed

## How to run

Playground tests (repository root):

```bash
npm install
npx playwright install
npx playwright test --project=chromium
npx playwright show-report
```

Conduit API tests:

```bash
cd playwright-conduit
npm install
npx playwright test --project=chromium
```

## Status

Work in progress: tests are added as the course continues.
