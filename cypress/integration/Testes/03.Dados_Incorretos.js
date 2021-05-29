/// <reference types="cypress" />
///<reference path="C:\Users\Mello\Desktop\MediPreco\cypress\support\commands.js" />

describe('Meu Teste', function () {
    it('Teste de Dados Incorretos', function () {
        //Criado comando para abrir o site.
        cy.visitar();

        //Validação dos campos e preenchimento com dados incorretos
        cy.get('[data-test=username]').should('have.value', '').type('12345')
        cy.get('[data-test=password]').should('have.value', '').type('12345')
        //Submit das informações
        cy.get('[data-test=login-button]').click()

        //Mensagem de erro esperada
        cy.get('[data-test=error]')
    });
})
