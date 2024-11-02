import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import Log from './Log';

describe('<Log />', () => {
    beforeEach(() => {
        mount(
            <MemoryRouter>
                <Log />
            </MemoryRouter>
        );
    });

    it('renders the login title', () => {
        cy.contains('Вхід').should('be.visible');
    });

    it('renders the email input field', () => {
        cy.get('input[placeholder="Електронна пошта"]').should('be.visible');
    });

    it('renders the password input field', () => {
        cy.get('input[placeholder="Пароль"]').should('be.visible');
    });

    it('renders the "Увійти" button', () => {
        cy.contains('Увійти').should('be.visible');
    });

    it('renders the "Немає облікового запису?" text', () => {
        cy.contains('Немає облікового запису?').should('be.visible');
    });

    it('allows the user to input email and password', () => {
        cy.get('input[placeholder="Електронна пошта"]').type('test@example.com');
        cy.get('input[placeholder="Пароль"]').type('validpassword');
        cy.get('input[placeholder="Електронна пошта"]').should('have.value', 'test@example.com');
        cy.get('input[placeholder="Пароль"]').should('have.value', 'validpassword');
    });

});
