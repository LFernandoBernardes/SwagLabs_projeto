import LoginPage from "../pages/loginpage"

const loginPage = new LoginPage()

describe('Pagina Login', () => {

  beforeEach(() =>{
    loginPage.accessLoginPage()
  
  })

  it('Title Swag Labs', () =>{
    loginPage.accessLoginPage()
    cy.title().should('be.equal', 'Swag Labs')

  })
  

  it('Login {standar_user}', () => {
    loginPage.loginSuccessUser('standard_user','secret_sauce')
  
  })

it('Login {locked_out_user}', () => {
  loginPage.loginLockedUser('locked_out_user', 'secret_sauce')
})

it('Login {problem_user}', () => {
  loginPage.loginSuccessUser('problem_user','secret_sauce')
})

it('Login {performance_glitch_user}', () => {
  loginPage.loginSuccessUser('performance_glitch_user','secret_sauce')
})

it('Invalid Login Wrong Username', () =>{
  loginPage.loginInvalid('Wrong_user', 'secret_sauce')
})

it('Invalid Login Wrong Password', () =>{
  loginPage.loginInvalid('standard_user', 'sauce')
})


})