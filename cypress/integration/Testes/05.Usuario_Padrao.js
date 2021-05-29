/// <reference types="cypress" />
///<reference path="C:\Users\Mello\Desktop\MediPreco\cypress\support\commands.js" />

describe('Meu Teste', function () {
    it('Teste do Usuário Padrão', function () {
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



    });
})
