class ProductsPage {

    selectorsList() {
        const selectors = {
            buttonProduct: '.btn_inventory',
            contadorCart: '.shopping_cart_badge',
            titlePage: '.subheader',
            cartList: '.cart_list',
            nameProduct: '.inventory_item_name',
            checkoutButton: '.checkout_button',
            detalhesProduto: '.inventory_details_name',
            detalhesPreço: '.inventory_details_price',
            backButton: '.inventory_details_back_button'
        
        }

        return selectors
    }

    selectOneProdut (){
        cy.get(this.selectorsList().buttonProduct).eq(0).click()
        cy.get(this.selectorsList().buttonProduct).eq(0).should('be.visible', 'REMOVE')
        cy.get(this.selectorsList().contadorCart).should('be.visible').contains('1')
        
    }

    
    backpack_Details(){
        cy.get(this.selectorsList().nameProduct).eq(0).should('be.visible', 'Sauce Labs Backpack').click()
        cy.get(this.selectorsList().detalhesProduto).should('be.visible', 'Sauce Labs Backpack')
        cy.get(this.selectorsList().detalhesPreço).should('be.visible', '$29.99')
        cy.get(this.selectorsList().backButton).click()
    }

    backpack_ADD(){
        cy.get(this.selectorsList().buttonProduct).eq(0).click()
        cy.get(this.selectorsList().buttonProduct).eq(0).should('be.visible', 'REMOVE')
        cy.get(this.selectorsList().contadorCart).should('be.visible').contains('1')


    }

    backpack_REMOVE(){
        cy.get(this.selectorsList().buttonProduct).eq(0).click()
        cy.get(this.selectorsList().buttonProduct).eq(0).should('be.visible', 'ADD TO CART')

    }


    bike_Light_Details(){
        cy.get(this.selectorsList().nameProduct).eq(1).should('be.visible', 'Bike Light').click()
        cy.get(this.selectorsList().detalhesProduto).should('be.visible', 'Sauce Labs Bike Light')
        cy.get(this.selectorsList().detalhesPreço).should('be.visible', '$9.99')
        cy.get(this.selectorsList().backButton).click()

    }

    bike_Light_ADD(){
        cy.get(this.selectorsList().buttonProduct).eq(1).click()
        cy.get(this.selectorsList().buttonProduct).eq(1).should('be.visible', 'REMOVE')
        
    }

    bike_Light_REMOVE(){
        cy.get(this.selectorsList().buttonProduct).eq(1).click()
        cy.get(this.selectorsList().buttonProduct).eq(1).should('be.visible', 'ADD TO CART')
    }


    bolt_TShirt_ADD(){
        cy.get(this.selectorsList().buttonProduct).eq(2).click()
        cy.get(this.selectorsList().buttonProduct).eq(2).should('be.visible', 'REMOVE')
    }

    bolt_TShirt_REMOVE(){
        cy.get(this.selectorsList().buttonProduct).eq(2).click()
        cy.get(this.selectorsList().buttonProduct).eq(2).should('be.visible', 'ADD TO CART')
    }

    bolt_TShirt_Details(){
        cy.get(this.selectorsList().nameProduct).eq(2).should('be.visible', 'Sauce Labs Bolt T-Shirt').click()
        cy.get(this.selectorsList().detalhesProduto).should('be.visible', 'Sauce Labs Bolt T-Shirt')
        cy.get(this.selectorsList().detalhesPreço).should('be.visible', '$15.99')
        cy.get(this.selectorsList().backButton).click()

    }

    fleece_Jacket_Details(){
        cy.get(this.selectorsList().nameProduct).eq(3).should('be.visible', 'Sauce Labs Fleece Jacket').click()
        cy.get(this.selectorsList().detalhesProduto).should('be.visible', 'Sauce Labs Fleece Jacket')
        cy.get(this.selectorsList().detalhesPreço).should('be.visible', '$49.99')
        cy.get(this.selectorsList().backButton).click()
    }

    fleece_Jacket_ADD(){
        cy.get(this.selectorsList().buttonProduct).eq(3).click()
        cy.get(this.selectorsList().buttonProduct).eq(3).should('be.visible', 'REMOVE')
    }

    fleece_Jacket_REMOVE(){
        cy.get(this.selectorsList().buttonProduct).eq(3).click()
        cy.get(this.selectorsList().buttonProduct).eq(3).should('be.visible', 'ADD TO CART')
    }

  

    onesie_Details(){
        cy.get(this.selectorsList().nameProduct).eq(4).should('be.visible', 'Sauce Labs Onesie').click()
        cy.get(this.selectorsList().detalhesProduto).should('be.visible', 'Sauce Labs Onesie')
        cy.get(this.selectorsList().detalhesPreço).should('be.visible', '$7.99')
        cy.get(this.selectorsList().backButton).click()
    }

    
    onesie_ADD(){
        cy.get(this.selectorsList().buttonProduct).eq(4).click()
        cy.get(this.selectorsList().buttonProduct).eq(4).should('be.visible', 'REMOVE')
    }

    onesie_REMOVE(){
        cy.get(this.selectorsList().buttonProduct).eq(4).click()
        cy.get(this.selectorsList().buttonProduct).eq(4).should('be.visible', 'ADD TO CART')

    }

    test_All_Things_TShirt_Details(){
        cy.get(this.selectorsList().nameProduct).eq(5).should('be.visible', 'Test.allTheThing() T-Shirt(Red)').click()
        cy.get(this.selectorsList().detalhesProduto).should('be.visible', 'Test.allTheThing() T-Shirt(Red)')
        cy.get(this.selectorsList().detalhesPreço).should('be.visible', '$15.99')
        cy.get(this.selectorsList().backButton).click()
    }

    test_All_Things_TShirt_ADD(){
        cy.get(this.selectorsList().buttonProduct).eq(5).click()
        cy.get(this.selectorsList().buttonProduct).eq(5).should('be.visible', 'REMOVE')
    }
    test_All_Things_TShirt_REMOVE(){
        cy.get(this.selectorsList().buttonProduct).eq(5).click()
        cy.get(this.selectorsList().buttonProduct).eq(5).should('be.visible', 'ADD TO CART')

    }

    contadorCart(number){
        cy.get(this.selectorsList().contadorCart).should('be.visible').contains(number)
    }

   
}

export default ProductsPage