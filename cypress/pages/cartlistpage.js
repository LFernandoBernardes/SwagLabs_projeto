import ProductsPage from "./productspage"

class CartListPage {

    selectorsList() {
        const selectors = {
            buttonProduct: '.btn_inventory',
            contadorCart: '.shopping_cart_badge',
            titlePage: '.subheader',
            cartList: '.cart_list',
            nameProduct: '.inventory_item_name',
            priceProduct: '.inventory_item_price',
            itemTotal: '.summary_subtotal_label',
            totalPrice: '.summary_total_label',
            checkoutButton: '.btn_action',
            completeContainer: '.checkout_complete_container'
        
        }

        return selectors
    }

    visitCart (){
        cy.get(this.selectorsList().contadorCart).click()
        cy.get(this.selectorsList().titlePage).contains('Your Cart')
        cy.get(this.selectorsList().cartList).should('be.visible')

    }

    checkCart (){
        cy.get(this.selectorsList().contadorCart).click()
        cy.get(this.selectorsList().titlePage).contains('Your Cart')
        cy.get(this.selectorsList().cartList).should('be.visible')
        cy.get(this.selectorsList().nameProduct).eq(0).should('be.visible','Sauce Labs Backpack')
        cy.get(this.selectorsList().checkoutButton).click()

    }

    visitOverview(){
        cy.get(this.selectorsList().checkoutButton).click()
    }

    cartOverviewCheck(){
        cy.get(this.selectorsList().cartList).should('be.visible')
        cy.get(this.selectorsList().nameProduct).eq(0).should('be.visible','Sauce Labs Backpack')
        cy.get(this.selectorsList().priceProduct).eq(0).should('be.visible','$29.99')
        cy.get(this.selectorsList().totalPrice).should('be.visible', '$32.39')
        cy.get(this.selectorsList().checkoutButton).click()
        cy.get(this.selectorsList().completeContainer).should('be.visible')
    }


    valeuOverviewCheck3produtos(){
        cy.get(this.selectorsList().cartList).should('be.visible')
        cy.get(this.selectorsList().itemTotal).should('be.visible','$55.97')
        cy.get(this.selectorsList().totalPrice).should('be.visible','$60.45')
        cy.get(this.selectorsList().checkoutButton).click()
        cy.get(this.selectorsList().completeContainer).should('be.visible')       

    }

}

export default CartListPage