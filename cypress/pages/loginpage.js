class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField: '[data-test="username"]' ,
            passwordField: '[data-test="password"]' ,
            loginButton: '#login-button',
            wrongCredentialAlert: '.error-button',
            titleProducts: '.product_label',
            

        
        }

        return selectors
    }

    accessLoginPage(){
        cy.visit('https://www.saucedemo.com/v1/index.html') 
    }

    loginSuccessUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().usernameField).should('have.value', username)
        cy.get(this.selectorsList().passwordField).should('have.value', password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().titleProducts).should('be.visible', 'Products')
    }



    loginLockedUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().usernameField).should('have.value', username)
        cy.get(this.selectorsList().passwordField).should('have.value', password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredentialAlert).should('be.visible')
        cy.get('[data-test="error"]').contains( 'Sorry, this user has been locked out.')

    }

    loginInvalid(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().usernameField).should('have.value', username)
        cy.get(this.selectorsList().passwordField).should('have.value', password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredentialAlert).should('be.visible')
        cy.get('[data-test="error"]').contains('Error: Last Name is required')

    }
}

export default LoginPage
