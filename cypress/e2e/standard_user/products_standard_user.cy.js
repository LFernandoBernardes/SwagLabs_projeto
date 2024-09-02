import LoginPage from "../../pages/loginpage"
import ProductsPage from "../../pages/productspage"
import FormularioPage from "../../pages/formulariopage"
import CartListPage from "../../pages/cartlistpage"


const loginPage = new LoginPage()
const productspage = new ProductsPage()
const formulariopage = new FormularioPage()
const cartlistpage = new CartListPage()

describe('Products standard_user', () => {

  beforeEach(() =>{
    loginPage.accessLoginPage()
    loginPage.loginSuccessUser('standard_user','secret_sauce')
  
  })
 

it('Adcionar Produtos',() =>{
  productspage.backpack_ADD()
  productspage.contadorCart('1')
  productspage.bike_Light_ADD()
  productspage.contadorCart('2')
  productspage.bolt_TShirt_ADD()
  productspage.contadorCart('3')
  productspage.fleece_Jacket_ADD()
  productspage.contadorCart('4')
  productspage.onesie_ADD()
  productspage.contadorCart('5')
  productspage.test_All_Things_TShirt_ADD()
  productspage.contadorCart('6')
  productspage.backpack_REMOVE()
  productspage.contadorCart('5')
  productspage.bike_Light_REMOVE()
  productspage.contadorCart('4')
  productspage.bolt_TShirt_REMOVE()
  productspage.contadorCart('3')
  productspage.fleece_Jacket_REMOVE()
  productspage.contadorCart('2')
  productspage.onesie_REMOVE()
  productspage.contadorCart('1')
  productspage.test_All_Things_TShirt_REMOVE()

})

it('Detalhes dos Produtos', () =>{
  productspage.backpack_Details()
  productspage.bike_Light_Details()
  productspage.bolt_TShirt_Details()
  productspage.fleece_Jacket_Details()
  productspage.onesie_Details()
  productspage.test_All_Things_TShirt_Details()
})


})