class FormularioPage {

    selectorsList() {
        const selectors = {
            firstnamePlaceholder: '[data-test="firstName"]',
            lastnamePlaceholder: '[data-test="lastName"]',
            zipcodePlaceholder: '[data-test="postalCode"]',
            submitButton: '.btn_primary',
            checkoutSumamary:'.checkout_summary_container'
           
        
        }

        return selectors
    }

    formularioComplete (firstName, lastName, zipCode){
        cy.get(this.selectorsList().firstnamePlaceholder).clear().type(firstName)
        cy.get(this.selectorsList().lastnamePlaceholder).clear().type(lastName)
        cy.get(this.selectorsList().firstnamePlaceholder).should('have.value',firstName)
        cy.get(this.selectorsList().lastnamePlaceholder).should('have.value',lastName)
        cy.get(this.selectorsList().zipcodePlaceholder).clear().type(zipCode)
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().checkoutSumamary).should('be.visible')
    }

    formInváldioFirstnameEmpty (lastName, zipCode){
       // cy.get(this.selectorsList().firstnamePlaceholder).clear().type(firstName)
        cy.get(this.selectorsList().lastnamePlaceholder).clear().type(lastName)
        cy.get(this.selectorsList().zipcodePlaceholder).clear().type(zipCode)
        cy.get(this.selectorsList().submitButton).click()
        cy.get('[data-test="error"]').should('be.visible','Error: First Name is required')
        
    }

    formInváldioLastnameEmpty (firstName, zipCode){
         cy.get(this.selectorsList().firstnamePlaceholder).clear().type(firstName)
         //cy.get(this.selectorsList().lastnamePlaceholder).clear().type(lastName)
         cy.get(this.selectorsList().zipcodePlaceholder).clear().type(zipCode)
         cy.get(this.selectorsList().submitButton).click()
         cy.get('[data-test="error"]').should('be.visible','Error: Last Name is required')
    
     }

     formInváldioZipCodeEmpty (firstName, lastName,){
        cy.get(this.selectorsList().firstnamePlaceholder).clear().type(firstName)
        cy.get(this.selectorsList().lastnamePlaceholder).clear().type(lastName)
        // cy.get(this.selectorsList().zipcodePlaceholder).clear().type(zipCode)
        cy.get(this.selectorsList().submitButton).click()
        cy.get('[data-test="error"]').should('be.visible','Error: Postal Code is required')
   
    }

}


export default FormularioPage