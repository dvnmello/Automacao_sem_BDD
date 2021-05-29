/// <reference types="cypress" />
///<reference path="C:\Users\Mello\Desktop\MediPreco\cypress\support\commands.js" />

describe('Meu Teste', function () {
    it('Teste para Adicionar Produto', function () {
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

        //Adicionando todos os produtos ao carrinho
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()


    });
})
