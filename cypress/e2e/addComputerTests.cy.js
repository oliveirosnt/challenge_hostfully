import computersPage from "../pages/computersPage";
import addComputerPage from "../pages/addComputerPage";

describe('Test suite 01: Add computer cases', () => {

    beforeEach(() => {
        cy.log('Open the computers page')
        cy.visit("https://computer-database.gatling.io/computers")
    })
  
    it('Test case 01: Add a new computer with valid info', () => {
        cy.log("GIVEN valid infos for a computer adition")
        const computerName = "computer_test"
        const intruducedDate = "1995-01-01"
        const discotinuedDate = "1996-01-01"
        const computerCompany = "IBM"

        cy.log("WHEN the user performs the computer creation action.")
        computersPage.clickToAddNewComputer();
        addComputerPage.addComputer(computerName, intruducedDate, discotinuedDate, computerCompany);

        cy.log("THEN the computer must be correctly created and the user must be informed.")
        computersPage.verifyComputerCreatedMessage(computerName);
    })

    it('Test case 02: Add a new computer with invalid value in the introducedDate field', () => {
        cy.log("GIVEN a invalid value for the introduced date")
        const computerName = "computer_test"
        const invalidIntroducedDate = "01-01-1995"
        const discotinuedDate = "1996-01-01"
        const computerCompany = "IBM"

        cy.log("WHEN the user performs the computer creation action.")
        computersPage.clickToAddNewComputer();
        addComputerPage.addComputer(computerName, invalidIntroducedDate, discotinuedDate, computerCompany);

        cy.log("THEN the computer should not be added and an error should be displayed to the user.")
        const errorMessage = "Failed to decode date"
        addComputerPage.verifyDateError("introduced", errorMessage);
    })

    it('Test case 03: Add a new computer with invalid value in the discotinuedDate field', () => {
        cy.log("GIVEN a invalid value for the discotinued date")
        const computerName = "computer_test"
        const intruducedDate = "1995-01-01"
        const invalidDiscotinuedDate = "01-01-1196"
        const computerCompany = "IBM"

        cy.log("WHEN the user performs the computer creation action.")
        computersPage.clickToAddNewComputer();
        addComputerPage.addComputer(computerName, intruducedDate, invalidDiscotinuedDate, computerCompany);

        cy.log("THEN the computer should not be added and an error should be displayed to the user.")
        const errorMessage = "Failed to decode date"
        addComputerPage.verifyDateError("discotinued", errorMessage);
    })

    it('Test case 04: Add a new computer only filling the computer name field', () => {
        cy.log("GIVEN valid computer name")
        const computerName = "computer_test"

        cy.log("WHEN the user performs the computer creation action.")
        computersPage.clickToAddNewComputer();
        addComputerPage.addComputerWithOnlyNameFilled(computerName);

        cy.log("THEN the computer must be correctly created and the user must be informed.")
        computersPage.verifyComputerCreatedMessage(computerName);
    })

    it('Test case 05: Add a new computer with discotinued date before introduced date', () => {
        cy.log("GIVEN a discotinued date before the introduced date")
        const computerName = "computer_test"
        const intruducedDate = "1995-01-01"
        const discotinuedDate = "1994-01-01"
        const computerCompany = "IBM"

        cy.log("WHEN the user performs the computer creation action.")
        computersPage.clickToAddNewComputer();
        addComputerPage.addComputer(computerName, intruducedDate, discotinuedDate, computerCompany);

        cy.log("THEN the computer should not be added and an error should be displayed to the user.")
        const errorMessage = "Discontinued date is before introduction date"
        addComputerPage.verifyDateError("discotinued", errorMessage);
    })

    it('Test case 06: Add a new computer without name', () => {
        cy.log("GIVEN a computer info without computer name")

        cy.log("WHEN the user performs the computer creation action.")
        computersPage.clickToAddNewComputer();
        addComputerPage.clickToCreateComputer();

        cy.log("THEN the computer should not be added and an error should be displayed to the user.")
        const errorMessage = "Failed to refine type"
        addComputerPage.verifyEmptyNameError(errorMessage);
    })
  
})