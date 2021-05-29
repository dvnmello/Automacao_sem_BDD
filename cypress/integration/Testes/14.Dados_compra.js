/// <reference types="cypress" />
///<reference path="C:\Users\Mello\Desktop\MediPreco\cypress\support\commands.js" />

describe('Meu Teste', function () {
    it('Teste dos Dados para Finalizar Compra', function () {
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

        //Verifica e clica se tem o botão Checkout    
        cy.get('[data-test=checkout]').click()

        //Verifica página e preenche os campos de Nome, Último nome e ZIP
        cy.get('.title').contains('Checkout: Your Information')
        cy.get('[data-test=firstName]').type('Diego')
        cy.get('[data-test=lastName]').type('Mello')
        cy.get('[data-test=postalCode]').type('73507520')
        //Faz o Submit das informações
        cy.get('[data-test=continue]').click()
        //Verifica se tem 6 itens para compra
        cy.get('.cart_list')
        cy.get('.cart_item').should('have.length', 6)
        //Verifica método de pagamento
        cy.get('.summary_info > :nth-child(1)')
        cy.get('.summary_info > :nth-child(2)').contains('SauceCard')
        //Verifica valor dos itens, valor da taxa e valor total
        cy.get('.summary_subtotal_label').contains(129.94)
        cy.get('.summary_tax_label').contains(10.40)
        cy.get('.summary_total_label').contains(140.34)
        //Tira screenshot para evidenciar que não dá opção para preencher mais detalhes do endereço
        cy.screenshot('Erro endereço')

    });
})
