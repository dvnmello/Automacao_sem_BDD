/// <reference types="cypress" />
///<reference path="C:\Users\Mello\Desktop\MediPreco\cypress\support\commands.js" />

describe('Meu Teste', function () {
    it('Teste da Descrição dos Produtos', function () {
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
        //Verificando a descrição do primeiro item checando nome e preço
        cy.get('#item_4_img_link > .inventory_item_img').click()
        cy.get('.inventory_details_desc_container')
        cy.get('.inventory_details_name').contains('Sauce Labs Backpack')
        cy.get('.inventory_details_price').contains(29.99)
        cy.get('[data-test=back-to-products]').click()
        //Verificando a descrição do segundo item checando nome e preço
        cy.get('#item_0_img_link > .inventory_item_img').click()
        cy.get('.inventory_details_desc_container')
        cy.get('.inventory_details_name').contains('Sauce Labs Bike Light')
        cy.get('.inventory_details_price').contains('9.99')
        cy.get('[data-test=back-to-products]').click()
        //Verificando a descrição do terceiro item checando nome e preço
        cy.get('#item_1_img_link > .inventory_item_img').click()
        cy.get('.inventory_details_desc_container')
        cy.get('.inventory_details_name').contains('Sauce Labs Bolt T-Shirt')
        cy.get('.inventory_details_price').contains(15.99)
        cy.get('[data-test=back-to-products]').click()
        //Verificando a descrição do quarto item checando nome e preço
        cy.get('#item_5_img_link > .inventory_item_img').click()
        cy.get('.inventory_details_desc_container')
        cy.get('.inventory_details_name').contains('Sauce Labs Fleece Jacket')
        cy.get('.inventory_details_price').contains(49.99)
        cy.get('[data-test=back-to-products]').click()
        //Verificando a descrição do quinto item checando nome e preço
        cy.get('#item_2_img_link > .inventory_item_img').click()
        cy.get('.inventory_details_desc_container')
        cy.get('.inventory_details_name').contains('Sauce Labs Onesie')
        cy.get('.inventory_details_price').contains(7.99)
        cy.get('[data-test=back-to-products]').click()
        //Verificando a descrição do sexto item checando nome e preço
        cy.get('#item_3_img_link > .inventory_item_img').click()
        cy.get('.inventory_details_desc_container')
        cy.get('.inventory_details_name').contains('Test.allTheThings')
        cy.get('.inventory_details_price').contains(15.99)
        cy.get('[data-test=back-to-products]').click()


    });
})
