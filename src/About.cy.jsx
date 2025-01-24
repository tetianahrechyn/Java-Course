import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom'; // імпортуємо MemoryRouter
import About from './About'; // шлях до вашого компонента


describe('<About />', () => {
    it('renders the "Постійний розвиток" text', () => {
        mount(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        ); // монтуємо компонент в обгортці MemoryRouter

        // перевіряємо, чи є текст на сторінці
        cy.contains('Постійний розвиток')
            .should('be.visible') // перевіряємо, що текст видимий
            .and('have.css', 'color', 'rgb(124, 78, 228)') // перевіряємо колір
            .and('have.css', 'font-size', '24px'); // перевіряємо розмір шрифту
    });
    it('renders the "ПРО НАС" text', () => {
        mount(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        cy.contains('ПРО НАС')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(102, 102, 102)')
            .and('have.css', 'font-size', '16px'); // При необхідності змініть на відповідний розмір шрифту
    });
    it('renders the main educational text', () => {
        mount(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        cy.contains('Навчальний центр From Zero to Hero')
            .should('be.visible');
    });
    it('renders the logo image', () => {
        mount(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        cy.get('img[alt="Лого"]')
            .should('be.visible')
            .and('have.attr', 'src')
    });
    it('renders links to other pages', () => {
        mount(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        cy.get('a').contains('Зареєструватися').should('have.attr', 'href', '/sign');
        cy.get('a').contains('Наш курс').should('have.attr', 'href', '/our');
        cy.get('a').contains('Увійти').should('have.attr', 'href', '/log');
    });
    it('renders the container image', () => {
        mount(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        cy.get('img[alt="Container"]')
            .should('be.visible');
    });
    it('renders the "Зареєструватися" button', () => {
        mount(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        cy.get('a').contains('Зареєструватися').should('be.visible');
    });
    it('renders section titles', () => {
        mount(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        cy.contains('Теоретична база').should('be.visible');
        cy.contains('Практичні завдання').should('be.visible');
        cy.contains('Постійний розвиток').should('be.visible');
    });
    it('renders copyright information', () => {
        mount(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        cy.contains('Copyright Ideapeel Inc © 2024. All Right Reserved').should('be.visible');
    });
    it('renders the free education text', () => {
        mount(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        cy.contains('абсолютно безкоштовно.')
            .should('be.visible');
    });
    it('renders all main sections', () => {
        mount(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        cy.contains('01').should('be.visible');
        cy.contains('02').should('be.visible');
        cy.contains('03').should('be.visible');
    });
    it('renders the new logo image', () => {
        mount(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        cy.get('img[alt="Новий"]')
            .should('be.visible');
    });
    it('renders the "ЯК МИ ПРАЦЮЄМО" text', () => {
        mount(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        cy.contains('ЯК МИ ПРАЦЮЄМО')
            .should('be.visible');
    });
    it('renders the "Увійти" text', () => {
        mount(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        cy.contains('Увійти')
            .should('be.visible');
    });

    it('renders the "Наш курс" text', () => {
        mount(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        cy.contains('Наш курс')
            .should('be.visible');
    });



});
