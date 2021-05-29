/// <reference types="cypress" />
///<reference path="C:\Users\Mello\Desktop\MediPreco\cypress\support\commands.js" />

describe('Meu Teste', function () {
    it('Teste para Remover Produtos', function () {
        //Criado comando para abrir o site.
        cy.visitar();

        //Standard_user
        //Validação dos campos e preenchimento destes com dados corretos.
        cy.get('[data-test=username]').should('have.value', '').type('standard_user')
        cy.get('[data-test=password]').should('have.value', '').type('secret_sauce')

        //Submit das informações
        cy.get('[data-test=login-button]').click()

        //Verificação da página
        cy.get('.title').contains('Products')
        //Verificação se na lista possui 6 itens
        cy.get('.inventory_list')
        cy.get('.inventory_item').should('have.length', 6)

        //Verificação se na lista tem os dois produtos
        cy.get('#item_4_title_link > .inventory_item_name').contains('Sauce Labs Backpack')
        cy.get('#item_3_title_link > .inventory_item_name').contains('Test.allTheThings')

        //verifica se o icone do carrinho está zerado, uma vez que ao ter item ele se torna uma Badge
        cy.get('.shopping_cart_link')

        //Adicionando todos os produtos ao carrinho
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()

        //verificando se o carrinho possui 6 produtos
        cy.get('.shopping_cart_badge').contains(6)
        cy.get('.shopping_cart_link').click()
        cy.get(':nth-child(3) > .cart_quantity').contains(1)
        cy.get(':nth-child(4) > .cart_quantity').contains(1)
        cy.get(':nth-child(5) > .cart_quantity').contains(1)
        cy.get(':nth-child(6) > .cart_quantity').contains(1)
        cy.get(':nth-child(7) > .cart_quantity').contains(1)
        cy.get(':nth-child(8) > .cart_quantity').contains(1)

        //Verifica se tem o botão Checkout

        cy.get('[data-test=checkout]')

        //Remove todos os itens do carrinho verificando se muda o número no carrinho.
        cy.get('[data-test=remove-sauce-labs-backpack]').click()
        cy.get('.shopping_cart_badge').contains(5)
        cy.get('[data-test=remove-sauce-labs-bike-light]').click()
        cy.get('.shopping_cart_badge').contains(4)
        cy.get('[data-test=remove-sauce-labs-bolt-t-shirt]').click()
        cy.get('.shopping_cart_badge').contains(3)
        cy.get('[data-test=remove-sauce-labs-fleece-jacket]').click()
        cy.get('.shopping_cart_badge').contains(2)
        cy.get('[data-test=remove-sauce-labs-onesie]').click()
        cy.get('.shopping_cart_badge').contains(1)
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()

        //verifica se o icone do carrinho está zerado, uma vez que ao ter item ele se torna uma Badge
        cy.get('.shopping_cart_link')


    });
})
