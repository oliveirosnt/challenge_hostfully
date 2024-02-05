class computersPage {
    
    elements = {
        addNewComputerButton : () => cy.get("[id='add']"),
        computerCreatedMessage : () => cy.get(".alert-message")
    }

    clickToAddNewComputer () {
        this.elements.addNewComputerButton().click()
    }

    verifyComputerCreatedMessage (computerName) {
        this.elements.computerCreatedMessage().contains(computerName)
    }

}

module.exports = new computersPage();