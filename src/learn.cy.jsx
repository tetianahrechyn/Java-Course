import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import LearnPage from './learn'; // Замініть на правильний шлях до вашого компонента

describe('<LearnPage />', () => {
    beforeEach(() => {
        mount(
            <MemoryRouter>
                <LearnPage />
            </MemoryRouter>
        );
    });


    it('renders the link to "Про нас"', () => {
        cy.get('a').contains('Про нас').should('be.visible');
    });

    it('renders the title "ОСНОВНІ ПОНЯТТЯ"', () => {
        cy.contains('ОСНОВНІ ПОНЯТТЯ').should('be.visible');
    });

    it('renders the main description "Вивчай із задоволенням"', () => {
        cy.contains('Вивчай із').should('be.visible');
        cy.contains('задоволенням').should('be.visible');
    });
    it('renders the link to "Наш курс"', () => {
        cy.get('a').contains('Наш курс').should('be.visible');
    });

    it('renders the link to "Практика"', () => {
        cy.get('a').contains('Практика').should('be.visible');
    });

    it('renders the button to "Додати тест"', () => {
        cy.get('a').contains('Додати тест').should('be.visible');
    });

    it('renders the logout button', () => {
        cy.get('img[alt="out"]').should('be.visible'); // Перевірка, що кнопка виходу відображається
    });

    it('navigates to the About page when "Про нас" is clicked', () => {
        cy.get('a').contains('Про нас').click();
    });


});
