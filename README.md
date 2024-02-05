# Hostfully QA Engineer Cypress exercise
Repository created to store the tests created with cypress for the QA job challenge.

# Test list
```
Test case 01: Add a new computer with valid info/n
Test case 02: Add a new computer with invalid value in the introducedDate field
Test case 03: Add a new computer with invalid value in the discotinuedDate field
Test case 04: Add a new computer only filling the computer name field
Test case 05: Add a new computer with discotinued date before introduced date
Test case 06: Add a new computer without name
```
# Environment setup
In the challenge_hostfully/ folder you just need to run the following command:
```
npm install
```
After that you should open the cypress with the following command:
```
npx cypress open
```
Then you choose the option "E2E Testing", choose the browser and run the file "addComputerTests.cy.js" in the cypress screen.

# Approach
The first step in any test is learn more about the feature to be tested, so I carried out a brief battery of manual tests (approximately 20 minutes). After that, I wrote the most important test cases using Gherkin and finally I moved on to automation in Cypress, using the Page Model Object technique to create tests that are easier to read and understand.

# Findings
```
1 . To create robust tests we need test ids in the elements, not all elements had these ids.
2 . The error messages in the creation of a new computer are not very clear, these messages should indicate to the user exactly what hapened wrong.
```



