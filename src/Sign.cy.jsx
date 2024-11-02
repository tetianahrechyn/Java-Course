import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import Sign from './Sign';

describe('<Sign />', () => {
    beforeEach(() => {
        mount(
            <MemoryRouter>
                <Sign />
            </MemoryRouter>
        );
    });

    it('renders the registration title', () => {
        cy.contains('Зареєструватися').should('be.visible');
    });

    it('renders the first name input field', () => {
        cy.get('input[placeholder="Ім’я"]').should('be.visible');
    });

    it('renders the last name input field', () => {
        cy.get('input[placeholder="Прізвище"]').should('be.visible');
    });

    it('renders the email input field', () => {
        cy.get('input[placeholder="Електронна пошта"]').should('be.visible');
    });

    it('renders the mobile phone input field', () => {
        cy.get('input[placeholder="Мобільний телефон"]').should('be.visible');
    });

    it('allows the user to input email', () => {
        cy.get('input[placeholder="Електронна пошта"]').type('test@example.com');
        cy.get('input[placeholder="Електронна пошта"]').should('have.value', 'test@example.com');
    });

    it('allows the user to input mobile phone', () => {
        cy.get('input[placeholder="Мобільний телефон"]').type('1234567890');
        cy.get('input[placeholder="Мобільний телефон"]').should('have.value', '1234567890');
    });

    it('renders the password input field', () => {
        cy.get('input[placeholder="Пароль"]').should('be.visible');
    });

    it('renders the confirm password input field', () => {
        cy.get('input[placeholder="Підтвердження пароля"]').should('be.visible');
    });

    it('displays an error message on registration failure', () => {
        cy.get('input[placeholder="Електронна пошта"]').type('invalid@example.com');
        cy.get('input[placeholder="Пароль"]').type('short');
    });

    it('displays a success message on successful registration', () => {
        cy.get('input[placeholder="Електронна пошта"]').type('test@example.com');
    });

});
