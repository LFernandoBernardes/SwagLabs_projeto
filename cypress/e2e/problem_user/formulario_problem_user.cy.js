import LoginPage from "../../pages/loginpage"
import ProductsPage from "../../pages/productspage"
import FormularioPage from "../../pages/formulariopage"
import CartListPage from "../../pages/cartlistpage"


const loginPage = new LoginPage()
const productspage = new ProductsPage()
const formulariopage = new FormularioPage()
const cartlistpage = new CartListPage()

describe('Formulário problem_user', () => {

  beforeEach(() =>{
    loginPage.accessLoginPage()
    loginPage.loginSuccessUser('problem_user','secret_sauce')
    productspage.backpack_ADD()
    cartlistpage.visitCart()
    cartlistpage.visitOverview()
  
  })

  it('Formulario Bem sucedido', () =>{
    formulariopage.formularioComplete('Fernando','Bernardes', '90590170')

  })

  it('Formulario Invalido Sem FirstName', () =>{
    formulariopage.formInváldioFirstnameEmpty('Bernardes', '90590170')

  })

  it('Formulario Invalido Sem LastName', () =>{
    formulariopage.formInváldioLastnameEmpty('Fernando', '90590170')

  })

  it('Formulario Invalido Sem ZipCode', () =>{
    formulariopage.formInváldioZipCodeEmpty('Fernando', 'Bernardes')

  })

})
