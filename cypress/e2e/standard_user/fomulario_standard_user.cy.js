import LoginPage from "../../pages/loginpage"
import ProductsPage from "../../pages/productspage"
import FormularioPage from "../../pages/formulariopage"
import CartListPage from "../../pages/cartlistpage"


const loginPage = new LoginPage()
const productspage = new ProductsPage()
const formulariopage = new FormularioPage()
const cartlistpage = new CartListPage()

describe('login standard_user', () => {

  beforeEach(() =>{
    loginPage.accessLoginPage()
    loginPage.loginSuccessUser('standard_user','secret_sauce')
  
  })

  it('Formulario Bem sucedido', () =>{
    productspage.backpack_ADD()
    cartlistpage.visitCart()
    formulariopage.formularioComplete('Fernando','Bernardes', '90590170')

  })

  it.only('Formulario Invalido Sem FirstName', () =>{
    productspage.backpack_ADD()
    cartlistpage.visitCart()
    formulariopage.formInváldioFirstnameEmpty('Bernardes', '90590170')

  })

  it.only('Formulario Invalido Sem LastName', () =>{
    productspage.backpack_ADD()
    cartlistpage.visitCart()
    formulariopage.formInváldioLastnameEmpty('Fernando', '90590170')

  })

  it.only('Formulario Invalido Sem ZipCode', () =>{
    productspage.backpack_ADD()
    cartlistpage.visitCart()
    formulariopage.formInváldioZipCodeEmpty('Fernando', 'Bernardes')

  })

})
