class addComputerPage {
    
    elements = {
        computerNameInput : () => cy.get("[id='name']"),
        computerIntroducedDateInput : () => cy.get("[id='introduced']"),
        computerDiscotinuedDateInput : () => cy.get("[id='discontinued']"),
        companySelector : () => cy.get("[id='company']"),
        createComputerButton : () => cy.get("[type='submit'][class='btn primary']"),
        inputsList : () => cy.get("[class='input']")
    }

    addComputer (name, introducedDate, discotinuedDate, company) {
        this.addComputerName(name)
        this.addComputerIntroducedDate(introducedDate)
        this.addComputerDiscotinuedDate(discotinuedDate)
        this.selectComputerCompany(company)
        this.clickToCreateComputer()
    }

    addComputerWithOnlyNameFilled (name) {
        this.addComputerName(name)
        this.clickToCreateComputer()
    }

    addComputerName (name) {
        this.elements.computerNameInput().type(name)
    }

    addComputerIntroducedDate (date) {
        this.elements.computerIntroducedDateInput().type(date)
    }

    addComputerDiscotinuedDate (date) {
        this.elements.computerDiscotinuedDateInput().type(date)
    }

    selectComputerCompany (company) {
        this.elements.companySelector().select(company)
    }

    clickToCreateComputer () {
        this.elements.createComputerButton().click()
    }

    verifyDateError (dateField, errorMessage) {
        if (dateField == "introduced") {
            this.elements.inputsList().eq(1).contains(errorMessage)
            return
        }
        if (dateField == "discotinued") {
            this.elements.inputsList().eq(2).contains(errorMessage)
            return
        }
        cy.log("The validation of date only occurs on introduced or discotinued dates fields.")
    }

    verifyEmptyNameError (errorMessage) {
        this.elements.inputsList().eq(0).contains(errorMessage)
    }

}

module.exports = new addComputerPage();