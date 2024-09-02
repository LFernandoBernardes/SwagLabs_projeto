import LoginPage from "../../pages/loginpage"
import ProductsPage from "../../pages/productspage"
import FormularioPage from "../../pages/formulariopage"
import CartListPage from "../../pages/cartlistpage"


const loginPage = new LoginPage()
const productspage = new ProductsPage()
const formulariopage = new FormularioPage()
const cartlistpage = new CartListPage()

describe('Smoke - Comprar Produtos -  standard_user', () => {

  beforeEach(() =>{
    loginPage.accessLoginPage()
    loginPage.loginSuccessUser('standard_user','secret_sauce')
  
  })

it('Realizar uma compra Sauce Labs Backpack - Smoke Test', () =>{
  productspage.backpack_ADD()
  cartlistpage.checkCart()
  formulariopage.formularioComplete('luiz','fernando','90556105')
  cartlistpage.cartOverviewCheck()
  
})

it('Comprar mais de um produto checar os valores', () => {
    productspage.backpack_ADD()
    productspage.bike_Light_ADD()
    productspage.bolt_TShirt_ADD()
    cartlistpage.visitCart()
    cartlistpage.visitOverview()
    formulariopage.formularioComplete('Fernando','Bernardes','90456185')
    productspage.backpack_Details()
    productspage.bike_Light_Details()
    productspage.bolt_TShirt_Details()
    cartlistpage.valeuOverviewCheck3produtos()

})

it('Remover um produto do Carrinho', () =>{
    productspage.backpack_ADD()
    productspage.bike_Light_ADD()
    productspage.bolt_TShirt_ADD()
    cartlistpage.visitCart()
    cartlistpage.visitOverview()
    formulariopage.formularioComplete('Fernando','Bernardes','90456185')
    productspage.backpack_REMOVE_on_Overview()
    cartlistpage.valeuOverviewAfeterRemove()


})

})