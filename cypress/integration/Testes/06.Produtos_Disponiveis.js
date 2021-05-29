/// <reference types="cypress" />
///<reference path="C:\Users\Mello\Desktop\MediPreco\cypress\support\commands.js" />

describe('Meu Teste', function () {
    it('Teste de Produtos Disponíveis', function () {
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

    });
})
