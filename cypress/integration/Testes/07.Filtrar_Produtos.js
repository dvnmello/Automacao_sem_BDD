/// <reference types="cypress" />
///<reference path="C:\Users\Mello\Desktop\MediPreco\cypress\support\commands.js" />

describe('Meu Teste', function () {
    it('Teste do Filtro dos Produtos', function () {
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

        //Selecionando a opção para filtrar por alfabeticamente decrescente
        cy.get('[data-test=product_sort_container]').select('Name (Z to A)')

        //Validando ordem verificando primeiro e último item
        cy.get('.inventory_list').first().contains('Test.allTheThings')
        cy.get('.inventory_list').last().contains('Sauce Labs Backpack')

        //Selecionando a opção para filtrar por ordem de preço crescente
        cy.get('[data-test=product_sort_container]').select('Price (low to high)')

        //Validando ordem verificando primeiro e último item   
        cy.get('.inventory_list').first().contains(7.99)
        cy.get('.inventory_list').last().contains(49.99)

        //Selecionando a opção para filtrar por ordem de preço decrescente
        cy.get('[data-test=product_sort_container]').select('Price (high to low)')

        //Validando ordem verificando primeiro e último item
        cy.get('.inventory_list').first().contains(49.99)
        cy.get('.inventory_list').last().contains(7.99)

    });
})
