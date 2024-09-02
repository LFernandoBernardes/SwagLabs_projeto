import LoginPage from "../../pages/loginpage";
import BarraMenu from "../../pages/barramenu";

const loginPage = new LoginPage()
const barramenu = new BarraMenu()

describe('login standard_user', () => {

    beforeEach(() =>{
      loginPage.accessLoginPage()
      cy.title().should('be.equal','Swag Labs')  
      loginPage.loginSuccessUser('standard_user','secret_sauce')

    
    })

    it('Barra Menu e Botões', () => {
        barramenu.checkMenu()

    })

    it('Barra All Items', () => {
        barramenu.checkAllitem()
    })

   // it('Barra About', () => {
    //    barramenu.checkMenu()
    //    barramenu.checkAbout()
    // })

    it('Barra Menu Logout', () => {
        barramenu.checkLogout()
    })

    it('Barra Menu Reset App', () => {
        barramenu.checkResetappSatte()
    })

    it('Barra Menu e Close', () => {
        barramenu.checkCloseMenu()

    })



})