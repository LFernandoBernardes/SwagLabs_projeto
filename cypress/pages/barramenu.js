import ProductsPage from "./productspage"

const productPage = new ProductsPage()

class BarraMenu {

    selectorList () {

        const selectors ={ 
            menuButton: '.bm-burger-button > button',
            menuList: '.bm-item-list',
            allItemsButton:'.bm-item-list',
            aboutButton:'#about_sidebar_link',
            logoutButton:'#logout_sidebar_link',
            resetAppStateButton: '#reset_sidebar_link',
            closemenuButton: '.bm-cross-button',
            itemMenuButton: '.bm-item',
            productList: '.inventory_container',
            loginWallpaper: '.login_wrapper-inner'
        }

        return selectors
    }

    checkMenu() {
        cy.get(this.selectorList().menuButton).click()
        cy.get(this.selectorList().menuList).should('be.visible')
    }

    checkAllitem() {
        cy.get(this.selectorList().menuButton).click()
        cy.get(this.selectorList().menuList).should('be.visible')
        cy.get(this.selectorList().itemMenuButton).eq(0).click()
        cy.get(this.selectorList().productList).should('be.visible')


    }

    checkAbout() {
        cy.get(this.selectorList().itemMenuButton).eq(1).click()
        cy.title().should('be.equal','Sauce Labs:')     

    }

    checkLogout() {
        cy.get(this.selectorList().menuButton).click()
        cy.get(this.selectorList().menuList).should('be.visible')
        cy.get(this.selectorList().itemMenuButton).eq(2).click()
        cy.get(this.selectorList().loginWallpaper).should('be.visible')
    }

    checkResetappSatte() {
        productPage.backpack_ADD()
        cy.get(this.selectorList().menuButton).click()
        cy.get(this.selectorList().menuList).should('be.visible')
        cy.get(this.selectorList().itemMenuButton).eq(3).click()
        cy.get(this.selectorList().closemenuButton).click()
        cy.get(productPage.selectorsList().buttonProduct).eq(0).contains('ADD TO CART')
    }

    checkCloseMenu() {
        cy.get(this.selectorList().menuButton).click()
        cy.get(this.selectorList().menuList).should('be.visible')
        cy.get(this.selectorList().closemenuButton).click()
    }

}


export default BarraMenu 

