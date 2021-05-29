/// <reference types="cypress" />
/// <reference path="C:\Users\Mello\Desktop\MediPreco\cypress\support\commands.js" />

describe('Meu Teste', function () {
    it('Teste de sign in', function () {
        //Acesso à página com click na opção de Sign In
        cy.visit('/')
        //Verificação da página
        cy.url().should('include', 'saucedemo.com')
        cy.get('.login_logo')

    });
})