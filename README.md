# Playwright UI Test Automation

UI tests written in **Playwright with TypeScript** while completing the course
"Playwright from Zero to Hero" (Artem Bondar). Tests run against the
[Bondar Academy playground](https://playground.bondaracademy.com/) demo app.

## What is covered

| File | Topics |
|---|---|
| `first-test.spec.ts` | Test structure, `test.describe`, `beforeEach` hooks |
| `web-elements-testing.spec.ts` | Locators (CSS, role, label, text), child and parent locators, reusing locators, extracting values, assertions |
| `auto-waiting.spec.ts` | Auto-waiting, alternative waits, test and action timeouts |
| `ui-components.spec.ts` | Input fields: fill, clear, type sequentially, value assertions |

## Practices used

- User-facing locators (`getByRole`, `getByLabel`) preferred over CSS/XPath
- Parent filters (`filter({ hasText })`) instead of fragile `nth()`
- Locator assertions with auto-retry instead of hard waits
- Timeouts configured in `playwright.config.ts` and per test when needed

## How to run

```bash
npm install
npx playwright install
npx playwright test --project=chromium
npx playwright show-report
```

## Status

Work in progress — tests are added as the course continues.
