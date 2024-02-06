import computersPage from "../pages/computersPage";
import addComputerPage from "../pages/addComputerPage";

describe('Test suite 01: Add computer cases', () => {

    beforeEach(() => {
        cy.log('Open the computers page')
        cy.visit("https://computer-database.gatling.io/computers")
    })
  
    it('Test case 01: Add a new computer with valid info', () => {
        cy.log("GIVEN valid infos for a computer adition")
        const COMPUTER_NAME = "computer_test"
        const INTRODUCED_DATA = "1995-01-01"
        const DISCOTINUED_DATA = "1996-01-01"
        const COMPUTER_COMPANY = "IBM"

        cy.log("WHEN the user performs the computer creation action.")
        computersPage.clickToAddNewComputer();
        addComputerPage.addComputer(COMPUTER_NAME, INTRODUCED_DATA, DISCOTINUED_DATA, COMPUTER_COMPANY);

        cy.log("THEN the computer must be correctly created and the user must be informed.")
        computersPage.verifyComputerCreatedMessage(COMPUTER_NAME);
    })

    it('Test case 02: Add a new computer with invalid value in the introducedDate field', () => {
        cy.log("GIVEN a invalid value for the introduced date")
        const COMPUTER_NAME = "computer_test"
        const INVALID_INTRODUCED_DATA = "01-01-1995"
        const DISCOTINUED_DATA = "1996-01-01"
        const COMPUTER_COMPANY = "IBM"

        cy.log("WHEN the user performs the computer creation action.")
        computersPage.clickToAddNewComputer();
        addComputerPage.addComputer(COMPUTER_NAME, INVALID_INTRODUCED_DATA, DISCOTINUED_DATA, COMPUTER_COMPANY);

        cy.log("THEN the computer should not be added and an error should be displayed to the user.")
        const ERROR_MESSAGE = "Failed to decode date"
        addComputerPage.verifyDateError("introduced", ERROR_MESSAGE);
    })

    it('Test case 03: Add a new computer with invalid value in the discotinuedDate field', () => {
        cy.log("GIVEN a invalid value for the discotinued date")
        const COMPUTER_NAME = "computer_test"
        const INTRODUCED_DATA = "1995-01-01"
        const INVALID_DISCOTINUED_DATE = "01-01-1196"
        const COMPUTER_COMPANY = "IBM"

        cy.log("WHEN the user performs the computer creation action.")
        computersPage.clickToAddNewComputer();
        addComputerPage.addComputer(COMPUTER_NAME, INTRODUCED_DATA, INVALID_DISCOTINUED_DATE, COMPUTER_COMPANY);

        cy.log("THEN the computer should not be added and an error should be displayed to the user.")
        const ERROR_MESSAGE = "Failed to decode date"
        addComputerPage.verifyDateError("discotinued", ERROR_MESSAGE);
    })

    it('Test case 04: Add a new computer only filling the computer name field', () => {
        cy.log("GIVEN valid computer name")
        const COMPUTER_NAME = "computer_test"

        cy.log("WHEN the user performs the computer creation action.")
        computersPage.clickToAddNewComputer();
        addComputerPage.addComputerWithOnlyNameFilled(COMPUTER_NAME);

        cy.log("THEN the computer must be correctly created and the user must be informed.")
        computersPage.verifyComputerCreatedMessage(COMPUTER_NAME);
    })

    it('Test case 05: Add a new computer with discotinued date before introduced date', () => {
        cy.log("GIVEN a discotinued date before the introduced date")
        const COMPUTER_NAME = "computer_test"
        const INTRODUCED_DATA = "1995-01-01"
        const DISCOTINUED_DATA = "1994-01-01"
        const COMPUTER_COMPANY = "IBM"

        cy.log("WHEN the user performs the computer creation action.")
        computersPage.clickToAddNewComputer();
        addComputerPage.addComputer(COMPUTER_NAME, INTRODUCED_DATA, DISCOTINUED_DATA, COMPUTER_COMPANY);

        cy.log("THEN the computer should not be added and an error should be displayed to the user.")
        const ERROR_MESSAGE = "Discontinued date is before introduction date"
        addComputerPage.verifyDateError("discotinued", ERROR_MESSAGE);
    })

    it('Test case 06: Add a new computer without name', () => {
        cy.log("GIVEN the user in the computer creation page without filling any field")
        computersPage.clickToAddNewComputer();

        cy.log("WHEN the user performs the computer creation action.")
        addComputerPage.clickToCreateComputer();

        cy.log("THEN the computer should not be added and an error should be displayed to the user.")
        const ERROR_MESSAGE = "Failed to refine type"
        addComputerPage.verifyEmptyNameError(ERROR_MESSAGE);
    })
  
})