import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import Our from './Our';

describe('<Our />', () => {
    it('renders the "НАШ КУРС" text', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.contains('НАШ КУРС')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(102, 102, 102)')
            .and('have.css', 'font-size', '16px');
    });

    it('renders the main course description', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.contains('Ти можеш самостійно обирати теми для вивчення')
            .should('be.visible');
    });

    it('renders the first image', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.get('img[alt="Нова т1"]')
            .should('be.visible');
    });

    it('renders the date below the first image', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.contains('10 Березня 2024').should('be.visible');
    });

    it('renders section title "Основні поняття"', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.contains('Основні поняття').should('be.visible');
    });

    it('renders the second image', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.get('img[alt="Нова т2"]')
            .should('be.visible');
    });

    it('renders the date below the second image', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.contains('11 Березня 2024').should('be.visible');
    });

    it('renders section title "Основні оператори"', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.contains('Основні оператори').should('be.visible');
    });

    it('renders the third image', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.get('img[alt="Нова т3"]')
            .should('be.visible');
    });

    it('renders the date below the third image', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.contains('12 Березня 2024').should('be.visible');
    });

    it('renders section title "Умовні оператори"', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.contains('Умовні оператори').should('be.visible');
    });

    it('renders the link to "Перейти до вивчення..."', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.get('a').contains('Перейти до вивчення...').should('be.visible');
    });

    // Додані нові тести
    it('renders the fourth image', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.get('img[alt="Нова т4"]').should('be.visible');
    });

    it('renders the date below the fourth image', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.contains('13 Березня 2024').should('be.visible');
    });

    it('renders section title "Цикли"', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.contains('Цикли').should('be.visible');
    });



    it('renders the date below the fifth image', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.contains('14 Березня 2024').should('be.visible');
    });

    it('renders section title "Наслідування (Inheritance)"', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.contains('Наслідування (Inheritance)').should('be.visible');
    });


    it('renders the date below the sixth image', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.contains('15 Березня 2024').should('be.visible');
    });

    it('renders section title "Заміщення (Overriding) методу"', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.contains('Заміщення (Overriding) методу').should('be.visible');
    });

    it('renders the link to "Перейти до вивчення..." at the end', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.get('a').contains('Перейти до вивчення...').should('be.visible').last();
    });
    it('renders the title "Поліморфізм"', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.get('div').contains('Поліморфізм (Polymorphism)').should('be.visible');
    });
    it('renders the description of polymorphism', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.get('div').contains('Поліморфізм - це здатність програми ідентично використовувати об\'єкти з однаковим інтерфейсом без інформації.').should('be.visible');
    });
    it('renders image with alt "Нова т4"', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.get('img[alt="Нова т4"]').should('be.visible');
    });
    it('renders the link "Перейти до вивчення..."', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.get('a').contains('Перейти до вивчення...').should('be.visible');
    });
    it('renders the title "Абстракція"', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.get('div').contains('Абстракція (Abstraction)').should('be.visible');
    });
    it('renders the description of abstraction', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.get('div').contains('Абстракція - це процес приховування деталей реалізації від користувача, користувачеві надані тільки функціональні можливості.').should('be.visible');
    });
    it('renders image with alt "Нова т3"', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.get('img[alt="Нова т3"]').should('be.visible');
    });
    it('renders the description of encapsulation', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.get('div').contains('Інкапсульованні змінні класу будуть приховані від інших класів, і можуть бути доступні тільки через методи поточного класу.').should('be.visible');
    });
    it('renders the "Зареєструватися" button', () => {
        mount(
            <MemoryRouter>
                <Our />
            </MemoryRouter>
        );

        cy.get('a').contains('Зареєструватися').should('be.visible');
    });

});
