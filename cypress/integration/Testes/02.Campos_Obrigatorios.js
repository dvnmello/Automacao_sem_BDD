/// <reference types="cypress" />
///<reference path="C:\Users\Mello\Desktop\MediPreco\cypress\support\commands.js" />

describe('Meu Teste', function () {
    it('Teste dos Campos Obrigatórios', function () {
        //Criado comando para abrir o site.
        cy.visit('https://www.saucedemo.com');
        //Verificar os campos e se estão em branco.
        cy.get('[data-test=username]').should('have.value', '')
        cy.get('[data-test=password]').should('have.value', '')
        //Clicar para acessar
        cy.get('[data-test=login-button]').click()
        //mensagem de erro esperada
        cy.get('.error-message-container').contains('Epic sadface: Username is required')
        cy.get('form > :nth-child(1) > .svg-inline--fa > path')
        cy.get(':nth-child(2) > .svg-inline--fa > path')



    });
})
