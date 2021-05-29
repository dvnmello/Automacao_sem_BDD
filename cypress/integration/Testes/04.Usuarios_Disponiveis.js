/// <reference types="cypress" />
///<reference path="C:\Users\Mello\Desktop\MediPreco\cypress\support\commands.js" />

describe('Meu Teste', function () {
    it('Teste de Usuários Disponíveis', function () {
        //Criado comando para abrir o site.
        cy.visitar();

        //Standard_user
        //Validação dos campos e preenchimento destes com dados corretos.
        cy.get('[data-test=username]').should('have.value', '').type('standard_user')
        cy.get('[data-test=password]').should('have.value', '').type('secret_sauce')
        //Submit das informações
        cy.get('[data-test=login-button]').click()

        //Acesso ao menu
        cy.get('#react-burger-menu-btn').click()
        //Opção de logout
        cy.get('#logout_sidebar_link').click()

        //Locked_out_user
        //Validação dos campos e preenchimento destes com dados corretos.
        cy.get('[data-test=username]').should('have.value', '').type('locked_out_user')
        cy.get('[data-test=password]').should('have.value', '').type('secret_sauce')
        //Submit das informações
        cy.get('[data-test=login-button]').click()
        //Verificação de erro do usuário bloqueado
        cy.get('.error-button > .svg-inline--fa > path')

        //Limpar os campos de Username e Password
        cy.get('[data-test=username]').clear()
        cy.get('[data-test=password]').clear()

        //Problem_user    
        //Validação dos campos e preenchimento destes com dados corretos.
        cy.get('[data-test=username]').should('have.value', '').type('problem_user')
        cy.get('[data-test=password]').should('have.value', '').type('secret_sauce')
        //Submit das informações
        cy.get('[data-test=login-button]').click()
        //Acesso ao menu
        cy.get('#react-burger-menu-btn').click()
        //Opção de logout
        cy.get('#logout_sidebar_link').click()

        //Performance_glitch_user
        //Validação dos campos e preenchimento destes com dados corretos.
        cy.get('[data-test=username]').should('have.value', '').type('performance_glitch_user')
        cy.get('[data-test=password]').should('have.value', '').type('secret_sauce')
        //Submit das informações
        cy.get('[data-test=login-button]').click()
        //Acesso ao menu
        cy.get('#react-burger-menu-btn').click()
        //Opção de logout
        cy.get('#logout_sidebar_link').click()






    });
})
