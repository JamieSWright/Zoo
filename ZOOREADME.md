# Edinburgh Zoo Tiger Cam Playwright Test

This Playwright test automates the process of navigating to the Edinburgh Zoo Tiger Cam page and verifying its accessibility and content.

## Test Steps
1. Create an incognito browser context.
2. Open a new page in the context.
3. Navigate directly to the Tiger Cam page: https://www.edinburghzoo.org.uk/animals/webcams/tiger-cam
4. Wait for the page to finish loading.
5. If a cookie consent modal appears, click the "Accept" button.
6. Verify the URL is correct.
7. Verify the page title is "Watch the Tigers live! | Edinburgh Zoo".
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
- This test checks direct navigation to the Tiger Cam page, cookie consent handling, and page metadata.

