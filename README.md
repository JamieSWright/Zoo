# Edinburgh Zoo Tiger Cam Playwright Test

This Playwright test automates the process of navigating to the Edinburgh Zoo Tiger Cam page and verifying its accessibility and content.

## Test Steps

1. Open an incognito browser context.
2. Navigate to the Edinburgh Zoo Tiger Cam page.
3. Wait for the page to load.
4. If the cookie modal appears, click "Accept".
5. Verify the URL is correct.
6. Verify the page title is correct.
7. Verify video holder is present and visible.**
8. Close the incognito browser context.

## How to Run the Test
1. Install dependencies:
   ```sh
   npm install
   ```
2. Run the test:
   ```sh
   npx playwright test tests/zoo.test.js
   ```

## Requirements
- Node.js
- Playwright

## Notes


