
  _   _                                       
 | | (_)                                      
 | |_ _  __ _  ___ _ __    ___ __ _ _ __ ___  
 | __| |/ _` |/ _ \ '__|  / __/ _` | '_ ` _ \ 
 | |_| | (_| |  __/ |    | (_| (_| | | | | | |
  \__|_|\__, |\___|_|     \___\__,_|_| |_| |_|
         __/ |                                
        |___/                                 





        

## Edinburgh Zoo Tiger Cam Automated Playwright Test


This Playwright test automates the process of navigating to the Edinburgh Zoo Tiger Cam page and verifies its accessibility (such as correct URL and page title) and content (such as the presence and visibility of the video holder).

## Test Steps

1. Open an incognito browser context.
2. Navigate to the Edinburgh Zoo Tiger Cam page.
3. Wait for the page to load.
4. If the cookie modal appears (it may not always show), click "Accept".
5. Verify the URL is correct.
6. Verify the page title is correct.
7. Verify video holder is present and visible.
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
   > If your test file uses a different extension (e.g., `.ts` for TypeScript), update the command to:
   ```sh
   npx playwright test tests/zoo.test.ts
   ```

> **Note:** For consistency, use the latest stable version of Playwright by running:
> ```sh
> npm install -D playwright@latest
> ```
> Or specify a particular version if your project requires it.

## Requirements
- Node.js
- Playwright

## Notes
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⠀⠀⠀⢀⡤⠤⠤⣄⠀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠤⢴⣴⠒⠉⠹⣴⣏⠀⠀⠀⡀⠈⢇⠀⠀⣼⠀⠀⠀⠘⣶⠇⠀⢨⢃⡾⠓⠲⢤⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣀⠤⠔⠒⠙⣯⣇⠀⠈⣿⣇⠀⠀⣿⣿⣿⠀⠀⣷⠀⠘⡄⠀⣿⠀⠀⠀⠀⢹⠀⠀⢸⡏⠇⠀⢀⠇⣀⠤⠒⠒⠤⣄
⢰⡖⠉⠀⠀⠀⠀⣀⣸⣿⠀⠀⠉⠉⠀⠀⢸⠁⣿⠀⠈⠉⠁⠀⢱⠀⣿⠀⠀⣦⠀⠀⠀⠀⣿⡸⠀⠀⠘⠉⠀⠀⣀⣤⣴⠟
⢼⢣⣀⣴⡀⠀⠘⡿⠏⠗⡆⠀⠠⣶⡆⠀⠸⡄⡏⠀⠀⣶⣷⠀⠀⢧⣿⠀⠀⣿⡆⠀⠀⢸⣿⠃⠀⢰⡄⠀⠐⡿⠛⠋⠀⠀
⠘⢿⡿⢿⣧⠀⠀⢳⠀⢸⠸⠀⠀⢹⣧⢀⣀⣷⣧⣤⣤⠛⣏⣦⣤⣾⣿⢦⣤⣿⢸⣄⣀⣼⡏⠀⢠⡟⡇⠀⠀⡇⠀⠀⠀⠀
⠀⠀⠀⠀⢏⢇⠀⠀⣣⠀⣆⣷⣶⣿⣿⡿⠿⠿⢷⡿⠟⣠⠟⠋⠛⢿⡛⠛⠿⡼⠿⠿⢿⣿⣿⣶⠞⡅⢸⠀⠀⢸⠀⠀⠀⠀
⠀⠀⠀⠀⠘⣾⣿⣿⠇⢠⣟⠉⠙⠷⡿⠀⠀⠀⢸⢀⡼⠁⠀⣀⠀⠀⠹⡄⡼⡇⠀⠀⡜⣸⡏⠙⠢⣧⣾⣦⣀⢸⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠀⠀⠀⢿⣿⣷⣦⡀⠀⠀⠀⠀⣇⡾⠀⠀⣼⣿⢷⠀⠀⢻⢱⠀⠀⢀⣿⡿⠀⠀⢠⠋⢻⡿⠿⣏⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣿⣿⠆⠀⠀⢸⡏⡇⠀⠀⡏⡟⡟⠀⠀⢸⡸⠀⠀⢸⣿⠃⠀⠀⡜⡰⢩⠃⠀⠈⣱⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢹⠀⠀⠀⢸⠀⡇⠀⠀⠙⠋⠀⠀⢀⡏⡇⠀⠀⠘⠋⠀⠀⣰⣱⢣⠇⠀⠀⣰⠃⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡘⡎⠀⠀⠀⡏⣿⣧⡀⠀⠀⠀⠀⢀⣾⣷⡇⠀⠀⠀⠀⠀⢠⣯⣧⣾⣦⣄⣰⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⣧⣤⣶⣶⠃⠘⢿⣿⣷⣶⣶⣾⠟⠉⣿⣿⣦⣄⣀⣠⣴⢏⣽⠋⠉⠙⢿⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠛⠛⠛⠋⠁⠀⠀⠀⠉⠉⠉⠉⠀⠀⠀⠈⠛⠻⠿⠟⠋⠁⣿⣿⣦⣀⣀⡼⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠛⠛⠁⠀⠀⠀⠀⠀⠀⠀
